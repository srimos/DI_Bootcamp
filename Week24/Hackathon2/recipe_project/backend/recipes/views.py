from rest_framework import generics
from .models import Recipe, Favorite
from .serializers import RecipeSerializer, RecipeDetailSerializer, FavoriteSerializer
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action, api_view, permission_classes
from django.db.models import Q
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    @action(detail=False, methods=['get'])
    def search(self, request):
        ingredients_param = request.query_params.get('ingredients')
        if not ingredients_param:
            return Response([])

        ingredients = [i.strip().lower() for i in ingredients_param.split(',') if i.strip()]
        recipes = Recipe.objects.all()

        for ing in ingredients:
            recipes = recipes.filter(ingredients__name__icontains=ing)

        serializer = self.get_serializer(recipes, many=True)
        return Response(serializer.data)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class RecipeSearchView(generics.ListAPIView):
    serializer_class = RecipeSerializer

    def get_queryset(self):
        query = self.request.query_params.get('ingredients', '').strip()
        recipes = Recipe.objects.all()

        if not query:
            return recipes

        terms = [term.strip().lower() for term in query.replace(',', ' ').split() if term.strip()]

        for term in terms:
            recipes = recipes.filter(
                Q(title__icontains=term) |
                Q(description__icontains=term) |
                Q(ingredients__name__icontains=term)
            )

        return recipes.distinct()
    
class RecipeDetailView(generics.RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeDetailSerializer

class FavoriteViewSet(viewsets.ModelViewSet):
    serializer_class = FavoriteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Favorite.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=False, methods=["post"], url_path="toggle")
    def toggle_favorite(self, request):
        recipe_id = request.data.get("recipe_id")
        user = request.user

        try:
            favorite = Favorite.objects.get(user=user, recipe_id=recipe_id)
            favorite.delete()
            return Response({"message": "Removed from favorites"}, status=status.HTTP_200_OK)
        except Favorite.DoesNotExist:
            Favorite.objects.create(user=user, recipe_id=recipe_id)
            return Response({"message": "Added to favorites"}, status=status.HTTP_201_CREATED)
        
class MyRecipeViewSet(viewsets.ModelViewSet):
    serializer_class = RecipeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Recipe.objects.filter(author=self.request.user)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)