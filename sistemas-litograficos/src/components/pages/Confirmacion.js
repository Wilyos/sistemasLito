import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next'; 
import "../../App.css";

const Confirmacion =()=> {
  const { t } = useTranslation();
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'Lead');
    } else {
      console.warn('fbq no está definido aún.');
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
