import React, { useState } from 'react';
import '../App.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <a href="#home">
            <img className="nlogo" src={require('../assets/LOGO-SIS-1-7.png')} alt="logo" />
          </a>
        </li>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Acerca de</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;