import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 3em;
  background: #D6EAF8;
`;
const SecHead = styled.h1`
  font-size: 2em;
  font-family: 'Lato', sans-serif;
  text-align: center;
  color: #212F3C;
`;

const Body = styled.p`
  font-size: 1.25em;
  font-family: 'Lato', sans-serif;
  text-align: center;
  color: #212F3C;
  margin-left: 150px;
  margin-right: 150px;
`;

class Projects extends Component {
  render(){
    return(
      <div id = "Projects">
        <Wrapper className = "Projects">
          <SecHead>Projects</SecHead>
          <Body>Here are some short descriptions of the projects I've worked on.</Body>
          <Body>Because some of these projects include unpublished code for school and other organizations, please contact me for more details!</Body>
          {/* Insert blog posts LOL */}
        </Wrapper>
      </div>
    );
  }
}

export default Projects;
