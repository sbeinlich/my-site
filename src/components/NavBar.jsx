import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
    padding: .25em;
    background: ${props => props.background_color};
    height: 40px;
    position: fixed;
    top: 0;
    width: 100%;
    width: 100vw;
    z-index: 99999;
    
`;

const Ul = styled.ul`
    list-style-type: none;
    padding: 0px;
    margin-top: 0px;
`
const A = styled.a `
    display: block;
    padding: 10px;
    font-size: 1.25em;
    font-family: 'Lato', sans-serif;
    text-align: center;
    color: ${props => props.color}
    text-decoration: none;
    float:right;
    margin-top: 0px;

    &:hover {
        color: ${props => props.hovercolor};
    }
`

const SJBLink = styled.a `
    display: block;
    padding: 10px;
    font-size: 1.25em;
    font-family: 'Lato', sans-serif;
    text-align: center;
    color: ${props => props.color};
    text-decoration: none;
    float:left;
    margin-top: 0px
    &:hover {
        color: ${props => props.hovercolor};
    }
`

class NavBar extends Component {
    render(){
        return(
            <div>
                <Wrapper background_color = "#212F3C">
                    <SJBLink href="#Welcome" className="nav-link" color="#D6EAF8" hovercolor = "#FFDC00">Scott Beinlich</SJBLink>
                    <Ul className = "NavBar">
                            <li className = "nav-item"> <A href = "#Contact" className="nav-link" color ="#D6EAF8" hovercolor = "#FFDC00">Contact</A></li>
                            <li className = "nav-item"> <A href = "#Experience" className="nav-link" color ="#D6EAF8" hovercolor = "#FFDC00">Experience</A></li>
                            <li className = "nav-item"> <A href = "#Projects" className="nav-link" color ="#D6EAF8" hovercolor = "#FFDC00">Projects</A></li>
                            <li className = "nav-item"> <A href = "#About" className="nav-link"  color ="#D6EAF8" hovercolor = "#FFDC00">About</A></li>
                    </Ul>
                </Wrapper>
            </div>
        );
    }
}

export default NavBar;
