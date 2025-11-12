import { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./RecipeDetail.css";
import { AuthContext } from "../context/AuthContext";
import api from "../api";

const RecipeDetail = () => {
  const { id } = useParams(); // from route /recipes/:id
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user, authTokens } = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

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

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;

    try {
      await api.delete(`/my-recipes/${id}/`, {
        headers: { Authorization: `Bearer ${authTokens.access}` },
      });
      alert("Recipe deleted successfully!");
      navigate("/my-recipes");
    } catch (error) {
      console.error("Delete failed:", error.response?.data || error);
      alert("Failed to delete recipe.");
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

  const isAuthor = user && recipe.author?.id === user.id;

  return (
    <div className="recipe-detail-container">
      <div className="recipe-header">
        <h2>{recipe.title}</h2>
        {recipe.image && (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="recipe-image"
          />
        )}
      </div>

      <p className="recipe-author">
        👨‍🍳 By {recipe.author?.username || "Unknown"} —{" "}
        <span className="recipe-date">
          {new Date(recipe.created_at).toLocaleDateString()}
        </span>
      </p>

      <section className="recipe-section">
        <h3>Description</h3>
        <p>{recipe.description}</p>
      </section>

      {user && (
        <button
          onClick={handleToggleFavorite}
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
        >
          {isFavorite ? "💔 Remove Favorite" : "❤️ Add to Favorites"}
        </button>
      )}

      <section className="recipe-section">
        <h3>Ingredients</h3>
        <ul className="ingredients-list">
          {recipe.ingredients?.length > 0 ? (
            recipe.ingredients.map((i) => (
              <li key={i.id}>{i.name}</li>
            ))
          ) : (
            <li>No ingredients listed.</li>
          )}
        </ul>
      </section>

      <section className="recipe-section">
        <h3>Instructions</h3>
        <ol>
          {(recipe.steps || "")
            .split("\n")
            .filter((line) => line.trim() !== "")
            .map((line, index) => (
              <li key={index}>{line}</li>
            ))
          }
        </ol>
      </section>

      {recipe.notes && (
        <section className="recipe-section">
          <h3>Notes</h3>
          <p>{recipe.notes}</p>
        </section>
      )}

{/*   {user && <button onClick={handleFavorite}>❤️ Save to Favorites</button>} */}

      <div className="recipe-actions">
        <Link
          to={isAuthor ? "/my-recipes" : "/"}
          className="back-link"
        >
          ← Back to {isAuthor ? "My Recipes" : "Recipes"}
        </Link>

        {isAuthor && (
          <div className="author-actions">
            <Link to={`/edit/${recipe.id}`} className="edit-btn">
              ✏️ Edit
            </Link>
            <button onClick={handleDelete} className="delete-btn">
              🗑 Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;