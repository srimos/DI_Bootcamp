import axios from 'axios';

const API_URL = "https://your-django-backend.onrender.com/api/";

export const getRecipes = async () => {
  const res = await axios.get(`${API_URL}recipes/`);
  return res.data;
};