import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import banner1 from '../assets/img2/BANNER 1.png';
import banner2 from '../assets/img2/BANNER 2.png';
import banner3 from '../assets/img2/BANNER 3.png';


const BannerCarousel = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const banners = [
    {
      id: 1,
      image: banner1,
      title: t('banner_carousel.banner1_title'),
      desc: t('banner_carousel.banner1_desc')
    },
    {
      id: 2,
      image: banner2,
      title: t('banner_carousel.banner2_title'),
      desc: t('banner_carousel.banner2_desc')
    },
    {
      id: 3,
      image: banner3,
      title: t('banner_carousel.banner3_title'),
      desc: t('banner_carousel.banner3_desc')
    }
  ];

  const total = banners.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Touch and Mouse drag handling
  const handleStart = (clientX) => {
    touchStartX.current = clientX;
    touchEndX.current = clientX;
    isDragging.current = true;
    setIsPaused(true);
  };

  const handleMove = (clientX) => {
    if (!isDragging.current) return;
    touchEndX.current = clientX;
  };

  const handleEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setIsPaused(false);
  };

  // Helper to calculate 3D card style based on distance from active card
  const getCardStyle = (index) => {
    let diff = index - activeIndex;
    
    // Wrap around for circular 3D carousel effect
    if (diff < -1 && total > 2) diff += total;
    if (diff > 1 && total > 2) diff -= total;
    if (diff > 1) diff = -1;
    if (diff < -1) diff = 1;

    if (diff === 0) {
      return {
        transform: 'translateX(0%) translateZ(0px) rotateY(0deg) scale(1)',
        opacity: 1,
        zIndex: 10,
        filter: 'brightness(1)',
        pointerEvents: 'auto',
        boxShadow: '0 20px 50px rgba(10, 191, 4, 0.35), 0 0 25px rgba(10, 191, 4, 0.25)'
      };
    } else if (diff === 1) {
      return {
        transform: 'translateX(45%) translateZ(-180px) rotateY(-20deg) scale(0.82)',
        opacity: 0.65,
        zIndex: 5,
        filter: 'brightness(0.65)',
        pointerEvents: 'auto',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)'
      };
    } else if (diff === -1) {
      return {
        transform: 'translateX(-45%) translateZ(-180px) rotateY(20deg) scale(0.82)',
        opacity: 0.65,
        zIndex: 5,
        filter: 'brightness(0.65)',
        pointerEvents: 'auto',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)'
      };
    } else {
      return {
        transform: 'translateX(0%) translateZ(-350px) rotateY(0deg) scale(0.65)',
        opacity: 0.2,
        zIndex: 1,
        filter: 'brightness(0.35)',
        pointerEvents: 'none'
      };
    }
  };

  return (
    <section 
      className="react-bits-carousel-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="react-bits-carousel-header">
        <h2 className="section-title">
          {t('banner_carousel.title1')} <span>{t('banner_carousel.title2')}</span>
        </h2>
        <p className="react-bits-subtitle">
          {t('banner_carousel.subtitle')}
        </p>
      </div>

      <div 
        className="react-bits-carousel-container"
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        <div className="react-bits-carousel-stage">
          {banners.map((banner, index) => {
            const cardStyle = getCardStyle(index);
            const isActive = index === activeIndex;

            return (
              <div
                key={banner.id}
                className={`react-bits-card ${isActive ? 'active' : ''}`}
                style={cardStyle}
                onClick={() => {
                  if (!isActive) setActiveIndex(index);
                }}
              >
                <div className="react-bits-card-inner">
                  <img src={banner.image} alt="" className="react-bits-img-bg" aria-hidden="true" />
                  <img src={banner.image} alt={banner.title} className="react-bits-img" />
                  <div className="react-bits-card-overlay">
                    <h3>{banner.title}</h3>
                    <p>{banner.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation controls */}
        <button 
          className="react-bits-nav-btn prev" 
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          aria-label="Anterior"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button 
          className="react-bits-nav-btn next" 
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          aria-label="Siguiente"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="react-bits-dots">
        {banners.map((_, idx) => (
          <button
            key={idx}
            className={`react-bits-dot ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Ir al banner ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerCarousel;
