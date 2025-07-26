from django.db import models

class Address(models.Model):
    address: models.CharField (max_length=100)
    address2: models.CharField (max_length=100, null=True, blank=True)
    city: models.CharField (max_length=50)
    country: models.CharField (max_length=50)
    postal_code: models.CharField (max_length=10)
    
class Customer(models.Model):
    first_name = models.CharField (max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField (unique=True)
    phone_number: models.CharField (max_length=15)
    address: models.ForeignKey(Address, on_delete=models.CASCADE)    