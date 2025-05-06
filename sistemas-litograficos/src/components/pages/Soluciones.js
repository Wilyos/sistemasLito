import React, {useState} from "react";
import '../../App.css';





function Soluciones(){

    const [selectedCategory, setSelectedCategory] = useState("todos");
    const  [menuVisible,setMenuVisible] = useState(false)
    

    const products = [
        { id: 1, name: 'Editorial', image: require('../../assets/editorialPortafolio.jpg'), categoria: 'Editorial' },
        { id: 2, name: 'Publicomerciales', image: require('../../assets/afichePortafolio.png'), categoria: 'Publicidad' },
        { id: 3, name: 'Packaging', image: require('../../assets/packagingPortafolio.jpg'), categoria: 'Empaque' },
        { id: 4, name: 'Corporativa', image: require('../../assets/corporativasPortafolio.jpg'), categoria: 'Corporativo' },
        { id: 5, name: 'Publicidad Exterior', image: require('../../assets/exterioresPortafolio.png'), categoria: 'PublicidadEx' },
        { id: 6, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: 'MaterialPop' }
    ];

    const filteredProducts = selectedCategory === "todos"
    ? products
    : products.filter(product => product.categoria === selectedCategory);

    return (
        <>
            <div className="wrapper-solucion">
                <header className="movil">
                    <button className="open-menu" id="open-menu" onClick={()=> setMenuVisible(true)}>
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </header>
                <aside className={menuVisible ? "aside-visible": ""}>
                    <button className="close-menu" id="close-menu" onClick={()=> setMenuVisible(false)}>
                        <i class="fa-solid fa-x"></i>
                    </button>
                    <navbar>

                        <ul className="menu-aside">
                        
                            <li>
                                <button
                                    id="todos"
                                    className={`boton-categoria ${selectedCategory === "todos" ? "active" : ""}`}
                                    onClick={() => {setSelectedCategory("todos");
                                        setMenuVisible(false);
                                        }
                                    }
                                >
                                    <i className="fa-solid fa-hand-point-right"></i> Todos los productos
                                </button>
                            </li>
                            <li>
                                <button
                                    id="Editorial"
                                    className={`boton-categoria ${selectedCategory === "Editorial" ? "active" : ""}`}
                                    onClick={() => setSelectedCategory("Editorial")}
                                >
                                    <i className="fa-regular fa-hand-point-right"></i> Editoriales
                                </button>
                            </li>
                            <li>
                                <button
                                    id="Publicidad"
                                    className={`boton-categoria ${selectedCategory === "Publicidad" ? "active" : ""}`}
                                    onClick={() => setSelectedCategory("Publicidad")}
                                >
                                    <i className="fa-regular fa-hand-point-right"></i> Publicidad
                                </button>
                            </li>
                            <li>
                                <button
                                    id="Empaque"
                                    className={`boton-categoria ${selectedCategory === "Empaque" ? "active" : ""}`}
                                    onClick={() => setSelectedCategory("Empaque")}
                                >
                                    <i className="fa-regular fa-hand-point-right"></i> Empaques
                                </button>
                            </li>
                            <li>
                                <button
                                    id="Corporativo"
                                    className={`boton-categoria ${selectedCategory === "Corporativo" ? "active" : ""}`}
                                    onClick={() => setSelectedCategory("Corporativo")}
                                >
                                    <i className="fa-regular fa-hand-point-right"></i> Corporativo
                                </button>
                            </li>
                            <li>
                                <button
                                    id="PublicidadEx"
                                    className={`boton-categoria ${selectedCategory === "PublicidadEx" ? "active" : ""}`}
                                    onClick={() => setSelectedCategory("PublicidadEx")}
                                >
                                    <i className="fa-regular fa-hand-point-right"></i> Publicidad Exterior
                                </button>
                            </li>
                            <li>
                                <button
                                    id="MaterialPop"
                                    className={`boton-categoria ${selectedCategory === "MaterialPop" ? "active" : ""}`}
                                    onClick={() => setSelectedCategory("MaterialPop")}
                                >
                                    <i className="fa-regular fa-hand-point-right"></i> Material P.O.P
                                </button>
                            </li>
                        </ul>
                    </navbar>
                </aside>
                <main className="main-soluciones">
                    <h2 className="titulo-soluciones">
                        {selectedCategory === "todos" ? "Todos los productos" : selectedCategory}
                    </h2>
                    <div className="contenedor-soluciones">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="productos">
                                <img className="producto-imagen-soluciones" src={product.image} alt={product.name} />
                                <div className="producto-detalles">
                                    <h3 className="produto-titulo">{product.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </>
    );

}

export default Soluciones;
