import React, { Component } from 'react'
import './App.css';
import DieGame from "./DieGame"

class App extends Component {
  render() {
    return (
      <div className="App">
        <DieGame />
      </div>
    );
  }
}

export default App;
