import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import '../../ModernLanding.css'; // Changed from App.css to ModernLanding.css
import emailjs from 'emailjs-com';
import { Helmet } from "react-helmet";

const Contacto = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const revealRefs = useRef([]);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  // Reveal Animation Effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

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
          if (window.fbq) {
            window.fbq('track', 'Lead');
          }
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
      <Helmet>
        <title>Contáctanos | Sistemas Litográficos</title>
        <meta name="description" content="Comunícate con nosotros para cotizaciones, diseño e impresión profesional." />
      </Helmet>

      <div className="modern-contact-page">
        {/* Modern Hero Section */}
        <div className="contact-hero reveal-element" ref={addToRefs}>
          <h1>{t('contact.form_title')}</h1>
          <p>{t('contact.form_desc')}</p>
        </div>

        <div className="modern-contact-container">
          
          {/* Info & Map Card */}
          <div className="contact-info-card reveal-element" ref={addToRefs}>
            <h2>{t('contact.info_title')}</h2>
            
            <div className="contact-details">
              
              <p>
                <strong>{t('contact.whatsapp')}:</strong> 
                <a 
                  href="https://wa.me/message/JHWMGEF6WKHDI1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'var(--ml-brand)', textDecoration: 'none' }}
                  onClick={() => window.fbq && window.fbq('track', 'Contact')}
                >
                  +57 301 5088598
                </a>
              </p>
              <p><strong>{t('contact.email')}:</strong> sistemaslitograficosmed@gmail.com</p>
              <p><strong>{t('contact.address')}:</strong> Calle 54 # 53 - 115 Medellín - Colombia</p>
              <p><strong>{t('contact.address')}:</strong> Calle 54 # 54 - 43 Medellín - Colombia</p>
            </div>

            <div className="modern-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.123456789!2d-75.123456!3d6.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e123456789abcdef%3A0x123456789abcdef!2sCalle%2054%20%23%2054%20-%2043%2C%20Medell%C3%ADn%2C%20Colombia!5e0!3m2!1ses!2sco!4v1681234567890!5m2!1ses!2sco"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="localizacion"
              ></iframe>
            </div>
          </div>

          {/* Form Card */}
          <div className="contact-form-card reveal-element" ref={addToRefs}>
            <h2>¡Escríbenos!</h2>
            <form className="modern-contact-form" onSubmit={handleSubmit}>
              <div className="modern-input-group">
                <input 
                  type="text" 
                  name="name" 
                  className="modern-input" 
                  placeholder={t('contact.name')} 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="modern-input-group">
                <input 
                  type="text" 
                  name="phone" 
                  className="modern-input" 
                  placeholder={t('contact.phone_placeholder')} 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="modern-input-group">
                <input 
                  type="email" 
                  name="email" 
                  className="modern-input" 
                  placeholder={t('contact.email_placeholder')} 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="modern-input-group">
                <textarea 
                  name="message" 
                  className="modern-input modern-textarea" 
                  placeholder={t('contact.message_placeholder')} 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                ></textarea>
              </div>
              <button type="submit" className="modern-btn primary">
                {t('contact.send')}
              </button>
            </form>
            {status && <p className="statusform">{status}</p>}
          </div>

        </div>
      </div>
    </>
  );
};

export default Contacto;