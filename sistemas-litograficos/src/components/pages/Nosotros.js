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
            <div>
                <p>
                    Somos una empresa con más de 20 años de experiencia en el sector de las artes gráficas, comprometidos con ofrecer soluciones de alta calidad en impresión y diseño. Nuestro objetivo es satisfacer las necesidades de nuestros clientes con innovación, tecnología y excelencia.
                </p>
                <br/>
                <p>
                    En Sistemas Litográficos, nos especializamos en la producción de
                    etiquetas, empaques y materiales promocionales. Contamos con un
                    equipo de profesionales altamente capacitados y tecnología de
                    vanguardia para garantizar resultados excepcionales en cada
                    proyecto.
                </p>
            </div>
            <div>
                <img className="img-nosotros" alt="masde20" src={require('../../assets/masde20a.png')} />
            </div>
        </div>
        <div className="nosotros-valores">
          <div>
            <img className="img-nosotros" alt="valores" src={require('../../assets/valores.png')} />
          </div>
          <div>
            <h2>Nuestros Valores</h2>
            <ul>
              <li>Trabajamos con dedicación para cumplir con las expectativas de nuestros clientes.</li>
              <li>Incorporamos tecnología de punta en todos nuestros procesos.</li>
              <li>Garantizamos productos y servicios de la más alta calidad.</li>
              <li>Nos preocupamos por el medio ambiente y promovemos prácticas responsables.</li>
            </ul>
          </div> 
        </div>
        <span className="nosotros-linea"></span>
        <div className="nosotros-mision-vision">
          <div>
            <h2>Misión</h2>
            <p>
              Somos un empresa dedicada al diseño y producción de impresos, orientada a satisfacer todas las necesidades de nuestros clientes, en todo lo referente a la papelería comercial, a través de un servicio oportuno cuyo desempeño involucra diversos estándares de calidad y cumplimiento.
            </p>
          </div>
          <div>
            <h2>Visión</h2>
            <p>
              <strong>SISTEMAS LITOGRÁFICOS </strong> se está consolidando como una de las mejores empresas del sector gráfico a nivel nacional, ya que contamos con los recursos técnicos y humanos, necesarios para suplir las necesidades del área en diversos municipios de nuestro país.
            </p>
          </div>
        </div>
      </div>

    </>
  );
}

export default Nosotros;