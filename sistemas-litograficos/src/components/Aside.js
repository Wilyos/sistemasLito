import React from 'react';
import '../App.css'; // Asegúrate de tener los estilos en este archivo

const Aside = () => {
  return (
    <aside className="social-aside">
      <ul>
        <li>
          <a href="https://www.facebook.com/sistemaslitograficos2021" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sistemaslitograficossas/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@sistemaslitograficos" target="_blank" rel="noopener noreferrer">
           <i class="fa-brands fa-tiktok"></i>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
