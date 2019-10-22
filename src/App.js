import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterWithReduxState from './component/Counter/CounterWithReduxState.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <CounterWithReduxState/>
        </header>
      </div>
    );
  }

}

export default App;
