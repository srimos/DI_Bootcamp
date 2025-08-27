brand = {
    'name': 'Zara',
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color': {
        'France': 'blue', 
        'Spain': 'red', 
        'US': ['pink', 'green'],
    }
}
brand['number_stores']=2
print("Zara's clients include",brand['type_of_clothes'][0],",",brand['type_of_clothes'][1],",",brand['type_of_clothes'][2],"and",brand['type_of_clothes'][3])
brand["country_creation"]="Spain"
brand["international_competitors"].append("Desigual")
del brand["creation_date"]
print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])
print(len(brand.keys()))
print(brand.keys())
print(brand)

more_on_zara={
    "creation_date":'',
    "number_stores":'',
}

def merge_zara(d1,d2):
    merged=d1.copy()
    for key, value in d2.items():
        if key in merged:
            if isinstance(merged[key], list) and isinstance(value, list):
                merged[key].extend(value)  
            elif isinstance(merged[key], dict) and isinstance(value, dict):
                merged[key] = merge_zara(merged[key], value)
            else:
                merged[key]=value    
        else:
            merged[key]=value
    return merged

merged=merge_zara(brand,more_on_zara)
print(merged)

