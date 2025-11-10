import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  
  const { loginUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await loginUser(username, password);
    if (success) navigate("/");
  };

  return (
    <div className="auth-container"
    // style={{ maxWidth: "400px", margin: "auto", marginTop: "100px" }}
    >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          // placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br/>
        <label>Password</label>
        <input
          type="password"
          // placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br/>
        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account?{" "}
        <span className="link" onClick={() => navigate("/signup")}>
          Sign up
        </span>
      </p>

    </div>
  );

  // const [formData, setFormData] = useState({ username: "", password: "" });
  // const [error, setError] = useState("");
  // const navigate = useNavigate();
  // const { setUser } = useContext(AuthContext);

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");

  //   try {
  //     const res = await axios.post("http://127.0.0.1:8001/api/token/", formData);

  //     if (res.status === 200) {
  //       const { access, refresh } = res.data;

  //       // Save tokens (optional: localStorage)
  //       localStorage.setItem("access", access);
  //       localStorage.setItem("refresh", refresh);

  //       // Optional: decode and store user info
  //       setUser(formData.username);

  //       // ✅ Redirect to home
  //       navigate("/");
  //     }
  //   } catch (err) {
  //     setError("Invalid username or password");
  //   }
  // };

  // useEffect(() => {
  //   if (localStorage.getItem("access")) {
  //     navigate("/");
  //   }
  // }, [navigate]);

  // return (
  //   <div className="auth-container">
  //     <h2>Login</h2>
  //     {error && <p className="error">{error}</p>}

  //     <form onSubmit={handleSubmit}>
  //       <label>Username</label>
  //       <input
  //         type="text"
  //         name="username"
  //         value={formData.username}
  //         onChange={handleChange}
  //         required
  //       />

  //       <label>Password</label>
  //       <input
  //         type="password"
  //         name="password"
  //         value={formData.password}
  //         onChange={handleChange}
  //         required
  //       />

  //       <button type="submit">Log In</button>
  //     </form>



  //   </div>
  // );

};

export default Login;