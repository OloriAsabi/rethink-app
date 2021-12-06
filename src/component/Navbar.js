import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars,  FaTimes } from 'react-icons/fa';
//import { links } from './data';

import { FiKey } from 'react-icons/fi'
import logo from '../Logo/logo.png';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
      <div className="header">
        <div className="logo-nav">
          <div className="logo-container">
            <Link to="/">
            <img src={logo} className='logo' alt='logo' />
          </Link>
          </div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/"><h2>home</h2></Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/"><h2>services</h2></Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/"><h2><nobr>about us</nobr></h2></Link>
            </li>
            
            <li className="option mobile-option" onClick={closeMobileMenu}>
              <Link to="/" className="sign-up">
                <FiKey/> Login
              </Link>
            </li>
          </ul>
        </div>
        <ul>
          <li onClick={closeMobileMenu}>
            <Link to="/" className="signup-btn">
            <FiKey/> Login
            </Link>
          </li>
        </ul>
        <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <FaTimes className="menu-icon" />
        ) : (
          <FaBars className="menu-icon" />
        )}
        </div>
      </div>
    );
          
};

export default Navbar;
