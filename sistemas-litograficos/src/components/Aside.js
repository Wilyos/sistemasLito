import React from 'react';
import offsetGif from '../assets/soluciones/offset.gif';
import empaquesGif from '../assets/soluciones/empaques.gif';
import volantesGif from '../assets/soluciones/volantes.gif';
import impresionDigitalGif from '../assets/soluciones/impresion-digital.gif';
import { useTranslation } from 'react-i18next';

const Aside = () => {
  const { t } = useTranslation();
  const services = [
    { title: t('services_aside.offset_title'), desc: t('services_aside.offset_desc'), icon: offsetGif },
    { title: t('services_aside.packaging_title'), desc: t('services_aside.packaging_desc'), icon: empaquesGif },
    { title: t('services_aside.promo_title'), desc: t('services_aside.promo_desc'), icon: volantesGif },
    { title: t('services_aside.digital_title'), desc: t('services_aside.digital_desc'), icon: impresionDigitalGif }
  ];

  return (
    <section className="modern-services">
      <h2 className="section-title">{t('services_aside.title1')} <span>{t('services_aside.title2')}</span></h2>
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
