import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";
import { AuthContext } from "../context/AuthContext";
import "./CreateRecipe.css";

function EditRecipe() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [notes, setNotes] = useState("");
  const [image, setImage] = useState(null);
  const { authTokens } = useContext(AuthContext);
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

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
        setIngredients(
          data.ingredients?.map(i => i.name).join(", ") || ""
        );
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
    formData.append("ingredients", ingredients);
    formData.append("steps", steps);
    formData.append("notes", notes)
    if (image) formData.append("image", image);

    try {
      await api.put(`/my-recipes/${id}/`, formData, {
        headers: {
          Authorization: `Bearer ${authTokens.access}`,
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Recipe updated successfully!");
      navigate("/my-recipes");
    } catch (error) {
      console.error("Error updating recipe:", error.response?.data || error);
      alert("Failed to update recipe. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;

    try {
      await api.delete(`recipes/${id}/`, {
        headers: { Authorization: `Bearer ${authTokens.access}` },
      });
      setRecipe((prev) => prev.filter((r) => r.id !== id));
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
        <input 
          type="text"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

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

        <label>Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
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