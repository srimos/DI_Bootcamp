from django.urls import path, include
from rest_framework.routers import DefaultRouter
from recipes.views import RecipeViewSet, RecipeSearchView

router = DefaultRouter()
router.register(r'recipes', RecipeViewSet, basename='recipe')

urlpatterns = [
    path("api/", include(router.urls)),
    path("api/recipes/search/", RecipeSearchView.as_view(), name="recipe-search"),
]