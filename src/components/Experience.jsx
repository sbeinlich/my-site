import React, { Component } from 'react';
import styled from 'styled-components';
import {
    Card,
    CardBody,
    CardImageHeader,
    CardText,
    CardTitle,
  } from 'styled-card-component';
import michiganIMG from '../images/block-m-feed.jpg';
import servicenowImg from '../images/now.png';


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


const OneCardDiv = styled.div`
    display: table;
    width: 50%;
    border-spacing: 1em;
    margin: auto;
`;

const TwoCardDiv = styled.div`
    display: table;
    width: 100%;
    border-spacing: 1em;
`;

const ParagraphContainer = styled.div`
    max-width: 960px;
    margin: auto;
`
class Experience extends Component {
    render(){
        return(
            <div id = "Experience">
                <Wrapper className = "Experience" background_color="#D6EAF8">
                    <SecHead color="#212F3C">Experience</SecHead>
                    <ParagraphContainer>
                        <Body>Here is a summary of my recent work experience.</Body>
                        <TwoCardDiv>
                            <Card width="18rem" font-family= "'Lato', sans-serif" color="#212F3C" borderColor="#212F3C" display="table-cell">
                                <CardImageHeader src={servicenowImg} />
                                <CardBody>
                                <CardTitle>
                                    Software Engineering Intern at ServiceNow
                                </CardTitle>
                                <CardText>
                                    <b>May 2019 - August 2019</b> <br/>Full stack web development on ServiceNow's Virtual Agent team. Developed across the full stack of Web technologies - JavaScript, React, HTML, CSS, and Java in a Scrum-based Agile development process.
                                <br/>
                                <br/>
                                <ButtonLink href="https://www.linkedin.com/in/scott-beinlich/" target="_blank">
                                    <RoundedButton
                                        type="submit"
                                        color='#212F3C'
                                    
                                        >
                                            Employer Recommendation (LinkedIn)
                                    </RoundedButton>
                                </ButtonLink>
                                <br/><br/>
                                <ButtonLink href="https://www.servicenow.com/products/virtual-agent.html" target="_blank">
                                    <RoundedButton
                                        type="submit"
                                        color='#212F3C'
                                    
                                        >
                                            Virtual Agent
                                    </RoundedButton>
                                </ButtonLink>
                                </CardText>
                                </CardBody>
                            </Card>

                            <Card width="18rem" font-family= "'Lato', sans-serif" color="#212F3C" borderColor="#212F3C" display="table-cell">
                                <CardImageHeader src={michiganIMG} />
                                <CardBody>
                                <CardTitle>
                                    EECS485: Web Systems Instructional Aide
                                </CardTitle>
                                <CardText>
                                    <b>September 2019 - Present</b><br/>Prepare and instruct labs with 40 students and hold office hours weekly to teach web concepts. Additionally, I work to develop our project specifications, the project autograder (Python), and I also write test questions.
                                </CardText>
                                <ButtonLink href="https://eecs485staff.github.io/eecs485.org/" target="_blank">
                                    <RoundedButton
                                        type="submit"
                                        color='#212F3C'
                                    
                                        >
                                            Course Website
                                    </RoundedButton>
                                </ButtonLink>
                                </CardBody>
                            </Card>

                        </TwoCardDiv>

                    </ParagraphContainer>
                </Wrapper>
            </div>
        );
    }
}

export default Experience;
