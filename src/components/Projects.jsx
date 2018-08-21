import React, { Component } from 'react';
import styled from 'styled-components';
import {
    Card,
    CardBody,
    CardImageHeader,
    CardText,
    CardTitle,
  } from 'styled-card-component';
import mySiteImg from '../images/my-site-img.png';
import computerVisionImg from '../images/computer-vision-img.png';
import euchreImg from '../images/euchre-img.png';
import bagOfWordsImg from '../images/bag-of-words-img.jpg';

import RoundedButton from './RoundedButton';

const ButtonLink = styled.a`
    text-decoration: none;
`
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
    display: table;
    width: 100%;
    border-spacing: 1em;
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
                        <CardDiv>
                            <Card width="18rem" font-family= "'Lato', sans-serif" color="#212F3C" borderColor="#212F3C" display="table-cell">
                                <CardImageHeader src={mySiteImg} />
                                <CardBody>
                                <CardTitle>
                                    My Personal Site
                                </CardTitle>
                                <CardText>
                                    The source code for my first React project, this site!  
                                </CardText>
                                <ButtonLink href="https://github.com/sbeinlich/my-site" target = "_blank">
                                    <RoundedButton
                                        type="submit"
                                        color='#212F3C'
                                    
                                        >
                                            Github Repository
                                    </RoundedButton>
                                </ButtonLink>
                                </CardBody>
                            </Card>

                            <Card width="18rem" font-family= "'Lato', sans-serif" color="#212F3C" borderColor="#212F3C" display="table-cell">
                                <CardImageHeader src={computerVisionImg} />
                                <CardBody>
                                <CardTitle>
                                    Computer Vision and Image Resizing
                                </CardTitle>
                                <CardText>
                                Used  pointers, arrays, structs, strings, basic I/O operations, and C-style “object-based” programming with a seam-carving algorithm to produce content-aware image resizing.
                                <br/>
                                <br/>
                                <ButtonLink href="#Contact">
                                    <RoundedButton
                                        type="submit"
                                        color='#212F3C'
                                    
                                        >
                                            Contact Me
                                    </RoundedButton>
                                </ButtonLink>
                                </CardText>
                                </CardBody>
                            </Card>
                        </CardDiv>

                        <CardDiv>
                            <Card width="18rem" font-family= "'Lato', sans-serif" color="#212F3C" borderColor="#212F3C" display="table-cell">
                                <CardImageHeader src={euchreImg} />
                                <CardBody>
                                <CardTitle>
                                    Euchre Card Game
                                </CardTitle>
                                <CardText>
                                    Used abstract data types, object-oriented programming, polymorphism, std::array, std::vector, and C++ style strings to create a Euchre game in which a combination of up to 4 human and AI players can compete.
                                </CardText>
                                <ButtonLink href="#Contact">
                                    <RoundedButton
                                        type="submit"
                                        color='#212F3C'
                                    
                                        >
                                            Contact Me
                                    </RoundedButton>
                                </ButtonLink>
                                </CardBody>
                            </Card>

                            <Card width="18rem" font-family= "'Lato', sans-serif" color="#212F3C" borderColor="#212F3C" display="table-cell">
                                <CardImageHeader src={bagOfWordsImg} />
                                <CardBody>
                                <CardTitle>
                                    Machine Learning and Natural Language Processing in Forum Posts
                                </CardTitle>
                                <CardText>
                                    Used natural language processing and machine learning techniques along with recursion, binary trees, templates, comparators, and the map data structure to automatically identify the subject of forum posts on a school forum.
                                <br/>
                                <br/>
                                <ButtonLink href="#Contact">
                                    <RoundedButton
                                        type="submit"
                                        color='#212F3C'
                                    
                                        >
                                            Contact Me
                                    </RoundedButton>
                                </ButtonLink>
                                </CardText>
                                </CardBody>
                            </Card>
                        </CardDiv>
                        
                        <Disclaimer><i>Some of these projects include unpublished code due to school and organizations rules. Please  <a href="#Contact">contact me</a> if you have questions on my work.</i></Disclaimer>
                    </ParagraphContainer>
                </Wrapper>
            </div>
        );
    }
}

export default Projects;
