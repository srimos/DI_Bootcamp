import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";
import { AuthContext } from "../context/AuthContext";
import "./CreateRecipe.css"; // reuse same CSS

function EditRecipe() {
  const { id } = useParams();
  const { authTokens } = useContext(AuthContext);
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await api.get(`recipes/${id}/`, {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        });
        const data = response.data;
        setRecipe(data);
        setTitle(data.title);
        setDescription(data.description);
        setCategory(data.category || "");
        setIngredients(data.ingredients_text || "");
        setSteps(data.steps || "");
      } catch (error) {
        console.error("Error fetching recipe:", error);
        alert("Failed to load recipe details.");
      }
    };
    fetchRecipe();
  }, [id, authTokens]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("ingredients_text", ingredients);
    formData.append("steps", steps);
    if (image) formData.append("image", image);

    try {
      await api.put(`recipes/${id}/`, formData, {
        headers: {
          Authorization: `Bearer ${authTokens.access}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Recipe updated successfully!");
      navigate("/my-recipes");
    } catch (error) {
      console.error("Error updating recipe:", error);
      alert("Failed to update recipe. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;

    try {
      await api.delete(`recipes/${id}/`, {
        headers: { Authorization: `Bearer ${authTokens.access}` },
      });
      setMyRecipes((prev) => prev.filter((r) => r.id !== id));
      alert("Recipe deleted successfully!");
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete recipe.");
    }
  };

  if (!recipe) return <p>Loading recipe...</p>;

  return (
    <div className="create-recipe-container">
      <h2>Edit Recipe ✏️</h2>

      <form onSubmit={handleSubmit} className="create-recipe-form">
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Category</label>
        <input value={category} onChange={(e) => setCategory(e.target.value)} />

        <label>Ingredients (comma-separated)</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />

        <label>Instructions</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          required
        />

        <label>Change Image (optional)</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        {recipe.image && (
          <img
            src={recipe.image}
            alt={recipe.title}
            style={{ width: "120px", borderRadius: "8px", marginTop: "10px" }}
          />
        )}

        <button type="submit" className="submit-btn">
          Save Changes
        </button>

        <button
          type="button"
          className="delete-btn"
          onClick={() => handleDelete(recipe.id)}
        >
          Delete Recipe
        </button>
      </form>
    </div>
  );
}

export default EditRecipe;