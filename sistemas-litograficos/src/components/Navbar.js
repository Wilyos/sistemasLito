import React, { useState } from 'react';
import '../App.css';

const Navbar= ()=> {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
        <div className="logo">
            <img src={require('../assets/Sis.png')} alt="Logo" className="nlogo" />
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
        ☰
        </button>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="/">Inicio</a></li>
            <li><a href="/nosotros">Quiénes Somos</a></li>
            <li><a href="/soluciones">Portafolio</a></li>
            <li><a href="/contacto">Contáctanos</a></li>
            <li><a href="/cotizacion">Cotización</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;