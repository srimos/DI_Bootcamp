import { useState } from "react";
import { fetchRecipes } from "../api/api";

function SearchRecipes() {
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const ingredients = input.split(",").map(i => i.trim());
    const data = await fetchRecipes(ingredients);
    setRecipes(data);
  };

  return (
    <div className="search-container">
      <h2>Find Recipes by Ingredients 🍳</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="e.g. egg, milk, tomato"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="recipe-list">
        {recipes.map((r) => (
          <div key={r.id} className="recipe-card">
            {r.image && <img src={`http://127.0.0.1:8000${r.image}`} alt={r.title} />}
            <h3>{r.title}</h3>
            <p>{r.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchRecipes;