import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import "../../App.css";
import { Helmet } from "react-helmet";

const Cotizacion = () => {
  const { t } = useTranslation();
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
        "service_ektrht6",
        "template_9bk3f0p",
        formData,
        "RE-ejFaqAtCzb1kUX"
      )
      .then(
        (result) => {
          setStatus(t("quote.success"));
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
          setStatus(t("quote.error"));
        }
      );
  };

  // Lista de productos traducidos
  const productos = [
    "varios", "tarjetas", "volante", "brochure", "caja", "etiqueta Adhesiva", "afiche", "agenda",
    "calendario", "block de notas", "boletas", "bolsa", "carpeta", "cartilla", "dangler", "display",
    "etiqueta", "exhibidor", "floorgraphic", "libro", "membrete", "carta", "microperforado", "pendon",
    "periodico", "revista", "rompetrafico", "sello", "señalizacion", "sobre", "souvenir", "talonario",
    "tope", "valla", "vinilo"
  ];

  return (
    <div className="cotizacion-container">
       <Helmet>
        <title>Cotización | Sistemas Litográficos</title>
        <meta name="description" content="Comunícate con nosotros para cotizaciones, diseño e impresión profesional." />
      </Helmet>
      <h1 className="cotizacion-title">{t("quote.title")}</h1>
      <p className="cotizacion-subtitle">{t("quote.subtitle")}</p>
      <form className="cotizacion-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">{t("quote.name")} *</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder={t("quote.placeholder_name")}
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t("quote.email")} *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t("quote.placeholder_email")}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">{t("quote.phone")} *</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder={t("quote.placeholder_phone")}
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="producto">{t("quote.product")} *</label>
          <select
            id="producto"
            name="producto"
            value={formData.producto}
            onChange={handleChange}
            required
          >
            <option value="">{t("quote.select_option")}</option>
            {productos.map((prod) => (
              <option key={prod} value={prod}>
                {t(`quote.products.${prod}`)}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="cantidad">{t("quote.quantity")} *</label>
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            placeholder={t("quote.placeholder_quantity")}
            value={formData.cantidad}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">{t("quote.message")} *</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder={t("quote.placeholder_message")}
            rows="5"
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="cotizacion-button">{t("quote.send")}</button>
      </form>
      {status && <p className="statusform">{status}</p>}
    </div>
  );
}

export default Cotizacion;