from django.urls import path, include
from rest_framework.routers import DefaultRouter
from recipes.views import RecipeViewSet, RecipeSearchView, RecipeDetailView, FavoriteViewSet, MyRecipeViewSet
from . import views

router = DefaultRouter()
router.register(r'recipes', RecipeViewSet, basename='recipe')
router.register(r'favorites', FavoriteViewSet, basename='favorite')
router.register(r"my-recipes", MyRecipeViewSet, basename="my-recipe")

urlpatterns = [
    path("recipes/search/", RecipeSearchView.as_view(), name="recipe-search"),
    # path('recipes/<int:pk>/detail/', RecipeDetailView.as_view(), name='recipe-detail'), 
    path("", include(router.urls)),
]