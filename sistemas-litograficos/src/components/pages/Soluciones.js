import React, {useState} from "react";
import '../../App.css';





const Soluciones=()=>{

    const [selectedCategory, setSelectedCategory] = useState("todos");
    const  [menuVisible,setMenuVisible] = useState(false)
    

    const products = [
        { id: 1, name: 'Editorial', image: require('../../assets/editorialPortafolio.jpg'), categoria: ['Editorial'], descripcion: '' },
        { id: 2, name: 'Publicomerciales', image: require('../../assets/afichePortafolio.png'), categoria: ['Publicidad'], descripcion: '' },
        { id: 3, name: 'Packaging', image: require('../../assets/packagingPortafolio.jpg'), categoria: ['Empaque'], descripcion: '' },
        { id: 4, name: 'Corporativa', image: require('../../assets/corporativasPortafolio.jpg'), categoria: ['Corporativo'], descripcion: '' },
        { id: 5, name: 'Publicidad Exterior', image: require('../../assets/exterioresPortafolio.png'), categoria: ['PublicidadEx'], descripcion: '' },
        { id: 6, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 7, name: 'Agenda', image: require('../../assets/editorialPortafolio.jpg'), categoria: ['Editorial'], descripcion: 'Además de ser útil durante todo el año, las agendas personalizadas son una fuerte presencia de marca.' },
        { id: 8, name: 'Brochure/Plegable', image: require('../../assets/editorialPortafolio.jpg'), categoria: ['Editorial'], descripcion: 'exponga todo su portafolio de manera llamativa y con informacion detallada.' },
        { id: 9, name: 'Cartilla/Catalogo', image: require('../../assets/editorialPortafolio.jpg'), categoria: ['Editorial'], descripcion: 'Detalle todas las especificaciones correspondientes a cada uno de sus productos o servicios.' },
        { id: 10, name: 'Libro', image: require('../../assets/editorialPortafolio.jpg'), categoria: ['Editorial'], descripcion: 'Publique sus libros con la calidad necesaria. Hay quienes si juzgan los libros por su portada.' },
        { id: 11, name: 'Periódico', image: require('../../assets/editorialPortafolio.jpg'), categoria: ['Editorial'], descripcion: 'Publique sus grandes comunicaciones de manera periódica a un bajo costo.' },
        { id: 12, name: 'Revista', image: require('../../assets/editorialPortafolio.jpg'), categoria: ['Editorial'], descripcion: 'Materialice su contenido editorial en imapactantes revistas, conservando la uniformidad entre cada edición. Calidad e impacto' },
        { id: 13, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 14, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 15, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 16, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 17, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 18, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 19, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 20, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 21, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 22, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 23, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 24, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 25, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 26, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 27, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 28, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 29, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 30, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 31, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 32, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 33, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 34, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 35, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 36, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 38, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 39, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 40, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 41, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 42, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 43, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 44, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 45, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 46, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 47, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' },
        { id: 48, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: '' }
        
    ];

    const filteredProducts = selectedCategory === "todos"
    ? products
    : products.filter(product => product.categoria.includes(selectedCategory));

    return (
        <>
            <div className="wrapper-solucion">
                <header className="movil">
                    <button className="open-menu" id="open-menu" onClick={()=> setMenuVisible(true)}>
                        <i class="fa-solid fa-bars"></i>Menú
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
                                    onClick={() => {setSelectedCategory("Editorial");
                                        setMenuVisible(false);
                                        }
                                    }
                                >
                                    <i className="fa-regular fa-hand-point-right"></i> Editoriales
                                </button>
                            </li>
                            <li>
                                <button
                                    id="Publicidad"
                                    className={`boton-categoria ${selectedCategory === "Publicidad" ? "active" : ""}`}
                                    onClick={() => {setSelectedCategory("Publicidad");
                                        setMenuVisible(false);
                                        }
                                    }
                                >
                                    <i className="fa-regular fa-hand-point-right"></i> Publicidad
                                </button>
                            </li>
                            <li>
                                <button
                                    id="Empaque"
                                    className={`boton-categoria ${selectedCategory === "Empaque" ? "active" : ""}`}
                                    onClick={() => {setSelectedCategory("Empaque");
                                        setMenuVisible(false);
                                        }
                                    }
                                >
                                    <i className="fa-regular fa-hand-point-right"></i> Empaques
                                </button>
                            </li>
                            <li>
                                <button
                                    id="Corporativo"
                                    className={`boton-categoria ${selectedCategory === "Corporativo" ? "active" : ""}`}
                                    onClick={() => {setSelectedCategory("Corporativo");
                                        setMenuVisible(false);
                                        }
                                    }
                                >
                                    <i className="fa-regular fa-hand-point-right"></i> Corporativo
                                </button>
                            </li>
                            <li>
                                <button
                                    id="PublicidadEx"
                                    className={`boton-categoria ${selectedCategory === "PublicidadEx" ? "active" : ""}`}
                                    onClick={() => {setSelectedCategory("PublicidadEx");
                                        setMenuVisible(false);
                                        }
                                    }
                                >
                                    <i className="fa-regular fa-hand-point-right"></i> Publicidad Exterior
                                </button>
                            </li>
                            <li>
                                <button
                                    id="MaterialPop"
                                    className={`boton-categoria ${selectedCategory === "MaterialPop" ? "active" : ""}`}
                                    onClick={() => {setSelectedCategory("MaterialPop");
                                        setMenuVisible(false);
                                        }
                                    }
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
                                <div class="overlay">
                                    <div class="text">{product.descripcion}</div>
                                </div>
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
