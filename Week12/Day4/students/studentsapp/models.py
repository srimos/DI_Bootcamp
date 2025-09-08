from django.db import models
from django.utils import timezone

# Create your models here.
class Student(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    date_joined = models.DateTimeField(auto_now_add=True)


