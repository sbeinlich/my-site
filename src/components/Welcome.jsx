import React, { Component } from 'react';
import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> w
const Title = styled.h1`
  font-size: 3em;
  font-family: 'Lato', sans-serif;
  text-align: center;
  color: #212F3C;
`;

const Intro = styled.h3`
  font-size: 1.5em;
  font-family: 'Lato', sans-serif;
  text-align: center;
  color: #212F3C;
`;


// Create a <Wrapper> react component that renders a <section> with
// some padding and a background
const Wrapper = styled.section`
  padding: 6em;
  background: #D6EAF8;
`;

// Use them like any other React component – except they're styled!

class Welcome extends Component {
  render(){
    return(
      <div>
        <Wrapper className = "Welcome">
            <Title>Hey. I'm Scott.</Title>
            <Intro>I'm a student </Intro>
        </Wrapper>
      </div>
    );
  }
}

export default Welcome;
