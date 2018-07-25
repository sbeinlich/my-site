import React, { Component } from 'react';
import styled from 'styled-components';
import LinkCard from './LinkCard.jsx';


const Wrapper = styled.section`
    padding: 3em;
    background: ${props => props.background_color};
`;
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

const CardDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 20%;
    margin-right: 20%;
`;

const ButtonLink = styled.a`
    text-decoration: none;
`;

class Blog extends Component {
    render(){
        return(
            <div id = "Blog">
                <Wrapper className = "Blog" background_color = "#D6EAF8">
                    <SecHead color = "#212F3C">Blog</SecHead>
                    <Body color="#212F3C">These are a few of my recent/favorite blog posts. </Body>
                    <Body color="#212F3C">I enjoy expressing my thoughts on things like tech, business, philosophy, and music.</Body>
                    <CardDiv>
						<ButtonLink href="https://sbeinlich.tumblr.com/post/176204814416/an-unexpected-connection" target="_blank">
							<LinkCard background_color="#D6EAF8" border_color="#D6EAF8" target="_blank">
	                            <Body color="#212F3C">
									Hi
	                            </Body>
	                        </LinkCard>
						</ButtonLink>
						<ButtonLink href="https://sbeinlich.tumblr.com/" target="_blank">
							<LinkCard background_color="#D6EAF8" border_color="#D6EAF8">
	                            <Body color="#212F3C">
									Hello
	                            </Body>
	                        </LinkCard>
						</ButtonLink> 
                    </CardDiv>
                </Wrapper>
            </div>
        );
    }
}

export default Blog;
