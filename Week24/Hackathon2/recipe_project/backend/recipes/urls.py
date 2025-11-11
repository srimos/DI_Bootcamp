from django.urls import path, include
from rest_framework.routers import DefaultRouter
from recipes.views import RecipeViewSet, RecipeSearchView, RecipeDetailView, FavoriteViewSet
from . import views

router = DefaultRouter()
router.register(r'recipes', RecipeViewSet, basename='recipe')
router.register(r'favorites', FavoriteViewSet, basename='favorite')

urlpatterns = [
    path("recipes/search/", RecipeSearchView.as_view(), name="recipe-search"),
    path('recipes/<int:pk>/', RecipeDetailView.as_view(), name='recipe-detail'), 
    path("api/my-recipes/", views.my_recipes, name="my-recipes"),
    path("", include(router.urls)),
]