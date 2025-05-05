import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../../App.css";

function Cotizacion() {
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
        },
        (error) => {
          console.error("Error al enviar la cotización:", error.text);
          setStatus("Error al enviar la cotización.");
        }
      );
  };

  return (
    <div className="cotizacion-container">
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
            <option value="etiquetas">Etiquetas</option>
            <option value="empaques">Empaques</option>
            <option value="materiales">Materiales promocionales</option>
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