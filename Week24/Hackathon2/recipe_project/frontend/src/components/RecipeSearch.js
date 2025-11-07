import axios from "axios";
import { useState } from "react";

function RecipeSearch() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/recipes/search/?ingredients=${query}`
      );
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Find Recipes by Ingredients</h2>
      <div className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="e.g. egg, cheese, tomato"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-400 rounded px-4 py-2 flex-1"
        />
        <button
          onClick={handleSearch}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:scale-[1.02]"
          >
            {recipe.image && (
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{recipe.description}</p>
              {recipe.category && (
                <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                  {recipe.category}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {recipes.length === 0 && (
        <p className="text-gray-500 mt-6">No recipes found. Try another ingredient!</p>
      )}
    </div>
  );
}

export default RecipeSearch;