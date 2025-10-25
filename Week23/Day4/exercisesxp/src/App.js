import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import { ErrorBoundaryWithReset } from "./ErrorBoundary";
import PostList from './PostList'
import Example1 from './Example1.js'
import Example2 from './Example2.js'
import Example3 from './Example3.js'

class HomeScreen extends React.Component {
  render(){
    return(
      <h1>Home</h1>
    )
  }
}

class ProfileScreen extends React.Component {
  render(){
    return(
    <h1>Profile Screen
    </h1>
    )
  }
}

async function yourUniqueURL () {
  const response = await fetch("https://webhook.site/3d6ae51a-d282-4173-ac5e-d5898f22ecba", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    })  
  });
  const result = await response.text(); 
  console.log(result)    
}

class ShopScreen extends React.Component {
  render(){
    throw new Error("An error has occurred.")
    // return null
    return (<h1>Shop</h1>)
  }
}

function App() {
  return (
    <>
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">MyApp</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    "nav-link " + (isActive ? "active" : "")
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    "nav-link " + (isActive ? "active" : "")
                  }
                >
                  Profile
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    "nav-link " + (isActive ? "active" : "")
                  }
                >
                  Shop
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ErrorBoundaryWithReset><HomeScreen /></ErrorBoundaryWithReset>} />
          <Route path="/profile" element={<ErrorBoundaryWithReset><ProfileScreen /></ErrorBoundaryWithReset>} />
          <Route path="/shop" element={<ErrorBoundaryWithReset><ShopScreen /></ErrorBoundaryWithReset>} />
        </Routes>
      </div>
    </Router>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

    <PostList/>   

    <Example1/>

    <Example2/>

    <Example3/>

    <button onClick={yourUniqueURL}>Press me to post some data</button>
    </>
  );
}

export default App;
