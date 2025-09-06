from django.urls import path
from . import views

urlpatterns = [
    path("books/", views.list_books, name="list_books"),
    path("books/<int:id>/", views.book_detail, name="book_detail"),
]