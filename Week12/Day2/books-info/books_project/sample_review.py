import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "books_project.settings")
import django
django.setup()

from django.contrib.auth.models import User
from books.models import Book,BookReview

# create user
user = User.objects.create_user(username="shaun", email="shaun@example.com", password="12345")

book1 = Book.objects.get(title="The Effects of Video Games on Children")
book2 = Book.objects.get(title="Trading Card Games For Dummies")

# create reviews
review1 = BookReview.objects.create(
    book=book1,
    user=user,
    rating=5,
    review_text="Informative!"
)

review2 = BookReview.objects.create(
    book=book2,
    user=user,
    rating=1,
    review_text="Too basic!"
)

# get review user
review = BookReview.objects.first()
print(review.user.username)

# get all reviews by user
user = User.objects.get(username="shaun")
user_reviews = user.bookreview_set.all()
for r in user_reviews:
    print(r.book.title, r.rating, r.review_text)