// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Car from "./Car"

const listCars = [
  {
    id: 1,
    brand: "ford",
    name: "torino",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 2,
    brand: "ford",
    name: "galaxie 500",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 3,
    brand: "chevrolet",
    name: "vega 2300",
    year: "1971-01-01",
    origin: "USA"
  },
  {
    id: 4,
    brand: "peugeot",
    name: "504 (sw)",
    year: "1972-01-01",
    origin: "Europe"
  },
  {
    id: 5,
    brand: "renault",
    name: "12 (sw)",
    year: "1972-01-01",
    origin: "Europe"
  }
]

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Welcome to my car rental business</h1>
        {/* Peugeot, BMW, Mercedes */}
        <select>
          {/* value is what we want to send. Inside option is only for display */}
            <option value="peugeot">Peugeot</option>
            <option value="bmw">BMW</option>
            <option value="mercedes">Mercedes</option>
        </select>
        <h2>These are the only peugeot car in our shop</h2>
        { 
          listCars.map(car => {
            return <Car brand={car.brand} model={car.name}></Car>
          }) 
        }
      </>
    )
  }
}

export default App