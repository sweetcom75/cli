import React, { Component } from 'react';
import './App.scss';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='/assets/logo.png' className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sweet React Application</h1>
        </header>
        <p className="App-intro">
          HOT MODULE REPLACEMENT IS ON, so :
          <br/>
          do not reload the browser
           <br />
          Just edit <code>src/App.js</code>
          <br />
          and save to reload.        </p>
      </div>
    );
  }
}

export default App;
