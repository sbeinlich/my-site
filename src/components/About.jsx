import React, { Component } from 'react';
import styled from 'styled-components';
import vailSitting from '../images/VailSitting.JPG';


const Wrapper = styled.section`
  padding: 3em;
  background: ${props => props.background_color};
`;

const AdventurePic = styled.img`
    max-width: 1000px;
    max-height: 8000px;
    max-width: 100%;
	height: auto;
	width: auto\9;
`
const SecHead = styled.h1`
    font-size: 2em;
    font-family: 'Lato', sans-serif;
    text-align: center;
    color: ${props => props.color};
`;

const Body = styled.p`
    font-size: 1.25em;
    font-family: 'Lato', sans-serif;
    text-align: center;
    color: ${props => props.color};
    margin-left: 150px;
    margin-right: 150px;
`;

class About extends Component {
    render(){
        return(
            <div id = "About">
                <Wrapper className = "About" background_color = "#212F3C">
                    <SecHead color = "#D6EAF8">About Me</SecHead>
                    <AdventurePic src = {vailSitting}/>
                    <Body color = "#D6EAF8">Insert about section here</Body>
                </Wrapper>
            </div>
        );
  }
}

export default About;
