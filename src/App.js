import React, { Component } from 'react';
import NavBar from './components/NavBar.jsx';
import Welcome from './components/Welcome.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import Blog from './components/Blog.jsx';
import Projects from './components/Projects.jsx';



import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <NavBar/>
        <Welcome/>
        <About/>
        <Projects/>
        <Blog/>
        <Footer/>
      </div>
    );
  }
}

export default App;
