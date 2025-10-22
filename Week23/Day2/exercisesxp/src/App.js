import logo from './logo.svg';
import './App.css';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import {Color,Parent} from './Color.js'

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  handleClick = () => {
      this.setState(prev => {
        const newCount = prev.counter + 1; 
        if (newCount == 5) {
          throw new Error("I crashed!")
        }
        console.log(newCount)
        return {counter: newCount};
      })
  }

  render() {
    return(
      <button onClick={this.handleClick}>
        Count: {this.state.counter}
      </button>
    )
  }
}

function App() {
  return (
    <>
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

      <h1>Simulation 1</h1>
      <ErrorBoundary>
      <BuggyCounter/>
      <BuggyCounter/>
      </ErrorBoundary>

      <h1>Simulation 2</h1>
      <ErrorBoundary>
      <BuggyCounter/>
      </ErrorBoundary>
      <ErrorBoundary>
      <BuggyCounter/>
      </ErrorBoundary>

      <h1>Simulation 3</h1>
      <BuggyCounter/>

      <Color/>
      <Parent/>
    </> 
  );
}

export default App;
