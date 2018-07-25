import React, { Component } from 'react';
import styled from 'styled-components';
import LinkCard from './LinkCard';

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

const CardDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 20%;
    margin-right: 20%;
`;

const ButtonLink = styled.a`
    text-decoration: none;
`;

class Projects extends Component {
    render(){
        return(
            <div id = "Projects">
                <Wrapper className = "Projects" background_color="#D6EAF8">
                    <SecHead color="#212F3C">Projects</SecHead>
                    <Body>Here are some short descriptions of the projects I've worked on.</Body>
                    <Body>Because some of these projects include unpublished code for school and other organizations, please contact me for more details on my work!</Body>
                    <CardDiv>
						<ButtonLink href="https://sbeinlich.tumblr.com/post/176204814416/an-unexpected-connection" target="_blank">
							<LinkCard background_color="#D6EAF8" border_color="#212F3C" target="_blank">
	                            <Body color="#212F3C">
									Hi
	                            </Body>
	                        </LinkCard>
						</ButtonLink>
						
                    </CardDiv>
                </Wrapper>
            </div>
        );
    }
}

export default Projects;
