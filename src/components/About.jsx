import React, { Component } from 'react';
import styled from 'styled-components';
import vailSitting from '../images/VailSitting.JPG';


const Wrapper = styled.section`
  padding: 3em;
  background: #212F3C;
`;

const AdventurePic = styled.img`
  max-width: 1000px;
  max-height: 8000px;
`
const SecHead = styled.h1`
  color: #D6EAF8
`

class About extends Component {
  render(){
    return(
      <div>
        <Wrapper className = "About">
          <SecHead>A little bit about me...</SecHead>
          <AdventurePic src = {vailSitting}/>
        </Wrapper>
      </div>
    );
  }
}

export default About;
