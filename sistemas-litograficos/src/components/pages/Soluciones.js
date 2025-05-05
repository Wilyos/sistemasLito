import React from "react";
import '../../App.css';





function Soluciones(){

    const products = [
        { id: 1, name: 'Editorial', image: require('../../assets/editorialPortafolio.jpg') },
        { id: 2, name: 'Publicomerciales', image: require('../../assets/afichePortafolio.png') },
        { id: 3, name: 'Packaging', image: require('../../assets/packagingPortafolio.jpg') },
        { id: 4, name: 'Corporativa', image: require('../../assets/corporativasPortafolio.jpg') },
        { id: 5, name: 'Publicidad Exterior', image: require('../../assets/exterioresPortafolio.png') },
        { id: 6, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg') }
    ];

    return(
        <>
            <div className="wrapper-solucion">
                <aside>
                    <navbar>
                        <ul className="menu">
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
                <main className="main-soluciones">
                    <h2 className="titulo-soluciones">
                        Todos los productos
                    </h2>
                    <div className="contenedor-soluciones">
                        <div className="productos">
                        {products.map(product => (
                            <div key={product.id} className="productos">
                                <img className="producto-imagen-soluciones" src={product.image} alt={product.name} />
                                <div className="producto-detalles">
                                    <h3 className="produto-titulo">{product.name}</h3>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )

}

export default Soluciones;
