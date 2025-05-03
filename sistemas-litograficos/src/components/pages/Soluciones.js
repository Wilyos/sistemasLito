import React from "react";
import '../../App.css';





function Soluciones(){

    return(
        <>
            <div className="wrapper-solucion">
                <aside>
                    <navbar>
                        <ul>
                            <li>
                                <button className="boton-categoria"><i class="fa-solid fa-hand-point-right"></i> Todos los productos</button>
                            </li>
                            <li>
                                <button className="boton-categoria"><i class="fa-regular fa-hand-point-right"></i> Editoriales</button>
                            </li>
                            <li>
                                <button className="boton-categoria"><i class="fa-regular fa-hand-point-right"></i> Empaques</button>
                            </li>
                            <li>
                                <button className="boton-categoria"><i class="fa-regular fa-hand-point-right"></i> Corportativo</button>
                            </li>
                            <li>
                                <button className="boton-categoria"><i class="fa-regular fa-hand-point-right"></i> Publicidad</button>
                            </li>
                            <li>
                                <button className="boton-categoria"><i class="fa-regular fa-hand-point-right"></i> Publicidad Exterior</button>
                            </li>
                        </ul>
                    </navbar>
                </aside>
                <main>
                    <h2 className="titulo-soluciones">
                        Todos los productos
                    </h2>
                    <div className="contenedor-soluciones">
                        <div className="productos">
                            <img src={require('../../assets/editorialPortafolio.jpg')} alt="imagen 1" />
                            <div>
                                <h3></h3>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )

}

export default Soluciones;
