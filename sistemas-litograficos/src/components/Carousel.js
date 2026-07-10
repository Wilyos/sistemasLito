import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import heroVideo from '../assets/heroVideo.mp4';

const Carousel = () => {
  const { t } = useTranslation();
  return (
    <section className="modern-hero">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="modern-hero-video"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="modern-hero-content">
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
        <div className="modern-cta-group">
          <Link to="/soluciones" className="modern-btn primary">{t('hero.btn_solutions')}</Link>
          <Link to="/cotizacion" className="modern-btn secondary">{t('hero.btn_quote')}</Link>
        </div>
      </div>
    </section>
  );
};

export default Carousel;