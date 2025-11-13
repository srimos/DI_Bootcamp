import api from "../api";
import { useState,useEffect } from "react";
import "./RecipeSearch.css";
import { useNavigate } from "react-router-dom";

const RecipeSearch = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(
        `/recipes/search/${query && query.trim() !== "" ? `?ingredients=${encodeURIComponent(query.trim())}` : ""}`
      );
      setRecipes(response.data);
    } catch (err) {
      console.error("Error fetching recipes:", err);
      setError("Failed to fetch recipes. Is your backend running?");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchRecipes();
  };

  return (
    <div className="container">
      <p>Welcome to Clean Fridge! Do you have leftovers in your fridge that you want to get rid of? Enter your ingredients in the search bar below and find some simple and creative recipes to use up your leftovers!</p>

      <h2>Find Recipes by Ingredients</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="e.g. egg, cheese, tomato"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p style={{ textAlign: "center", color: "#666" }}>Loading recipes...</p>}

      {!loading && recipes.length === 0 && (
        <p style={{ textAlign: "center", color: "#666" }}>
          No recipes found. Try another ingredient!
        </p>
      )}

      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            {recipe.image && (
              <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            )}

            <div className="recipe-content">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>

              <div className="ingredients">
                {recipe.ingredient_objects &&
                  recipe.ingredient_objects.map((ing) => (
                    <span className="ingredient-tag" key={ing.id}>
                      {ing.name}
                    </span>
                  ))}
              </div>

              <button
                className="view-recipe-btn"
                onClick={() => navigate(`/recipes/${recipe.id}`)}
              >
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;