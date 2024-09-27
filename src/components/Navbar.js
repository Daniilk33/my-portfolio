/* 
  File Name: Navbar.js
  Student Name: Daniil Konishchev
  Student ID: 300735304
  Date: September 29, 2024
*/



import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
          {/* Left Logo */}
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>

          {/* Navigation Links */}
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutdaniil">About Daniil</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
          </ul>

          {/* Right Logo */}
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </nav>
    );
};

export default Navbar;
