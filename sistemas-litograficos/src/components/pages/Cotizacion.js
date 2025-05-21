import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import emailjs from "emailjs-com";
import "../../App.css";
import { Helmet } from "react-helmet";

const Cotizacion = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    producto: "",
    cantidad: "",
    mensaje: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ektrht6", // ID del servicio
        "template_9bk3f0p", // ID de la plantilla
        formData,
        "RE-ejFaqAtCzb1kUX" // ID de usuario de EmailJS
      )
      .then(
        (result) => {
          console.log("Correo enviado:", result.text);
          setStatus("Cotización enviada exitosamente.");
          setFormData({
            nombre: "",
            email: "",
            telefono: "",
            producto: "",
            cantidad: "",
            mensaje: "",
          });
          navigate('/confirmacion');
        },
        (error) => {
          console.error("Error al enviar la cotización:", error.text);
          setStatus("Error al enviar la cotización.");
        }
      );
  };

  return (
    <div className="cotizacion-container">
      <Helmet>
        <title>Cotización | Sistemas Litográficos</title>
        <meta name="description" content="Comunícate con nosotros para cotizaciones, diseño e impresión profesional." />
      </Helmet>
      <h1 className="cotizacion-title">Cotización</h1>
      <p className="cotizacion-subtitle">Los campos marcados con * son obligatorios</p>
      <form className="cotizacion-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre *</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ingresa tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu correo"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono *</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Ingresa tu teléfono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="producto">Selecciona un producto *</label>
          <select
            id="producto"
            name="producto"
            value={formData.producto}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="varios">VARIOS PRODUCTOS</option>
            <option value="tarjetas">Tarjetas personales</option>
            <option value="volante">Volante</option>
            <option value="brochure">Brochure / Plegable</option>
            <option value="caja">Caja / Empaque</option>
            <option value="etiqueta Adhesiva">Etiqueta Adhesiva</option>
            <option value="afiche">Afiche</option>
            <option value="agenda">Agenda</option>
            <option value="calendario">Almanaque / Calendario</option>
            <option value="block de notas">Block de notas</option>
            <option value="boletas">Boletas</option>
            <option value="bolsa">Bolsa</option>
            <option value="carpeta">Carpeta</option>
            <option value="cartilla">Cartilla / Catálogo</option>
            <option value="dangler">Dangler</option>
            <option value="display">Display</option>
            <option value="etiqueta">Etiqueta</option>
            <option value="exhibidor">Exhibidor</option>
            <option value="floorgraphic">Floorgraphic</option>
            <option value="libro">Libro</option>
            <option value="membrete">Membrete</option>
            <option value="carta">Menú Carta</option>
            <option value="microperforado">Microperforado</option>
            <option value="pendon">Pendón</option>
            <option value="periodico">Periódico</option>
            <option value="revista">Revista</option>
            <option value="rompetrafico">Rompetráfico</option>
            <option value="sello">Sello</option>
            <option value="señalizacion">Señalización</option>
            <option value="sobre">Sobre</option>
            <option value="souvenir">Souvenir</option>
            <option value="talonario">Talonario</option>
            <option value="tope">Tope de góndola</option>
            <option value="valla">Valla</option>
            <option value="vinilo">Vinilo Adhesivo / Plotter</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="cantidad">Cantidad *</label>
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            placeholder="Ingresa la cantidad"
            value={formData.cantidad}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje *</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Escribe tu mensaje aquí"
            rows="5"
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="cotizacion-button">Enviar</button>
      </form>
      {status && <p className="statusform">{status}</p>}
    </div>
  );
}

export default Cotizacion;