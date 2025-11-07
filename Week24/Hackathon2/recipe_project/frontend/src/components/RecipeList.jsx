import axios from "axios";
import { useEffect, useState } from "react";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/recipes/")
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;