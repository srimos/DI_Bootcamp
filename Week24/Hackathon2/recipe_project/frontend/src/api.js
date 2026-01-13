import axios from "axios";

const BASE_URL = 
// import.meta.env?.VITE_API_URL || 
"https://cleanfridge.onrender.com";
if (!BASE_URL) console.error("VITE_API_URL is undefined!");

const api = axios.create({
  baseURL: BASE_URL + "/api/",
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem("access_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
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