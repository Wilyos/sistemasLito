import React from "react";
import { useTranslation } from "react-i18next";
import "../../App.css";
import { Helmet } from "react-helmet";
const Nosotros = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | Sistemas Litográficos</title>
        <meta name="description" content="Aprende un poco mas de nosotros y nuestro objetivo." />
      </Helmet>
   
      <div className="nosotros-banner">
        <div className="nosotros-banner-text">
          <h1>{t("about.title")}</h1>
        </div>
      </div>
      <div className="nosotros-container">
        <div className="nosotros-descripcion">
          <div>
            <p>{t("about.description_1")}</p>
            <br />
            <p>{t("about.description_2")}</p>
          </div>
          <div>
            <img className="img-nosotros" alt="masde20" src={require('../../assets/20a.png')} />
          </div>
        </div>
        <div className="nosotros-valores">
          <div>
            <img className="img-nosotros" alt="valores" src={require('../../assets/valores.png')} />
          </div>
          <div>
            <h2>{t("about.values_title")}</h2>
            <ul>
              {t("about.values", { returnObjects: true }).map((valor, idx) => (
                <li key={idx}>{valor}</li>
              ))}
            </ul>
          </div>
        </div>
        <span className="nosotros-linea"></span>
        <div className="nosotros-mision-vision">
          <div>
            <h2>{t("about.mission_title")}</h2>
            <p>{t("about.mission")}</p>
          </div>
          <div>
            <h2>{t("about.vision_title")}</h2>
            <p dangerouslySetInnerHTML={{ __html: t("about.vision") }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nosotros;