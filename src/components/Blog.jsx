import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 3em;
  background: #212F3C;
`;
const SecHead = styled.h1`
  font-size: 2em;
  font-family: 'Lato', sans-serif;
  text-align: center;
  color: #D6EAF8;
`;

const Body = styled.p`
  font-size: 1.25em;
  font-family: 'Lato', sans-serif;
  text-align: center;
  color: #D6EAF8;
  margin-left: 150px;
  margin-right: 150px;
`;

class Blog extends Component {
  render(){
    return(
      <div id = "Blog">
        <Wrapper className = "Blog">
          <SecHead>Blog</SecHead>
          <Body>These are a few of my recent/favorite blog posts. </Body>
          <Body>I enjoy expressing my thoughts on tech, business, and philosophy from my unique point-of-view.</Body>
          {/* Insert blog posts LOL */}
        </Wrapper>
      </div>
    );
  }
}

export default Blog;
