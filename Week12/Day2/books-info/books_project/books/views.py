from django.shortcuts import render
from .models import Book, BookReview 
from django.http import JsonResponse

# Create your views here.
def list_books(request):
    books = Book.objects.all()
    data = []

    for book in books:
        data.append({
            "title": book.title,
        })

    return JsonResponse(data, safe=False)

def book_detail(request,id):
    book=Book.objects.get(id=id)
    data = {
        "id": book.id,
        "title": book.title,
        "author": book.author,
        "published_date": book.published_date,
        "description": book.description,
        "page_count": book.page_count,
        "categories": book.categories,
        "thumbnail_url": book.thumbnail_url
    }    

    return JsonResponse(data)