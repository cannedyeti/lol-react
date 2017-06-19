import React, { Component } from 'react';
import './App.css';
const Search = require('./components/Search');
const All = require('./components/All');

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>React Pokedex</h1>
        </div>
        <All />
        <Search/>
      </div>
    );
  }
}




export default App;
