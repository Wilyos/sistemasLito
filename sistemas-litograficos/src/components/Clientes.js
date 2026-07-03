import React from 'react';
import cliente1 from '../assets/D1.png';
import cliente2 from '../assets/COMFENALCO.png';
import cliente3 from '../assets/UDEA.png';
import cliente4 from '../assets/bello.png';
import cliente5 from '../assets/logo.png';

const Clientes = () => {
  const logos = [cliente1, cliente2, cliente3, cliente4, cliente5];

  return (
    <section className="modern-clientes">
      <h2 className="section-title">Confían en <span>Nosotros</span></h2>
      <div className="clientes-track">
        {logos.map((logo, idx) => (
          <img key={idx} src={logo} alt={`Cliente ${idx + 1}`} className="cliente-logo" />
        ))}
      </div>
    </section>
  );
};

export default Clientes;
