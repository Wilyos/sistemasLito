 /* import React, { useEffect } from "react"; */
import "../../App.css";

function Confirmacion() {
  /*useEffect(() => {
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
  }, []); */

  return (
    <div className="confirmacion-container">
      <h1>¡Mensaje enviado con éxito!</h1>
      <p>Gracias por contactarnos. Nos comunicaremos contigo lo más pronto posible.</p>
    </div>
  );
}

export default Confirmacion;