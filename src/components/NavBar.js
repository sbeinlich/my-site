import React, { Component } from 'react';
import styled from 'styled-components';

<script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

`
const A = styled.a `
  display: block;
  padding: 10px;
  background-color: inherit;
  font-size: 1.25em;
  font-family: 'Lato', sans-serif;
  text-align: center;
  color: #212F3C;
  float:right;
  text-decoration: none;
`

const Li = styled.li`
  &:hover{
    color:  black;
  }
`

class NavBar extends Component {
  render(){
    return(
      <div>
          <Ul className = "NavBar">
              <Li className = "nav-item"> <A href = "#Contact" className="nav-link">Contact</A></Li>
              <li className = "nav-item"> <A href = "#Blog" className="nav-link">Blog</A></li>
              <li className = "nav-item"> <A href = "#Projects" className="nav-link">Projects</A></li>
              <li className = "nav-item"> <A href = "#About" className="nav-link">About</A></li>
          </Ul>

        </div>
    );
  }
}

export default NavBar;
