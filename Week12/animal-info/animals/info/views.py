from django.http import HttpResponse
from .data import animals, families

def display_all_animals(request):
    output=""
    for animal in animals:
        output += f"Name: {animal['name']}, Legs: {animal['legs']}, Weight: {animal['weight']}, Height: {animal['height']}, Speed: {animal['speed']}<br>"
    return HttpResponse(output)
    
def display_all_families(request):
    return HttpResponse("Working on it...")
    
def display_one_animal(request):
    return HttpResponse("Working on it...")

def display_animal_per_family(request):
    return HttpResponse("Working on it...")