import React, { Component } from 'react';
import styled from 'styled-components';
import LinkCard from './LinkCard.jsx';

const Wrapper = styled.section`
    padding: 3em;
    background: ${props => props.background};
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
    margin-right: 20%;`

class Blog extends Component {
    render(){
        return(
            <div id = "Blog">
                <Wrapper className = "Blog" background = "#212F3C">
                    <SecHead color = "#D6EAF8">Blog</SecHead>
                    <Body color="#D6EAF8">These are a few of my recent/favorite blog posts. </Body>
                    <Body color="#D6EAF8">I enjoy expressing my thoughts on things like tech, business, philosophy, and music.</Body>
                    {/* Insert blog posts LOL */}
                    <CardDiv>
                            <LinkCard
                                background_color="#D6EAF8">
                                <Body color="blue">
                                        Hi
                                </Body>
                            </LinkCard>
                            <LinkCard
                                background_color="#D6EAF8">
                                <Body color="blue">
                                        Hi
                                </Body>
                            </LinkCard>
                    </CardDiv>
                </Wrapper>
            </div>
        );
    }
}

export default Blog;
