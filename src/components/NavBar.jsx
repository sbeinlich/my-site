import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
    padding: .25em;
    background: #212F3C;
    height: 40px;
    position: fixed;
    top: 0;
    width: 100%;
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
    color:    #D6EAF8;
    text-decoration: none;
    float:right;
    margin-top: 0px;

    &:hover {
            color: #FFDC00;
    }
`

const SJBLink = styled.a `
    display: block;
    padding: 10px;
    font-size: 1.25em;
    font-family: 'Lato', sans-serif;
    text-align: center;
    color:    #D6EAF8;
    text-decoration: none;
    float:left;
    margin-top: 0px

    &:hover {
            color: #FFDC00;
    }
`

class NavBar extends Component {
    render(){
        return(
            <div>
                <Wrapper>
                    <SJBLink href = "#Welcome" className="nav-link">Scott Beinlich</SJBLink>
                    <Ul className = "NavBar">
                            <li className = "nav-item"> <A href = "#Contact" className="nav-link">Contact</A></li>
                            <li className = "nav-item"> <A href = "#Blog" className="nav-link">Blog</A></li>
                            <li className = "nav-item"> <A href = "#Projects" className="nav-link">Projects</A></li>
                            <li className = "nav-item"> <A href = "#About" className="nav-link">About</A></li>
                    </Ul>
                </Wrapper>
                </div>
        );
    }
}

export default NavBar;
