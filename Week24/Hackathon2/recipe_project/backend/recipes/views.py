from rest_framework import generics
from .models import Recipe
from .serializers import RecipeSerializer, RecipeDetailSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action, api_view
from django.db.models import Q

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    @action(detail=False, methods=['get'])
    def search(self, request):
        ingredients_param = request.query_params.get('ingredients')
        if not ingredients_param:
            return Response([])

        ingredients = [i.strip().lower() for i in ingredients_param.split(',') if i.strip()]
        recipes = Recipe.objects.all()

        for ing in ingredients:
            recipes = recipes.filter(ingredients__icontains=ing)

        serializer = self.get_serializer(recipes, many=True)
        return Response(serializer.data)

class RecipeSearchView(generics.ListAPIView):
    serializer_class = RecipeSerializer

    def get_queryset(self):
        query = self.request.query_params.get('ingredients', '')
        recipes = Recipe.objects.all()

        if query:
            terms = [term.strip().lower() for term in query.replace(',', ' ').split()]
            filters = Q()
            for term in terms:
                filters |= Q(ingredients__name__icontains=term) | Q(title__icontains=term)
            recipes = recipes.filter(filters).distinct()

        return recipes
    
class RecipeDetailView(generics.RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeDetailSerializer