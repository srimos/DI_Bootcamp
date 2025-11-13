import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://127.0.0.1:8001/api/auth/register/", formData);
      if (res.status === 201) {
        alert("Signup successful! Please log in.");
        navigate("/login");
      }
    } catch (err) {
      setError("Registration failed. Try a different username or password.");
    }
  };

  return (
    <>
      <p>Create an account to save your favorite recipes and create your own recipes.</p>
      <div className="auth-container">
        
        <h2>Create an Account</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <p>
          Already have an account?{" "}
          <span className="link" onClick={() => navigate("/login")}>
            Log in
          </span>
        </p>
      </div>
    </>
  );
}

export default Signup;