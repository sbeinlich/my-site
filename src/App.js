import React, { Component } from 'react';
import NavBar from './components/NavBar.jsx';
import Welcome from './components/Welcome.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import './App.css';
import Experience from './components/Experience';


class App extends Component {
  
  render() {

    return (

      <div className = "App">
          <NavBar/>
          <Welcome/>
          <About/>
          <Projects/>
          <Experience/>
          <Contact/>
          <Footer/>
      </div>
    );
  }
}

export default App;
