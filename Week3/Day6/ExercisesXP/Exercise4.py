users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

user_dict1={}
for i, user in enumerate(users):
    user_dict1[user]=i
print(user_dict1)

user_dict2={}
for i, user in enumerate(users):
    user_dict2[i]=user
print(user_dict2)

user_sorted=users.copy()
user_sorted.sort()
user_dict3={}
for i, user in enumerate(user_sorted):
    user_dict3[user]=i
print(user_dict3)