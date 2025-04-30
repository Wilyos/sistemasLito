import React from "react";
import "../../App.css";

function Cotizacion() {
  return (
    <div className="cotizacion-container">
      <h1 className="cotizacion-title">Cotización</h1>
      <p className="cotizacion-subtitle">Los campos marcados con * son obligatorios</p>
      <form className="cotizacion-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre *</label>
          <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico *</label>
          <input type="email" id="email" name="email" placeholder="Ingresa tu correo" required />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono *</label>
          <input type="tel" id="telefono" name="telefono" placeholder="Ingresa tu teléfono" required />
        </div>
        <div className="form-group">
          <label htmlFor="producto">Selecciona un producto *</label>
          <select id="producto" name="producto" required>
            <option value="">Selecciona una opción</option>
            <option value="etiquetas">Etiquetas</option>
            <option value="empaques">Empaques</option>
            <option value="materiales">Materiales promocionales</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="cantidad">Cantidad *</label>
          <input type="number" id="cantidad" name="cantidad" placeholder="Ingresa la cantidad" required />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje *</label>
          <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí" rows="5" required></textarea>
        </div>
        <button type="submit" className="cotizacion-button">Enviar</button>
      </form>
    </div>
  );
}

export default Cotizacion;