import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Welcome/>
        <NavBar />
      </div>
    );
  }
}

export default App;
