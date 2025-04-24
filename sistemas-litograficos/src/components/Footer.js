import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Portafolio</h3>
        <ul>
          <li><a href="#project1">Proyecto 1</a></li>
          <li><a href="#project2">Proyecto 2</a></li>
          <li><a href="#project3">Proyecto 3</a></li>
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
        <p>Email: contacto@empresa.com</p>
        <p>Teléfono: +123 456 789</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;