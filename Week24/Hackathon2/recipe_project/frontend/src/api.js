import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8001/api/",
});

export default api;

// const API_URL = "http://127.0.0.1:8000/api/";

// export async function fetchRecipes(ingredients) {
//   const params = new URLSearchParams();
//   ingredients.forEach((i) => params.append("ingredients", i));
//   const res = await fetch(`${API_URL}recipes/search/?${params.toString()}`);
//   return res.json();
// }

// export async function fetchAllRecipes() {
//   const res = await fetch(`${API_URL}recipes/`);
//   return res.json();
// }