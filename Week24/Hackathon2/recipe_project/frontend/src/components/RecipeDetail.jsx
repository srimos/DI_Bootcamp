import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import "./RecipeDetail.css";
import { AuthContext } from "../context/AuthContext";
import api from "../api";

const RecipeDetail = () => {
  const { id } = useParams(); // from route /recipes/:id
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user, authTokens } = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = async () => {
    try {
      await api.post(
        "favorites/",
        { recipe: recipe.id },
        { headers: { Authorization: `Bearer ${authTokens.access}` } }
      );
      alert("Recipe added to favorites!");
    } catch (err) {
      console.error(err);
      alert("Error adding to favorites");
    }
  };

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await api.get(`recipes/${id}/`);
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    };
    const checkFavorite = async () => {
      if (!authTokens) return;
      const res = await api.get("favorites/", {
        headers: { Authorization: `Bearer ${authTokens.access}` },
      });
      const favIds = res.data.map((f) => f.recipe.id);
      setIsFavorite(favIds.includes(parseInt(id)));
    };
    fetchRecipe();
    checkFavorite();
  }, [id, authTokens]);

  const handleToggleFavorite = async () => {
    try {
      await api.post(
        "favorites/toggle/",
        { recipe_id: id },
        { headers: { Authorization: `Bearer ${authTokens.access}` } }
      );
      setIsFavorite(!isFavorite);
    } catch (err) {
      console.error("Error toggling favorite:", err);
    }
  };

  if (loading) return <p>Loading recipe...</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="recipe-detail-container">
      <h2>{recipe.title}</h2>
      {recipe.image && <img src={recipe.image} alt={recipe.title} />}
      <p><strong>Author:</strong> {recipe.author.username}</p>
      <p><strong>Description:</strong> {recipe.description}</p>

      {user && (
        <button
          onClick={handleToggleFavorite}
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
        >
          {isFavorite ? "💔 Remove Favorite" : "❤️ Add to Favorites"}
        </button>
      )}

      <div>
        <strong>Ingredients:</strong>
        <ul>
          {recipe.ingredients.map((ing) => (
            <li key={ing.id}>{ing.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Instructions:</strong>
        <ol>
          {recipe.steps.split("\n").map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
{/* 
      {user && <button onClick={handleFavorite}>❤️ Save to Favorites</button>} */}

      <Link to="/">← Back to search</Link>
    </div>
  );
};

export default RecipeDetail;