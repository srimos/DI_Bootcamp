from django.urls import path, include
from rest_framework.routers import DefaultRouter
from recipes.views import RecipeViewSet, RecipeSearchView, RecipeDetailView, FavoriteViewSet, MyRecipeViewSet, db_debug
from . import views

from django.http import JsonResponse
from django.db import connection
from recipes.models import Recipe

def health_check(request):
    return JsonResponse({
        "status": "ok",
        "db_name": connection.settings_dict.get("NAME"),
        "db_host": connection.settings_dict.get("HOST"),
        "db_user": connection.settings_dict.get("USER"),
        "recipe_count": Recipe.objects.count(),
    })

router = DefaultRouter()
router.register(r'recipes', RecipeViewSet, basename='recipe')
router.register(r'favorites', FavoriteViewSet, basename='favorite')
router.register(r"my-recipes", MyRecipeViewSet, basename="my-recipe")

urlpatterns = [
    path("recipes/search/", RecipeSearchView.as_view(), name="recipe-search"),
    # path('recipes/<int:pk>/detail/', RecipeDetailView.as_view(), name='recipe-detail'), 
    path("", include(router.urls)),
    path("db-debug/", db_debug),
    path("health/", health_check),
]