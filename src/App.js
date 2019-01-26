import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
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
          <a
            className="App-link"
            href="https://facebook.github.io/create-react-app/docs/deployment#github-pages-https-pagesgithubcom"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy React with Github Pages
          </a>
          <p> Remember to change the 'homepage' value in your package.json! </p>
        </header>
      </div>
    );
  }
}

export default App;
