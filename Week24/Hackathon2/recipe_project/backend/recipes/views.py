from rest_framework import generics
from .models import Recipe
from .serializers import RecipeSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action

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
        ingredients = self.request.query_params.getlist('ingredients')
        queryset = Recipe.objects.all()
        if ingredients:
            queryset = queryset.filter(ingredients__name__in=ingredients).distinct()
        return queryset