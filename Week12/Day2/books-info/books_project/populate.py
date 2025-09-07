import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'books_project.settings')
import django
django.setup()

from datetime import datetime
from books.models import Book

import requests

def fetch_books(query, max_results=5):
    url = f"https://www.googleapis.com/books/v1/volumes?q={query}&maxResults={max_results}"
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return response.json().get("items", [])
    except requests.RequestException as e:
        print(f"Error fetching books: {e}")
        return []
    
def populate_books(query="django"):
    books = fetch_books(query)

    for item in books:
        volume_info = item.get("volumeInfo", {})

        title = volume_info.get("title", "Untitled")
        authors = volume_info.get("authors", ["Unknown"])
        published_date = volume_info.get("publishedDate", "1900-01-01")
        page_count = volume_info.get("pageCount", 0)
        categories = ", ".join(volume_info.get("categories", []))
        description = volume_info.get("description", "")
        thumbnail_url = volume_info.get("imageLinks", {}).get("thumbnail", "")    

        pub_date = None
        try:
            if len(published_date) == 4:  # Year only
                pub_date = datetime.strptime(published_date, "%Y").date()
            elif len(published_date) == 7:  # Year-Month
                pub_date = datetime.strptime(published_date, "%Y-%m").date()
            else:  # Full date
                pub_date = datetime.strptime(published_date, "%Y-%m-%d").date()
        except Exception:
            pub_date = None

        book, created = Book.objects.get_or_create(
            title=title,
            author=", ".join(authors),
            published_date=pub_date,
            defaults={
                "page_count": page_count,
                "categories": categories,
                "description": description,
                "thumbnail_url": thumbnail_url,
            },
        )

        if created:
            print(f"Added: {title}")
        else:
            print(f"Already exists: {title}")

if __name__ == "__main__":
    populate_books("python")