from rest_framework import serializers
from .models import Recipe, Ingredient
from django.contrib.auth.models import User

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['id', 'name']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class RecipeSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True, read_only=True)
    image = serializers.ImageField(required=False)
    author = UserSerializer(read_only=True)

    class Meta:
        model = Recipe
        fields = [
            'id', 'title', 'description', 'ingredients', 'steps',
            'image', 'author', 'created_at'
        ]

class RecipeDetailSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True, read_only=True)
    image = serializers.ImageField(required=False)
    author = UserSerializer(read_only=True)

    class Meta:
        model = Recipe
        fields = [
            'id', 'title', 'description', 'ingredients', 'steps',
            'image', 'author', 'created_at'
        ]