import React from "react";
import "../App.css";

function FooterS() {
    return(
        <footer className="footers">
            <div className="container-sfoooter">
             <div className="wrapper-footer">
                <div className="footer-widget">
                    <a href="#">
                        <img src={require('../assets/Sis.png')} alt="logo-footer"/>
                    </a>
                    <p className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi facere delectus a necessitatibus reiciendis!
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
             </div>
            </div>
        </footer>
            
            
                )
}
