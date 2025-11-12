from rest_framework import serializers
from .models import Recipe, Ingredient, Favorite
from django.contrib.auth.models import User
import json

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['id', 'name']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class RecipeSerializer(serializers.ModelSerializer):
    ingredients = serializers.SerializerMethodField()
    ingredient_objects = IngredientSerializer(source='ingredients', many=True, read_only=True)
    image = serializers.ImageField(required=False)
    author = UserSerializer(read_only=True)

    class Meta:
        model = Recipe
        fields = [
            'id', 'title', 'description', 'ingredients', 'ingredient_objects',
            'steps', 'image', 'notes', 'author', 'created_at'
        ]
        read_only_fields = ['author', 'created_at']
    
    def create(self, validated_data):
        ingredient_string = validated_data.pop('ingredients', '')
        recipe = Recipe.objects.create(**validated_data)
        self._set_ingredients(recipe, ingredient_string)
        return recipe
    
    def update(self, instance, validated_data):
        ingredient_string = validated_data.pop('ingredients', None)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        if ingredient_string is not None:
            self._set_ingredients(instance, ingredient_string)
        return instance
    
    def _set_ingredients(self, recipe, ingredient_string):
        names = [n.strip().lower() for n in ingredient_string.split(',') if n.strip()]
        recipe.ingredients.clear()
        for name in names:
            ingredient, _ = Ingredient.objects.get_or_create(name=name)
            recipe.ingredients.add(ingredient)

    def get_ingredients(self, obj):
        return ", ".join(i.name for i in obj.ingredients.all())

class RecipeDetailSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True, read_only=True)
    image = serializers.ImageField(required=False)
    author = UserSerializer(read_only=True)

    class Meta:
        model = Recipe
        fields = [
            'id', 'title', 'description', 'ingredients', 'steps',
            'image', 'notes', 'author', 'created_at'
        ]

class FavoriteSerializer(serializers.ModelSerializer):
    recipe = RecipeSerializer(read_only=True)

    class Meta:
        model = Favorite
        fields = ['id', 'recipe']