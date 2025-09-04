from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200, blank=False)
    author = models.CharField(max_length=100, blank=False)
    published_date = models.DateField(blank=False)
    description = models.TextField(blank=False)
    page_count = models.IntegerField(min_value=0)
    categories = models.CharField(max_length=100, blank=False)
    thumbnail_url = models.URLField()

class BookReview(models.Model):
    book = models.ForeignKey(Book,
        blank=False, 
        on_delete=models.CASCADE,
        primary_key=True,
    )
    user = models.ForeignKey(blank=False)
    rating = models.IntegerField()
    rating = models.IntegerField(min_value=1, max_value=5)
    review_text = models.TextField(min_length=10)