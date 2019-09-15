import React, { Component } from 'react';
import NavBar from './components/NavBar.jsx';
import Welcome from './components/Welcome.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import './App.css';
import Experience from './components/Experience';
import styled from 'styled-components';

const Page = styled.div`
    width:100%
    min-width:700px;
`;

class App extends Component {
  
  render() {

    return (

      <div className = "App">
        <Page>
          <NavBar/>
          <Welcome/>
          <About/>
          <Experience/>
          <Projects/>
          <Contact/>
          <Footer/>
        </Page>
         
      </div>
    );
  }
}

export default App;
