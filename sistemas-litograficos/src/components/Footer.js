import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Portafolio</h3>
        <ul>
          <li><a href="#project1">#</a></li>
          <li><a href="#project2">#</a></li>
          <li><a href="#project3">#</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Términos de Privacidad</h3>
        <ul>
          <li><a href="#terms">Política de Privacidad</a></li>
          <li><a href="#cookies">Política de Cookies</a></li>
          <li><a href="#legal">Aviso Legal</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contacto y Redes Sociales</h3>
        <div className='footer-contact'>
          <img src='../assets/email.png' alt='email' className='logo-footer'/>
          <p>: contacto@sistemaslitograficos.com</p>
        </div>
        <div className='footer-contact'>
          <img src='../assets/telIcon.png' alt='telefono' className='logo-footer'/>
          <p>: +57(604) 448 37 13  Ext 100</p>
        </div>
        <div className='footer-contact'>
          <img src='../assets/whatsapp.png' alt='Whatsapp' className='logo-footer'/>
          <a href='https://api.whatsapp.com/send/?phone=573018567334&text&type=phone_number&app_absent=0'target="_blank" rel="noopener noreferrer">
            <p>: +57 301 856 7334</p>
          </a>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> 
            <img src='../assets/instagram.png' alt='Instagram-logo' className='logo-footer' />
          </a>
        </div>
      </div>   
    </footer>
    
  );
}

export default Footer;