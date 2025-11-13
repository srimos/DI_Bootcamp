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
    ingredients = serializers.CharField(write_only=True)
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
        ingredients_raw = validated_data.pop('ingredients', "")
        recipe = Recipe.objects.create(**validated_data)
        ingredient_names = self._parse_ingredients(ingredients_raw)
        self._set_ingredients(recipe, ingredient_names)
        return recipe
    
    def update(self, instance, validated_data):
        ingredients_raw = validated_data.pop('ingredients', None)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        if ingredients_raw is not None:
            ingredient_names = self._parse_ingredients(ingredients_raw)
            self._set_ingredients(instance, ingredient_names)
        return instance
    
    def _parse_ingredients(self, ingredients_raw):
        if isinstance(ingredients_raw, list):
            return [name.strip().lower() for name in ingredients_raw if name.strip()]
        elif isinstance(ingredients_raw, str):
            return [name.strip().lower() for name in ingredients_raw.split(",") if name.strip()]
        return []

    def _set_ingredients(self, recipe, ingredient_names):
        recipe.ingredients.clear()
        for name in ingredient_names:
            ingredient, _ = Ingredient.objects.get_or_create(name=name)
            recipe.ingredients.add(ingredient)

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data["ingredients"] = ", ".join(
            [i.name for i in instance.ingredients.all()]
        )
        return data
    
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