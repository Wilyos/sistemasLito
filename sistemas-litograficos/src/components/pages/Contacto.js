import React, { useState } from 'react';
import '../../App.css';
import emailjs from 'emailjs-com';




function Contacto() {
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
            'service_o4i1gjv', // ID del servicio
            'template_zqekdly', // ID de la plantilla
            formData,
            'O8MlXFSPgUnJA7cbA'
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
            },
            (error) => {
              console.error('Error al enviar el correo:', error.text);
              setStatus('Error al enviar el correo');
            }
          );
      };
    return (
        <div className="contacto">
            <div className="contacto-container">
                <h1>Contacto</h1>
                <p>Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" name='name' placeholder="Nombre" value={formData.name} onChange={handleChange} required />
                    <input type="email"name='email' placeholder="Correo Electrónico" value={formData.email} onChange={handleChange} required />
                    <textarea name="message" placeholder="Mensaje" value={formData.message} onChange={handleChange} required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            {status && <p className='statusform'>{status}</p>}
        </div>
        );
}



export default Contacto;

