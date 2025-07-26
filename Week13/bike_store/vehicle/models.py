from django.db import models
from customer.models import Customer
from django.utils.timezone import now

class Vehicle(models.Model):
    # vehicle_type: models.ForeignKey ()
    real_cost: models.DecimalField (max_digits=10, decimal_places=2)
    date_created: models.DateField (default=now())
    # size: models.ForeignKey(, on_delete=models.CASCADE)

class Vehicle_Type(models.Model):
    name: models.CharField (max_length=50, unique=True)

class Vehicle_Size(models.Model):
    name: models.CharField (max_length=50, unique=True)

