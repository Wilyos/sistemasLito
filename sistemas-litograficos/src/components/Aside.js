import React from 'react';

const Aside = () => {
  const services = [
    { title: 'Impresión Offset', desc: 'Alta calidad para grandes volúmenes con colores precisos.', icon: 'fas fa-print' },
    { title: 'Empaques y Cajas', desc: 'Diseño y producción de empaques personalizados que resaltan tu marca.', icon: 'fas fa-box-open' },
    { title: 'Material Publicitario', desc: 'Volantes, afiches, y material POP para tus campañas.', icon: 'fas fa-bullhorn' },
    { title: 'Impresión Digital', desc: 'Rapidez y flexibilidad para tirajes cortos y personalizados.', icon: 'fas fa-laptop-code' }
  ];

  return (
    <section className="modern-services">
      <h2 className="section-title">Nuestras <span>Soluciones</span></h2>
      <div className="services-grid">
        {services.map((srv, idx) => (
          <div className="service-card" key={idx}>
            <i className={srv.icon}></i>
            <h3>{srv.title}</h3>
            <p>{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Aside;
