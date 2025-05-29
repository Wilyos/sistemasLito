import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next'; 
import "../../App.css";

const Confirmacion =()=> {
  const {t} = useTranslation
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      gtag('event', 'conversion', {
        'send_to': 'AW-775722605/h7kaCN3js4ADEO2s8vEC',
        'transaction_id': ''
      });
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []); 

  return (
    <div className="confirmacion-container">
      <h1>{t('confirmation.title')}</h1>
      <p>{t('confirmation.content')}</p>
    </div>
  );
}

export default Confirmacion;