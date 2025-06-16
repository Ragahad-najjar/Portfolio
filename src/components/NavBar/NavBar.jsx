import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/theme';
import './NavBarStyle.css';
import MoonIcon from '../../assets/img/Moon/moon.svg';
import SunIcon from '../../assets/img/Sun.svg';
import  lightMenuIcon from '../../assets/img/Menu/Menu_Alt_1.svg'
import lightCloseIcon from '../../assets/img/Menu/Close_MD_1.svg'
import darkCloseIcon from '../../assets/img/Menu/Close_MD.svg'
import darkMenuIcon from '../../assets/img/Menu/Vector.svg'

const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className='Logo-nav'>
        <h1>Raghad</h1>
      </div>
      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className='List-menu'>
          <ul>
            <li><a href='/' className='active'>Home</a></li>
            <li><a href='#About me'>About me</a></li>
            <li><a href='#Education'>Education</a></li>
            <li><a href='#Projects'>Projects</a></li>
            <li><a href='#Contact'>Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-actions">
        <img 
          src={theme === 'light' ? MoonIcon : SunIcon} 
          className="theme-toggle" 
          onClick={toggleTheme} 
          alt="theme toggle" 
        />
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <img 
            src={isMobileMenuOpen 
            ? (theme === 'light' ? lightCloseIcon : darkCloseIcon) 
            : (theme === 'light' ? lightMenuIcon : darkMenuIcon)} />
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className={`sidebar ${theme}`}>
          <div className='sidebar-content'>
            <ul>
              <li><a href='#' className='active'>Home</a></li>
              <li><a href='#About me'>About me</a></li>
              <li><a href='#Education'>Education</a></li>
              <li><a href='#Projects'>Projects</a></li>
              <li><a href='#Contact'>Contact</a></li>
            </ul>
            <img 
              src={theme === 'light' ? MoonIcon : SunIcon} 
              className="theme-toggle" 
              onClick={toggleTheme} 
              alt="theme toggle" 
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;