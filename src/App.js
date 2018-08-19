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
    margin: 80px auto 0 auto;
`;

class App extends Component {
  
  render() {

    return (

      <div className = "App">
       <Page>
          <NavBar/>
          <Welcome/>
          <About/>
          <Projects/>
          <Experience/>
          <Contact/>
          <Footer/>
        </Page>
      </div>
    );
  }
}

export default App;
