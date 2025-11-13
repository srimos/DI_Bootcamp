import { useEffect, useState, useContext } from "react";
import api from "../api";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./RecipeSearch.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const { authTokens } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFavorites();
  }, [authTokens]);

  const fetchFavorites = async () => {
    setLoading(true);
    try {
      const response = await api.get("favorites/", {
        headers: { Authorization: `Bearer ${authTokens.access}` },
      });
      setFavorites(response.data);
    } catch (err) {
      console.error("Error fetching favorites:", err);
    } finally {
    setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>My Favorite Recipes ❤️</h2>
      <div className="recipe-list">
        {favorites.map((fav) => (
          <div key={fav.id} className="recipe-card">
            <img src={fav.recipe.image} alt={fav.recipe.title} className="recipe-image" />
            
            <div className="recipe-content">
              <h3>{fav.recipe.title}</h3>
              <p>{fav.recipe.description}</p>

              <div className="ingredients">
                {fav.recipe.ingredient_objects &&
                  fav.recipe.ingredient_objects.map((ing) => (
                    <span className="ingredient-tag" key={ing.id}>
                      {ing.name}
                    </span>
                  ))}
              </div>

              <button
                className="view-recipe-btn"
                onClick={() => navigate(`/recipes/${fav.recipe.id}`)}
              >
                View Recipe
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;