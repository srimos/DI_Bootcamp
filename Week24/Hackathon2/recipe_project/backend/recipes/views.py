from rest_framework import generics
from .models import Recipe
from .serializers import RecipeSerializer
from rest_framework import viewsets

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all().order_by('-created_at')
    serializer_class = RecipeSerializer

class RecipeSearchView(generics.ListAPIView):
    serializer_class = RecipeSerializer

    def get_queryset(self):
        ingredients = self.request.query_params.getlist('ingredients')
        queryset = Recipe.objects.all()
        if ingredients:
            queryset = queryset.filter(ingredients__name__in=ingredients).distinct()
        return queryset