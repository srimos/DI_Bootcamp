from .models import Vehicle
from rest_framework import serializers

class VechileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = '__all__' 
        