import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    padding: 3em;
    background: ${props => props.background_color}
`;
const SecHead = styled.h1`
    font-size: 2em;
    font-family: 'Lato', sans-serif;
    text-align: center;
    color: ${props => props.color}
`;

const Body = styled.p`
    font-size: 1.25em;
    font-family: 'Lato', sans-serif;
    text-align: center;
    color: #212F3C;
    margin-left: 150px;
    margin-right: 150px;
`;

const Disclaimer = styled.p`
    font-size: 12;
    font-family: 'Lato', sans-serif;
    text-align: center;
    color: #212F3C;
    margin-left: 150px;
    margin-right: 150px;
`;

const CardDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 20%;
    margin-right: 20%;
`;



const ParagraphContainer = styled.div`
    max-width: 960px;
    margin: auto;
`

class Projects extends Component {
    render(){
        return(
            <div id = "Projects">
                <Wrapper className = "Projects" background_color="#D6EAF8">
                    <SecHead color="#212F3C">Projects</SecHead>
                    <ParagraphContainer>
                        <Body>Here are some short descriptions of some CS-related projects I've worked on.</Body>
                     </ParagraphContainer>

                    <ParagraphContainer>
                        <Disclaimer><i>Some of these projects include unpublished code due to school and organizations rules. Please contact me if you have questions on my work.</i></Disclaimer>
                    </ParagraphContainer>
                </Wrapper>
            </div>
        );
    }
}

export default Projects;
