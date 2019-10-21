import React from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './component/Number.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Number/>
        </header>
      </div>
    );
  }

}

export default App;
