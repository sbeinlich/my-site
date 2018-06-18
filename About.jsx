import React, { Component } from 'react';
import styled from 'styled-components';

// Create a <Wrapper> react component that renders a <section> with
// some padding and a background
const Wrapper = styled.section`
  padding: 6em;
  background: #D6EAF8;

`;

// Use them like any other React component – except they're styled!

class About extends Component {
  render(){
    return(
      <div>
        <Wrapper className = "About">

        </Wrapper>
      </div>
    );
  }
}

export default About;
