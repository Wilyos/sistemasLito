import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGO_Mesa de trabajo 1.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Sistemas Litográficos" />
        </Link>
      </div>
      <ul className="modern-nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/soluciones">Soluciones</Link></li>
        <li><Link to="/contacto" className="highlight-btn">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;