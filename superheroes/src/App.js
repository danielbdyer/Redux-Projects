import React, { Component } from 'react';
import logo from './logo.svg';
import MovieInput from './components/MovieInput'
import MovieArray from './components/MovieArray'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MovieInput />
        <MovieArray />
      </div>
    );
  }
}

export default App;
