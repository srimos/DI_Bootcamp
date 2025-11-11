import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import { AuthContext } from "../context/AuthContext";
import "./MyRecipes.css";

function MyRecipes() {
  const [myRecipes, setMyRecipes] = useState([]);
  const { authTokens, user } = useContext(AuthContext);

  useEffect(() => {
    const fetchMyRecipes = async () => {
      try {
        const res = await api.get("my-recipes/", {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        });
        setMyRecipes(res.data);
      } catch (err) {
        console.error("Error fetching your recipes:", err);
      }
    };
    fetchMyRecipes();
  }, [authTokens]);

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

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Recipes 👨‍🍳</h2>
        <Link
          to="/create-recipe"
          className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded"
        >
          + Add Recipe
        </Link>
      </div>

      {myRecipes.length === 0 ? (
        <p className="text-gray-500 text-center">
          You haven’t created any recipes yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {myRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:scale-[1.02]"
            >
              {recipe.image && (
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-24 object-cover rounded-t-lg"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{recipe.description}</p>

                {recipe.category && (
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded mb-3">
                    {recipe.category}
                  </span>
                )}

                <div className="flex justify-between items-center">
                  <Link
                    to={`/recipes/${recipe.id}`}
                    className="text-green-600 hover:underline text-sm"
                  >
                    View
                  </Link>
                  <Link
                    to={`/edit-recipe/${recipe.id}`}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(recipe.id)} className="btn-delete">
                  🗑 Delete
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyRecipes;