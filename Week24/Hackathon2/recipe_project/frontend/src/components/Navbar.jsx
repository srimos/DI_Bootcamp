import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";
import React from "react";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">🍳 Clean Fridge</Link>
      </div>
      
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>

      {user ? (
        <>
        <li>
          <Link to="/my-recipes">My Recipes</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <button onClick={logoutUser}>Logout</button>
        </li>
        </>
      ) : (
        <>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        </>
      )}
      </ul>
    </nav>
  );
};

export default Navbar;