import React, { Component } from 'react';
import './App.css';
import FlowerList from './components/FlowerList'
import NewFlowerPreview from './components/NewFlowerPreview'
import NewFlowerInput from './components/NewFlowerInput'

class App extends Component {
  render() {
    return (
      <div>
      <FlowerList />
      <NewFlowerPreview />
      <NewFlowerInput />
      </div>
    );
  }
}

export default App;
