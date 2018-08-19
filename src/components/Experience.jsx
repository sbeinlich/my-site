import React, { Component } from 'react';
import styled from 'styled-components';
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardImageHeader,
    CardText,
    CardTitle,
  } from 'styled-card-component';
import mhacksImg from '../images/mhacks-logo-img.png';
import heidelbergImg from '../images/heidelberg-img.jpg';
import rovImg from '../images/ROV-img.jpg';

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
                        <Body>Here is a summary of my recent work, team, and organizational experience.</Body>
                        <TwoCardDiv>
                            <Card width="18rem" font-family= "'Lato', sans-serif" color="#212F3C" borderColor="#212F3C" display="table-cell">
                                <CardImageHeader src={mhacksImg} />
                                <CardBody>
                                <CardTitle>
                                    MHacks Tech Core Team Member
                                </CardTitle>
                                <CardText>
                                    <b>December 2018 - Present</b> <br/>Collaborate with app development committee for U of M's annual hackathon, programming and developing the web app for hackathon with MERN Stack (MongoDB, Express, React/Redux, Node.js), building web-dev proficiency outside of curriculum.
                                </CardText>
                                <ButtonLink href="https://mhacks.org/" target="_blank">
                                    <RoundedButton
                                        type="submit"
                                        color='#212F3C'
                                    
                                        >
                                            MHacks Site
                                    </RoundedButton>
                                </ButtonLink>
                                <br/><br/>
                                <ButtonLink href="https://github.com/mhacks" target="_blank">
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
                                <CardImageHeader src={heidelbergImg} />
                                <CardBody>
                                <CardTitle>
                                    IT Intern at Heidelberg Distributing Company
                                </CardTitle>
                                <CardText>
                                    <b>May 2018 - August 2018</b> <br/>Worked at intersection of business and technology at Ohio’s largest distributing company, providing tech support to a team of 1,600 individuals. Resolved daily tickets and honed technnical communication skills while completing a variety of projects with clients internal and external to the company. 
                                <br/>
                                <br/>
                                <ButtonLink href="https://drive.google.com/open?id=1mLI_3wImoLoraHuwQXt4bDPQvyMJzzUX" target="_blank">
                                    <RoundedButton
                                        type="submit"
                                        color='#212F3C'
                                    
                                        >
                                            Employer Recommendation Letter
                                    </RoundedButton>
                                </ButtonLink>
                                </CardText>
                                </CardBody>
                            </Card>
                        </TwoCardDiv>

                        <OneCardDiv>
                            <Card width="18rem" font-family= "'Lato', sans-serif" color="#212F3C" borderColor="#212F3C" display="table-cell">
                                <CardImageHeader src={rovImg} />
                                <CardBody>
                                <CardTitle>
                                    BP Naval Architecture & Engineering Underwater ROV Design Competition
                                </CardTitle>
                                <CardText>
                                    <b>January 2018 - March 2018</b><br/>Collaborated with other engineers, designing, building, and testing hardware and software to create a fast and maneuverable remotely operated vehicle. Competed against other teams and presented a report detailing our prototype to BP representatives, demonstrating plans for full-scale development and improvements.
                                </CardText>
                                <ButtonLink href="https://drive.google.com/drive/folders/1OeqBwEpRU5ybXaId1GRbI547cWPfdj_c?usp=sharing" target="_blank">
                                    <RoundedButton
                                        type="submit"
                                        color='#212F3C'
                                    
                                        >
                                            Final Presentation and Report
                                    </RoundedButton>
                                </ButtonLink>
                                </CardBody>
                            </Card>
                        </OneCardDiv>
                    </ParagraphContainer>
                </Wrapper>
            </div>
        );
    }
}

export default Experience;
