import { useEffect, useState } from "react";
import { getRecipes } from "../api/api";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then(data => setRecipes(data));
  }, []);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
      {recipes.map(r => (
        <div key={r.id} className="border rounded-xl shadow-md p-4">
          <img src={r.image} alt={r.title} className="rounded-lg mb-2" />
          <h2 className="text-xl font-semibold">{r.title}</h2>
          <p>{r.description.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}