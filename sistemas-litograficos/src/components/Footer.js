import React from 'react';
import '../App.css';

const Footer =()=> {
  return (
    <footer className="footers">
            <div className="container-sfoooter">
             <div className="wrapper-footer">
                <div className="footer-widget">
                    <a href="/">
                        <img src={require('../assets/logoSis.png')} alt="logo-footer" className="logo-footers"/>
                    </a>
                    <p className="desc">
                        su proyecto es muy importante para nosotros
                    </p>
                    <ul className="socials-footers">
                        <li>
                            <a href="https://www.facebook.com/sistemaslitograficos2021">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                        </li> 
                        <li>
                            <a href="https://www.instagram.com/sistemaslitograficossas/">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li> 
                        <li>
                            <a href="https://www.tiktok.com/@sistemaslitograficos">
                                <i class="fa-brands fa-tiktok"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/message/JHWMGEF6WKHDI1">
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-widget">
                    <h6> Accesos Rapidos</h6>
                    <ul className="links-footers">
                        <li>
                            <a href='/'>Inicio</a>
                        </li>
                        <li>
                            <a href='/nosotros'>Quiénes somos</a>
                        </li>
                        <li>
                            <a href='/soluciones'>Soluciones</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-widget">
                    <h6>Servicios</h6>
                    <ul className="links-footers">
                        <li>
                            <a href='/soluciones'>Editoriales</a>
                        </li>
                        <li>
                            <a href='/soluciones'>Empaques</a>
                        </li>
                        <li>
                            <a href='/soluciones'>Publicidad</a>
                        </li>
                        <li>
                            <a href='/soluciones'>Corporativo</a>
                        </li>
                        <li>
                            <a href='/soluciones'>Exteriores</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-widget">
                    <h6>Soporte</h6>
                    <ul className="links-footers">
                        <li>
                            <a href='/contacto'>Contactanos</a>
                        </li>
                        <li>
                            <a href='/cotizacion'>Cotizaciones</a>
                        </li>
                       { /*<li>
                            <a href='/'>Politicas de Cookies</a>
                        </li> */}
                        <li>
                            <a href='/privacy'>Politicas de privacidad</a>
                        </li>
                    </ul>
                </div>
                <div className="copyright-warpper">
                    <h6> Accesos Rapidos</h6>
                        <p>
                            Desing and Developed by
                            <a href="https://github.com/Wilyos" target="blank"> Wilyos</a>
                        </p>
                        <p>todos los derechos reservados Sistemas Litográficos 2025 &copy;</p>
                </div>
             </div>
            </div>
        </footer>
    
  );
}

export default Footer;