from django.urls import path, include
from rest_framework.routers import DefaultRouter
from recipes.views import RecipeViewSet, RecipeSearchView, RecipeDetailView

router = DefaultRouter()
router.register(r'recipes', RecipeViewSet, basename='recipe')

urlpatterns = [
    path("recipes/search/", RecipeSearchView.as_view(), name="recipe-search"),
    path('recipes/<int:pk>/', RecipeDetailView.as_view(), name='recipe-detail'), 
    path("", include(router.urls)),
]