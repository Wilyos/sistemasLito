import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logoA.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Sistemas Litográficos" />
        </Link>
      </div>

      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <ul className={`modern-nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>{t('navbar.home')}</Link></li>
        <li><Link to="/nosotros" onClick={closeMenu}>{t('navbar.about')}</Link></li>
        <li><Link to="/soluciones" onClick={closeMenu}>{t('portfolio.title')}</Link></li>
        <li><Link to="/contacto" className="highlight-btn" onClick={closeMenu}>{t('navbar.contact')}</Link></li>
        
        <li className="lang-switch">
          <button 
            className={i18n.language && i18n.language.startsWith('es') ? 'active-lang' : ''} 
            onClick={() => changeLanguage('es')}
          >
            ES
          </button>
          <span className="lang-divider">|</span>
          <button 
            className={i18n.language && i18n.language.startsWith('en') ? 'active-lang' : ''} 
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;