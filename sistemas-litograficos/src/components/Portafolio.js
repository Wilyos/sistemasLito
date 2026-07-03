import React from 'react';
import producto1 from '../assets/catalogo.webp';
import producto2 from '../assets/empaques.webp';
import producto3 from '../assets/bolsas.webp';
import producto4 from '../assets/tarjetas.webp';
import producto5 from '../assets/revista.webp';
import producto6 from '../assets/etiquetaAd.webp';

const Portafolio = () => {
  const items = [
    { img: producto1, title: 'Catálogos' },
    { img: producto2, title: 'Empaques' },
    { img: producto3, title: 'Bolsas Corporativas' },
    { img: producto4, title: 'Tarjetas de Presentación' },
    { img: producto5, title: 'Revistas' },
    { img: producto6, title: 'Etiquetas Adhesivas' },
  ];

  return (
    <section className="modern-portfolio">
      <h2 className="section-title">Nuestro <span>Portafolio</span></h2>
      <div className="portfolio-grid">
        {items.map((item, idx) => (
          <div className="portfolio-item" key={idx}>
            <img src={item.img} alt={item.title} />
            <div className="portfolio-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portafolio;