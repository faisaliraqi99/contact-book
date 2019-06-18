import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <ul className="navbar-list">
            <li className="navbar-item"><Link to="/">Home</Link></li>
            <li className="navbar-item"><Link to="/add">Add Contact</Link></li>
          </ul>
        </div>
      </header>
    );
  }
}

export default NavBar;