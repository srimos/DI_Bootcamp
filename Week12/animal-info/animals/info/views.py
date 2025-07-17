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
        if animal == animal_id:
            output=f"Animal ID: {animal_id['id']} | Name: {animal_id['name']}, Legs: {animal_id['legs']}, Weight: {animal_id['weight']}, Height: {animal_id['height']}, Speed: {animal_id['speed']}"
        else:    
            output=f"Animal ID does not exist."
    return HttpResponse(output)

def display_animal_per_family(request):
    return HttpResponse("Working on it...")