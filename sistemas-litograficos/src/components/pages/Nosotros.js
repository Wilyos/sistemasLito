import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../../ModernLanding.css";
import SEO from "../SEO";

const Nosotros = () => {
  const { t } = useTranslation();
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <>
      <SEO title={t("about.title")} description="Aprende un poco mas de nosotros y nuestro objetivo." />
      
      {/* Background Animated Blobs */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Giant Watermark */}
      <div className="nosotros-watermark">20 AÑOS</div>
   
      <div className="modern-nosotros-hero reveal-element" ref={addToRefs}>
        <div className="modern-hero-content nosotros-hero-content">
          <h1>{t("about.title")}</h1>
          <p>{t("about.description_1")}</p>
        </div>
        <img className="nosotros-hero-badge" alt="Más de 20 años" src={require('../../assets/img2/25AÑOSDEXP.png')} />
      </div>

      <div className="modern-nosotros-container">
        
        {/* Description & 3D Image */}
        <div className="nosotros-split-section reveal-element" ref={addToRefs}>
          <div className="modern-glass-card flex-1 desc-card">
            <p>{t("about.description_2")}</p>
          </div>
          <div className="flex-1 image-3d-container">
            <img className="image-3d" alt="Valores" src={require('../../assets/img2/BANNER CUADRADO C-C-C-E.png')} />
          </div>
        </div>

        {/* Values section */}
        <div className="modern-nosotros-valores reveal-element" ref={addToRefs}>
          <h2>{t("about.values_title")}</h2>
          <div className="valores-grid">
             {t("about.values", { returnObjects: true }).map((valor, idx) => (
                <div className="modern-glass-card valor-card" key={idx} style={{ '--delay': `${idx * 0.1}s` }}>
                  <div className="valor-icon-wrapper">
                    <div className="valor-number">0{idx + 1}</div>
                    <div className="valor-icon">
                      <img src={require(`../../assets/img2/icono ${idx + 1}.png`)} alt="Icono de valor" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                    </div>
                  </div>
                  <p>{valor}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="modern-nosotros-mision-vision reveal-element" ref={addToRefs}>
          <div className="modern-glass-card flex-1 mision-vision-card">
            <div className="mv-icon">🎯</div>
            <h2>{t("about.mission_title")}</h2>
            <p>{t("about.mission")}</p>
          </div>
          <div className="modern-glass-card flex-1 mision-vision-card">
            <div className="mv-icon">🚀</div>
            <h2>{t("about.vision_title")}</h2>
            <p dangerouslySetInnerHTML={{ __html: t("about.vision") }} />
          </div>
        </div>

      </div>
    </>
  );
};

export default Nosotros;