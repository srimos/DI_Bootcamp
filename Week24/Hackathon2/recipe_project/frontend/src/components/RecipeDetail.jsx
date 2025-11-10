import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./RecipeDetail.css";

const RecipeDetail = () => {
  const { id } = useParams(); // from route /recipes/:id
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8001/api/recipes/${id}/`
        );
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  if (loading) return <p>Loading recipe...</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="recipe-detail-container">
      <h2>{recipe.title}</h2>
      {recipe.image && <img src={recipe.image} alt={recipe.title} />}
      <p><strong>Author:</strong> {recipe.author.username}</p>
      <p><strong>Description:</strong> {recipe.description}</p>

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

      <Link to="/">← Back to search</Link>
    </div>
  );
};

export default RecipeDetail;