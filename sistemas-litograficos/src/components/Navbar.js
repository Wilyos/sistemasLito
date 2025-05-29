import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';
import '../i18n'

const Navbar= ()=> {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t,i18n } = useTranslation();
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
            <li><a href="/">{t('navbar.home')}</a></li>
            <li><a href="/nosotros">{t('navbar.about')}</a></li>
            <li><a href="/soluciones">{t('navbar.portfolio')}</a></li>
            <li><a href="/contacto">{t('navbar.contact')}</a></li>
            <li className="highlight"><a href="/cotizacion">{t('navbar.quote')}</a></li>
        </ul>
        <div>
          <div className='icon-lng'>
            <i class="fa-solid fa-globe"></i>
          </div>


          
          <button className={`btn-lng ${i18n.language === 'es' ? ' activebtn' : ''}`} onClick={() => i18n.changeLanguage('es')}>ES</button>
          <button className={`btn-lng ${i18n.language === 'en' ? ' activebtn' : ''}`} onClick={() => i18n.changeLanguage('en')}>EN</button>
        </div>
    </nav>
  );
}

export default Navbar;