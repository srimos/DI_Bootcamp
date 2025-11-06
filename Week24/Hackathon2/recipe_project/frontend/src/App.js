import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8001/api/recipes/")
      .then(res => setRecipes(res.data))
      .catch(err => console.error(err));
  }, []);

  const addRecipe = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("ingredients", ingredients);
    formData.append("instructions", instructions);
    if (image) formData.append("image", image);

    axios.post("http://127.0.0.1:8001/api/recipes/", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    }).then(res => {
      setRecipes([res.data, ...recipes]);
      setTitle("");
      setIngredients("");
      setInstructions("");
      setImage(null);
    }).catch(err => console.error(err));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🍳 Recipe List</h1>

      <form onSubmit={addRecipe}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe title"
        /><br/>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingredients"
        /><br/>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Instructions"
        /><br/>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        /><br/>
        <button type="submit">Add Recipe</button>
      </form>

      <ul>
        {recipes.map(r => (
          <li key={r.id}>
            <h3>{r.title}</h3>
            {r.image && <img src={`http://127.0.0.1:8001${r.image}`} alt={r.title} width="200" />}
            <p><b>Ingredients:</b> {r.ingredients}</p>
            <p><b>Instructions:</b> {r.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;