from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RecipeViewSet, CategoryViewSet

router = DefaultRouter()
router.register('recipes', RecipeViewSet)
router.register('categories', CategoryViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]