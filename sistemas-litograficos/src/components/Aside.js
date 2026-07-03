import React from 'react';
import offsetGif from '../assets/soluciones/offset.gif';
import empaquesGif from '../assets/soluciones/empaques.gif';
import volantesGif from '../assets/soluciones/volantes.gif';
import impresionDigitalGif from '../assets/soluciones/impresion-digital.gif';

const Aside = () => {
  const services = [
    { title: 'Impresión Offset', desc: 'Alta calidad para grandes volúmenes con colores precisos.', icon: offsetGif },
    { title: 'Empaques y Cajas', desc: 'Diseño y producción de empaques personalizados que resaltan tu marca.', icon: empaquesGif },
    { title: 'Material Publicitario', desc: 'Volantes, afiches, y material POP para tus campañas.', icon: volantesGif },
    { title: 'Impresión Digital', desc: 'Rapidez y flexibilidad para tirajes cortos y personalizados.', icon: impresionDigitalGif }
  ];

  return (
    <section className="modern-services">
      <h2 className="section-title">Nuestras <span>Soluciones</span></h2>
      <div className="services-grid">
        {services.map((srv, idx) => (
          <div className="service-card" key={idx}>
            <img src={srv.icon} alt={srv.title} className="service-gif" />
            <h3>{srv.title}</h3>
            <p>{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Aside;
