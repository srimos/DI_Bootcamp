from django.http import HttpResponse
from .data import animals, families

def display_all_animals(request):
    output=""
    for animal in animals:
        output += f"Animal ID: {animal['id']} | Name: {animal['name']}, Legs: {animal['legs']}, Weight: {animal['weight']}, Height: {animal['height']}, Speed: {animal['speed']}<br>"
    return HttpResponse(output)
    
def display_all_families(request):
    output=""
    for family in families:
        output += f"Family ID: {family['id']} | Name: {family['name']}<br>"
    return HttpResponse(output)
    
def display_one_animal(request,animal_id):
    output=""
    for animal in animals:
        if animal["id"] == animal_id:
            output=f"Animal ID: {animal['id']} | Name: {animal['name']}, Legs: {animal['legs']}, Weight: {animal['weight']}, Height: {animal['height']}, Speed: {animal['speed']}"
            break
        else:    
            output=f"Animal ID does not exist."
    return HttpResponse(output)

def display_animal_per_family(request,family_id):
    output=""
    for family in animals:
        if family["family"] == family_id:
            output+=f"Animal ID: {family['id']} | Name: {family['name']}, Legs: {family['legs']}, Weight: {family['weight']}, Height: {family['height']}, Speed: {family['speed']}<br>"
    if output=="":
            output=f"Family ID does not exist."

    return HttpResponse(output)