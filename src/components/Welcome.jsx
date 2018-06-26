import React, { Component } from 'react';
import styled from 'styled-components';
import currentPic from '../images/currentPic.png';
import linkedLogo from '../images/In-Black-34px-R.png';
import gitLogo from '../images/GitHub-Mark-32px.png';
import RoundedButton from './RoundedButton.jsx';



<script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>

// Create a <Title> react component that renders an <h1> w
const Title = styled.h1`
  font-size: 3em;
  font-family: 'Lato', sans-serif;
  text-align: center;
  color: #212F3C;
`;

const Intro = styled.p`
  font-size: 1.25em;
  font-family: 'Lato', sans-serif;
  text-align: center;
  color: #212F3C;
  margin-left: 150px;
  margin-right: 150px;
`;

const Wrapper = styled.section`
  padding: 3em;
  background: #D6EAF8;
`;

const Portrait = styled.img`
  max-width: 300px;
  min-width: 300px;
  border-radius: 50%;
`
const LogoLink = styled.a`
  padding: 10px;
`

class Welcome extends Component {
  render(){
    return(
      <div id = "Welcome">
        <Wrapper className = "Welcome">
            <Title><b>Hey. I'm Scott.</b></Title>
            <Intro>I'm an aspiring <b>software development engineer</b>, future <b>business leader</b>, <b>lifelong learner</b>, and <b>adventurer</b> studying computer science engineering at the University of Michigan in the beautiful city of Ann Arbor.</Intro>
            <Portrait src = {currentPic}/>

            <br></br><br></br>

            <LogoLink href="https://www.linkedin.com/in/scott-beinlich/"><img src={linkedLogo} alt="My LinkedIn"/></LogoLink>
            <LogoLink href="https://github.com/sbeinlich"><img src={gitLogo} alt="My LinkedIn"/></LogoLink>

            <br></br><br></br>

            <RoundedButton
              type="submit"
              color='#212F3C'
              >
                Resume
            </RoundedButton>
        </Wrapper>
      </div>
    );
  }
}

export default Welcome;
