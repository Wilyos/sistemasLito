import React, { useEffect } from "react";
import "../../App.css";

const Confirmacion = () => {
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
      <h1>Mensaje enviado con éxito!</h1>
      <p>Gracias por contactarnos. Nos comunicaremos contigo lo más pronto posible.</p>
    </div>
  );
};

export default Confirmacion;
