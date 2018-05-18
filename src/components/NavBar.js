import React, { Component } from 'react';

class NavBar extends Component {
  render(){
    return(
      <div>
        <ul className = "NavBar">
            <li className = "nav-item nav-name"> Scott Beinlich </li>
            <li className = "nav-item nav-last"> <a href = "#footer" className="nav-link">Contact</a></li>
            <li className = "nav-item"> <a href = "#Blog" className="nav-link">Blog</a></li>
            <li className = "nav-item"> <a href = "#Projects" className="nav-link">Projects</a></li>
            <li className = "nav-item"> <a href = "#About" className="nav-link">About</a></li>
          </ul>
        </div>
    );
  }
}

export default NavBar;
