import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const Footer =()=> {
  const { t } = useTranslation();

  return (
    <footer className="footers">
      <div className="container-sfoooter">
        <div className="wrapper-footer">
          <div className="footer-widget">
            <a href="/">
              <img src={require('../assets/logoSis.png')} alt="logo-footer" className="logo-footers"/>
            </a>
            <p className="desc">
              {t('footer.desc')}
            </p>
            <ul className="socials-footers">
              <li>
                <a href="https://www.facebook.com/sistemaslitograficos2021">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li> 
              <li>
                <a href="https://www.instagram.com/sistemaslitograficossas/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li> 
              <li>
                <a href="https://www.tiktok.com/@sistemaslitograficos">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send/?phone=573015088598&text&type=phone_number&app_absent=0">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-widget">
            <h6>{t('footer.quick_access')}</h6>
            <ul className="links-footers">
              <li><a href="/">{t('footer.home')}</a></li>
              <li><a href="/nosotros">{t('footer.about')}</a></li>
              <li><a href="/soluciones">{t('footer.solutions')}</a></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h6>{t('footer.services')}</h6>
            <ul className="links-footers">
              <li><a href="/soluciones">{t('footer.editorial')}</a></li>
              <li><a href="/soluciones">{t('footer.packaging')}</a></li>
              <li><a href="/soluciones">{t('footer.advertising')}</a></li>
              <li><a href="/soluciones">{t('footer.corporate')}</a></li>
              <li><a href="/soluciones">{t('footer.outdoor')}</a></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h6>{t('footer.support')}</h6>
            <ul className="links-footers">
              <li><a href="/contacto">{t('footer.contact')}</a></li>
              <li><a href="/cotizacion">{t('footer.quote')}</a></li>
              <li><a href="/privacy">{t('footer.privacy')}</a></li>
            </ul>
          </div>
          <div className="copyright-warpper">
            <p>
              {t('footer.developed')}
              <a href="https://github.com/Wilyos" target="blank"> Wilyos</a>
            </p>
            <p>{t('footer.rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;