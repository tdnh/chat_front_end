import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';



class Header extends React.Component {



  render() {
    return (
      <div className="header">
        <nav className="header-item">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    )
  }
};


export default Header;