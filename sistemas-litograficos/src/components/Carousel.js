import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  return (
    <section className="modern-hero">
      <div className="modern-hero-content">
        <h1>Sistemas Litográficos</h1>
        <p>20 años imprimiendo ideas con calidad profesional y tecnología de vanguardia.</p>
        <div className="modern-cta-group">
          <Link to="/soluciones" className="modern-btn primary">Nuestras Soluciones</Link>
          <Link to="/cotizacion" className="modern-btn secondary">Solicitar Cotización</Link>
        </div>
      </div>
    </section>
  );
};

export default Carousel;