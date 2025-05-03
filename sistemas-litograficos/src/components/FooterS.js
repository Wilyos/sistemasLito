import React from "react";
import "../App.css";

function FooterS() {
    return(
        <footer className="footers">
            <div className="container-sfoooter">
             <div className="wrapper-footer">
                <div className="footer-widget">
                    <a href="#">
                        <img src={require('../assets/logoSis.png')} alt="logo-footer" className="logo-footers"/>
                    </a>
                    <p className="desc">
                        su proyecto es muy importante para nosotros
                    </p>
                    <ul className="socials-footers">
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                        </li> 
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li> 
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-tiktok"></i>
                            </a>
                        </li> 
                    </ul>
                </div>
                <div className="footer-widget">
                    <h6> Accesos Rapidos</h6>
                    <ul className="links-footers">
                        <li>
                            <a>Inicio</a>
                        </li>
                        <li>
                            <a>Quiénes somos</a>
                        </li>
                        <li>
                            <a>Soluciones</a>
                        </li>
                        <li>
                            <a>Contactanos</a>
                        </li>
                        <li>
                            <a>Cotizaciones</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-widget">
                    <h6>Servicios</h6>
                    <ul className="links-footers">
                        <li>
                            <a>Editoriales</a>
                        </li>
                        <li>
                            <a>Empaques</a>
                        </li>
                        <li>
                            <a>Publicidad</a>
                        </li>
                        <li>
                            <a>Corporativo</a>
                        </li>
                        <li>
                            <a>Exteriores</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-widget">
                    <h6>Soporte</h6>
                    <ul className="links-footers">
                        <li>
                            <a>Contactanos</a>
                        </li>
                        <li>
                            <a>Cotizaciones</a>
                        </li>
                        <li>
                            <a>Politicas de Cookies</a>
                        </li>
                        <li>
                            <a>Politicas de privacidad</a>
                        </li>
                    </ul>
                </div>
                <div className="copyright-warpper">
                    <h6> Accesos Rapidos</h6>
                        <p>
                            Desing and Developed by
                            <a href="#" target="blank"> Varakness</a>
                        </p>
                        <p>todos los derechos reservados Sistemas Litográficos 2025 &copy;</p>
                </div>
             </div>
            </div>
        </footer>
            
            
                );
}

export default FooterS;
