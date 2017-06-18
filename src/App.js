import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const First = require('./components/First');

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>React Pokedex</h1>
        </div>
        <First/>
      </div>
    );
  }
}




export default App;
