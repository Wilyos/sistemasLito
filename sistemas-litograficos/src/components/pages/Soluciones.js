import React, {useState} from "react";
import '../../App.css';





const Soluciones=()=>{

    const [selectedCategory, setSelectedCategory] = useState("todos");
    const  [menuVisible,setMenuVisible] = useState(false)
    

    const products = [
        { id: 1,
             name: 'Editorial',
             image: require('../../assets/cartilla.webp'),
              categoria: ['Editorial'],
               descripcion: '' },
        { id: 2,
             name: 'Publicomerciales',
             image: require('../../assets/afichePortafolio.png'),
              categoria: ['Publicidad'],
               descripcion: '' },
        { id: 3,
             name: 'Packaging',
             image: require('../../assets/packagingPortafolio.jpg'),
              categoria: ['Empaque'],
               descripcion: '' },
        { id: 4,
             name: 'Corporativa',
             image: require('../../assets/corporativasPortafolio.jpg'),
              categoria: ['Corporativo'],
               descripcion: '' },
        { id: 5,
             name: 'Publicidad Exterior',
             image: require('../../assets/exterioresPortafolio.png'),
              categoria: ['PublicidadEx'],
               descripcion: '' },
        { id: 6,
             name: 'Material P.O.P',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['MaterialPop'],
               descripcion: '' },
        { id: 7,
             name: 'Agenda',
             image: require('../../assets/agenda.webp'),
              categoria: ['Editorial', 'Corporativo'],
               descripcion: 'Además de ser útil durante todo el año, las agendas personalizadas son una fuerte presencia de marca.' },
        { id: 8,
             name: 'Brochure/Plegable',
             image: require('../../assets/plegable.webp'),
              categoria: ['Editorial','Publicidad'],
                
              descripcion: 'exponga todo su portafolio de manera llamativa y con informacion detallada.' },
        { id: 9,
             name: 'Cartilla/Catalogo',
             image: require('../../assets/cartilla.webp'),
              categoria: ['Editorial'],
               descripcion: 'Detalle todas las especificaciones correspondientes a cada uno de sus productos o servicios.' },
        { id: 10,
             name: 'Libro',
             image: require('../../assets/libro.webp'),
              categoria: ['Editorial'],
               descripcion: 'Publique sus libros con la calidad necesaria. Hay quienes si juzgan los libros por su portada.' },
        { id: 11,
             name: 'Periódico',
             image: require('../../assets/periodico.webp'),
              categoria: ['Editorial','Publicidad'], 
              descripcion: 'Publique sus grandes comunicaciones de manera periódica a un bajo costo.' },
        { id: 12,
             name: 'Revista',
             image: require('../../assets/revista.webp'),
              categoria: ['Editorial'], 
              descripcion: 'Materialice su contenido editorial en imapactantes revistas, conservando la uniformidad entre cada edición. Calidad e impacto' },
        { id: 13,
             name: 'Afiches',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['Publicidad', 'MaterialPop'], 
              descripcion: '' },
        { id: 14,
             name: 'Boletas',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['Publicidad'], 
              descripcion: '' },
        { id: 15,
             name: 'Menù',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['Publicidad'], 
              descripcion: '' },
        { id: 16,
             name: 'Volantes',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['Publicidad'], 
              descripcion: '' },
        { id: 17,
             name: 'Bolsas',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['Empaque', 'MaterialPop'], 
              descripcion: '' },
        { id: 18,
             name: 'Caja / Empaque',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['Empaque'], 
              descripcion: '' },
        { id: 19,
             name: 'Etiqueta Adhesiva',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['Empaque'], 
              descripcion: '' },
        { id: 20,
             name: 'Etiquetas',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['Empaque', 'MaterialPop'], 
              descripcion: '' },
        { id: 21,
             name: 'Block de notas',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['Corporativo'], 
              descripcion: '' },
        { id: 22,
             name: 'Bolsa Corporativa',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['Corporativo'], 
              descripcion: '' },
        { id: 23,
             name: 'Almanaque / Calendario',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['Corporativo'], 
              descripcion: '' },
        { id: 24,
             name: 'Carpetas',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['Corporativo'], 
              descripcion: '' },
        { id: 25,
             name: 'Membrete',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['Corporativo'], 
              descripcion: '' },
        { id: 26,
             name: 'Sellos',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['Corporativo'], 
              descripcion: '' },
        { id: 27,
             name: 'Señalización',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['Corporativo'], 
              descripcion: '' },
        { id: 28,
             name: 'Sobres',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['Corporativo'], 
              descripcion: '' },
        { id: 29,
             name: 'Souvenirs',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['Corporativo', 'MaterialPop'], 
              descripcion: '' },
        { id: 30,
             name: 'Talonarios',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['Corporativo'], 
              descripcion: '' },
        { id: 31,
             name: 'Tarjetas',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['Corporativo'], 
              descripcion: '' },
        { id: 32,
             name: 'Vinilo / Plotter',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['Corporativo','PublicidadEx','MaterialPop'], 
              descripcion: '' },
        { id: 33,
             name: 'Floorgrap',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['PublicidadEx', 'MaterialPop'], 
              descripcion: '' },
        { id: 34,
             name: 'Microperforado',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['PublicidadEx'], 
              descripcion: '' },
        { id: 35,
             name: 'Pendón',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['PublicidadEx', 'MaterialPop'], 
              descripcion: '' },
        { id: 36,
             name: 'Rompe Tráfico',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['PublicidadEx', 'MaterialPop'], 
              descripcion: '' },
        { id: 38,
             name: 'Valla publicitaria',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['PublicidadEx',], 
              descripcion: '' },
        { id: 39,
             name: 'vinilo laminado',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['PublicidadEx'], 
              descripcion: '' },
        { id: 40,
             name: 'Dangler',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['MaterialPop'], 
              descripcion: '' },
        { id: 41,
             name: 'Display / Movil',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['MaterialPop'], 
              descripcion: '' },
        { id: 42,
             name: 'Exhibidor',
             image: require('../../assets/popPortafolio.jpg'),
              categoria: ['MaterialPop'], 
              descripcion: '' },
        { id: 43,
             name: 'Góndola',
             image: require('../../assets/popPortafolio.jpg'),
             categoria: ['MaterialPop'],
             descripcion: '' },
       
    ];

    const filteredProducts = selectedCategory === "todos"
    ? products.filter(product => product.id > 6)
    : products.filter(product => product.categoria.includes(selectedCategory));

    return (
        <>
            <div className="wrapper-solucion">

               { /* <header className="movil">
                    <button className="open-menu" id="open-menu" onClick={()=> setMenuVisible(true)}>
                        <i class="fa-solid fa-bars"></i>Menú
                    </button>
                </header>
                <aside className={menuVisible ? "aside-visible": ""}>
                    <button className="close-menu" id="close-menu" onClick={()=> setMenuVisible(false)}>
                        <i class="fa-solid fa-x"></i>
                    </button>
                    <nav>
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
                    </nav>
                </aside>
                <main className="main-soluciones">
                    <h2 className="titulo-soluciones">
                        {selectedCategory === "todos" ? "Todos los productos" : selectedCategory}
                    </h2>
                    <div className="contenedor-soluciones">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="productos">
                                <img className="producto-imagen-soluciones" src={product.image} alt={product.name} />
                                <div className="overlay">
                                    <div className="text">{product.descripcion}</div>
                                </div>
                                <div className="producto-detalles">
                                    <h3 className="produto-titulo">{product.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </main> */}
                <div className="imagen-construccion-contenedor">
                    <img className="construccion" src={require('../../assets/construccion.png')} alt="En construcción" />
                </div>
            </div>
        </>
    );

}

export default Soluciones;
