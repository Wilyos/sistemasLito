import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import emailjs from 'emailjs-com';

const Contacto =() => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
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
            'service_ektrht6',
            'template_tnbp67s',
            formData,
            'RE-ejFaqAtCzb1kUX'
          )
          .then(
            (result) => {
              setStatus(t('contact.success'));
              setFormData({
                name: '',
                phone: '',
                email: '',
                message: '',
              });
              navigate('/confirmacion');
            },
            (error) => {
              setStatus(t('contact.error'));
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
          <h2>{t('contact.info_title')}</h2>
          <p><strong>{t('contact.phone')}:</strong> +57 301 508 8598</p>
          <p><strong>{t('contact.email')}:</strong> contacto@sistemaslitograficos</p>
          <p><strong>{t('contact.address')}:</strong> Calle 54 # 54 - 43 Medellín - Colombia</p>
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
            <h1>{t('contact.form_title')}</h1>
            <p>{t('contact.form_desc')}</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder={t('contact.name')} value={formData.name} onChange={handleChange} required />
                <input type="text" name='phone' placeholder={t('contact.phone_placeholder')} value={formData.phone} onChange={handleChange} required />
                <input type="email" name='email' placeholder={t('contact.email_placeholder')} value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder={t('contact.message_placeholder')} value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit">{t('contact.send')}</button>
            </form>
            {status && <p className='statusform'>{status}</p>}
        </div>  
        </div>
      </>
    );
}

export default Contacto;