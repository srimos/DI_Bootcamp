import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { AuthContext } from "../context/AuthContext";
import "./CreateRecipe.css";

function CreateRecipe() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [notes, setNotes] = useState("");
  const [image, setImage] = useState(null);
  const { authTokens } = useContext(AuthContext);
  const navigate = useNavigate();

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
      await api.post("recipes/", formData, {
        headers: {
          Authorization: `Bearer ${authTokens.access}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Recipe created successfully!");
      navigate("/my-recipes");
    } catch (error) {
      console.error("Error creating recipe:", error);
      alert("Failed to create recipe. Please try again.");
    }
  };

  return (
    <div className="create-recipe-container">
      <h2>Create a New Recipe 🍲</h2>

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
          placeholder="e.g. eggs, milk, cheese"
          required
        />

        <label>Instructions</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          placeholder={ `Write step one here.
Then start the next step in a new line.
And so on...`}
          required
        />

        <label>Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <label>Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit" className="submit-btn">
          Create Recipe
        </button>
      </form>
    </div>
  );
}

export default CreateRecipe;