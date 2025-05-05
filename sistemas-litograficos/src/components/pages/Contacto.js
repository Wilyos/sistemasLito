import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import emailjs from 'emailjs-com';




function Contacto() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [status, setStatus] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs
          .send(
            'service_ektrht6', // ID del servicio
            'template_tnbp67s', // ID de la plantilla
            formData,
            'RE-ejFaqAtCzb1kUX' //ID Api usuario
          )
          .then(
            (result) => {
              console.log('Correo enviado:', result.text);
              setStatus('Correo enviado exitosamente, nos contactaremos muy pronto.');
              setFormData({
                name: '',
                email: '',
                message: '',
              });
              navigate('/confirmacion');
            },
            (error) => {
              console.error('Error al enviar el correo:', error.text);
              setStatus('Error al enviar el correo');
            }
          );
      };
    return (
      <>  
        <div className="contacto-banner">
            <div className="contacto-banner-text">
            </div>
        </div>
        <div className="contacto">
        <div className="contacto-info">
          <h2>Información de Contacto</h2>
          <p><strong>Teléfono:</strong> +57(604) 448 37 13  Ext 100</p>
          <p><strong>Correo Electrónico:</strong> contacto@sistemaslitograficos</p>
          <p><strong>Dirección:</strong> Calle 54 # 54 - 43 Medellín - Colombia</p>
          
          {/* Mapa de Google Maps */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.123456789!2d-75.123456!3d6.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e123456789abcdef%3A0x123456789abcdef!2sCalle%2054%20%23%2054%20-%2043%2C%20Medell%C3%ADn%2C%20Colombia!5e0!3m2!1ses!2sco!4v1681234567890!5m2!1ses!2sco"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title='localizacion'
            ></iframe>
          </div>
</div>
            <div className="contacto-container">
                <h1>Formulario de Contacto</h1>
                <p>Contáctanos para cualquier pregunta, posibles proyectos y trabajos que quieras cotizar</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" name='name' placeholder="Nombre" value={formData.name} onChange={handleChange} required />
                    <input type="email"name='email' placeholder="Correo Electrónico" value={formData.email} onChange={handleChange} required />
                    <textarea name="message" placeholder="Mensaje" value={formData.message} onChange={handleChange} required></textarea>
                    <button type="submit">Enviar</button>
                </form>
                {status && <p className='statusform'>{status}</p>}
            </div>  
        </div>
      </>
        );
}



export default Contacto;

