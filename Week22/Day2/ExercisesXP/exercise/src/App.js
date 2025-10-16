import logo from './logo.svg';
import './App.css';
import UserFavouriteAnimals from './UserFavouriteAnimals.js'
import Exercise from './Exercise3.js'

function App() {

  const myelement = <h1>I Love JSX!</h1>;

  const sum = 5 + 5

  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

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

      <h1>Exercise 1</h1>
      <p>Hello World!</p>
      <p>{myelement}</p>
      <p>React is {sum} times better with JSX</p>

      <h1>Exercise 2</h1>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <p>Favourite Animals:</p>
      <UserFavouriteAnimals user={user}></UserFavouriteAnimals>

      <h1>Exercise 3</h1>
      <Exercise />

    </div>
  );
}

export default App;
