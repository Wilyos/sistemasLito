import React from 'react';
import cliente1 from '../assets/D1.png';
import cliente2 from '../assets/COMFENALCO.png';
import cliente3 from '../assets/UDEA.png';
import cliente4 from '../assets/bello.png';
import cliente5 from '../assets/PINVIACRIL.png';
import { useTranslation } from 'react-i18next';

const Clientes = () => {
  const { t } = useTranslation();
  const logos = [cliente1, cliente2, cliente3, cliente4, cliente5];

  return (
    <section className="modern-clientes">
      <h2 className="section-title">{t('clientes_section.title1')} <span>{t('clientes_section.title2')}</span></h2>
      <div className="clientes-track">
        {logos.map((logo, idx) => (
          <img key={idx} src={logo} alt={`Cliente ${idx + 1}`} className="cliente-logo" />
        ))}
      </div>
    </section>
  );
};

export default Clientes;
