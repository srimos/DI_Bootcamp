from django.urls import path
from . import views

urlpatterns = [
    path("", views.list_books, name="list_books"),
    path("<int:id>/", views.book_detail, name="book_detail"),
    path("create/", views.create_book, name="create_book"),
]