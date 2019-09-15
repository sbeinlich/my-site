import React, { Component } from 'react';
import styled from 'styled-components';
import backpackingImg from '../images/backpacking.JPG';
import lakeChutes from '../images/breck_lake_chutes.JPG';



const Wrapper = styled.section`
  padding: 3em;
  background: ${props => props.background_color};
`;

const AdventurePic = styled.img`
    max-width: 1000px;
    max-height: 8000px;
    max-width: 80%;
	height: auto;
    width: auto;
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
    text-align: left;
    color: ${props => props.color};
    margin-left: 150px;
    margin-right: 150px;
`;

const ParagraphContainer = styled.div`
    max-width: 960px;
    margin: auto;
`

class About extends Component {
    render(){
        return(
            <div id = "About">
                <Wrapper className = "About" background_color = "#212F3C">               
                    <SecHead color = "#D6EAF8">About Me</SecHead>
                    <ParagraphContainer>
                        <Body color="#D6EAF8">My name is Scott Beinlich I am a 3rd-year computer science engineering student at the University of Michigan. I live in Ann Arbor,  and I was born in and grew up in Dayton, Ohio. In addition to my CS courseload, I spend a lot of a time  on personal projects, team projects, and learning/practicing new CS concepts.</Body>
                        <Body color="#D6EAF8">CS and software development has given me an outlet through which I am able to combine critical thinking, problem solving and creativity with technical skills to build things I am excited about. I am hoping to work as a software development engineer and continue to contribute to the exciting tech world.</Body>
                        <Body color="#D6EAF8">As for my hobbies, I love skiing and backpacking.</Body>
                    </ParagraphContainer>
                    
                    <AdventurePic src = {lakeChutes}/>
                    <AdventurePic src = {backpackingImg}/>
                    <ParagraphContainer>
                        <Body color="#D6EAF8">I’m a ski-club officer in U of M’s ski club, and I love to be active and play sports, especially soccer. I also love surfing and listening to music.</Body>
                        <Body color="#D6EAF8">Thank you for taking the time to visit my page—it’s a pleasure to share a little bit about myself with you. Please feel free to reach out to me!</Body>
                    </ParagraphContainer>
                    
                </Wrapper>
            </div>
        );
  }
}

export default About;
