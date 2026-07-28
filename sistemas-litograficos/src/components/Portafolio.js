import React from 'react';
import producto1 from '../assets/img2/revista2.webp';
import producto2 from '../assets/catalogo/empaques.png';
import producto3 from '../assets/catalogo/bolsas.png';
import producto4 from '../assets/catalogo/tarjetas.png';
import producto5 from '../assets/img2/cartilla.webp';
import producto6 from '../assets/img2/stickers.webp';
import { useTranslation } from 'react-i18next';

const Portafolio = () => {
  const { t } = useTranslation();
  const items = [
    { img: producto1, title: t('portfolio_section.catalogos') },
    { img: producto2, title: t('portfolio_section.empaques') },
    { img: producto3, title: t('portfolio_section.bolsas') },
    { img: producto4, title: t('portfolio_section.tarjetas') },
    { img: producto5, title: t('portfolio_section.revistas') },
    { img: producto6, title: t('portfolio_section.etiquetas') },
  ];

  return (
    <section className="modern-portfolio">
      <h2 className="section-title">{t('portfolio_section.title1')} <span>{t('portfolio_section.title2')}</span></h2>
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