import logo from './logo.svg';
import './App.css';
import Car from './Component/Car.js'

const carinfo = {name: "Ford", model: "Mustang"};

function App() {
  return (
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

    <Car carinfo={carinfo} carid="1"/>
    <Garage size='small'/>

    </div>
  );
}

export default App;
