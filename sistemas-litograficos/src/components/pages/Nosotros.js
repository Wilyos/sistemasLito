import React from "react";
import "../../App.css";

function Nosotros() {
  return (
    <>
      {/* Banner */}
      <div className="nosotros-banner">
        <div className="nosotros-banner-text">
          <h1>¿Quiénes Somos?</h1>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="nosotros-container">
        <div className="nosotros-descripcion">
          <h2>Nuestra Historia</h2>
          <p>
            Somos una empresa con más de 20 años de experiencia en el sector de
            las artes gráficas, comprometidos con ofrecer soluciones de alta
            calidad en impresión y diseño. Nuestro objetivo es satisfacer las
            necesidades de nuestros clientes con innovación, tecnología y
            excelencia.
          </p>
        </div>

        <div className="nosotros-valores">
          <h2>Nuestros Valores</h2>
          <ul>
            <li><strong>Compromiso:</strong> Trabajamos con dedicación para cumplir con las expectativas de nuestros clientes.</li>
            <li><strong>Innovación:</strong> Incorporamos tecnología de punta en todos nuestros procesos.</li>
            <li><strong>Calidad:</strong> Garantizamos productos y servicios de la más alta calidad.</li>
            <li><strong>Sostenibilidad:</strong> Nos preocupamos por el medio ambiente y promovemos prácticas responsables.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nosotros;