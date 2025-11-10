import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RecipeSearch from "./components/RecipeSearch";
import RecipeDetail from "./components/RecipeDetail";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Favorites from "./components/Favorites";
import MyRecipes from "./components/MyRecipes";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<RecipeSearch />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/my-recipes" element={
            <PrivateRoute>
              <MyRecipes />
            </PrivateRoute>
          }/>
          <Route path="/favorites" element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;