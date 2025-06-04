import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next'; 
import "../../App.css";

const Confirmacion =()=> {
  const {t} = useTranslation
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-775722605/h7kaCN3js4ADE02s8vEC",
      });
    } else {
      console.warn("gtag no está definido aún.");
    }
  }, []);

  return (
    <div className="confirmacion-container">
      <h1>{t('confirmation.title')}</h1>
      <p>{t('confirmation.content')}</p>
    </div>
  );
};

export default Confirmacion;
