import React, {useState} from "react";
import '../../App.css';





const Soluciones=()=>{

    const [selectedCategory, setSelectedCategory] = useState("todos");
    const  [menuVisible,setMenuVisible] = useState(false)
    

    const products = [
        {
            id: 1,
            name: 'Editorial',
            image: require('../../assets/cartilla.webp'),
            categoria: ['Editorial'],
            descripcion: 'Transformamos ideas en publicaciones memorables. Ideal para libros, revistas y más.',
            whatsapp: true
        },
        {
            id: 2,
            name: 'Publicomerciales',
            image: require('../../assets/afiche.webp'),
            categoria: ['Publicidad'],
            descripcion: 'Diseños impactantes que venden. Dale presencia a tu marca con piezas promocionales.',
            whatsapp: true
        },
        {
            id: 3,
            name: 'Packaging',
            image: require('../../assets/empaques.webp'),
            categoria: ['Empaque'],
            descripcion: 'Crea una experiencia de marca desde el primer contacto. Empaques que destacan.',
            whatsapp: true
        },
        {
            id: 4,
            name: 'Corporativa',
            image: require('../../assets/corporativo.webp'),
            categoria: ['Corporativo'],
            descripcion: 'Impulsa tu identidad visual con artículos que comunican profesionalismo.',
            whatsapp: true
        },
        {
            id: 5,
            name: 'Publicidad Exterior',
            image: require('../../assets/exterioresPortafolio.png'),
            categoria: ['PublicidadEx'],
            descripcion: 'Atrae miradas con formatos grandes y resistentes. Ideal para calles y eventos.',
            whatsapp: true
        },
        {
            id: 6,
            name: 'Material P.O.P',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['MaterialPop'],
            descripcion: 'Destaca en el punto de venta con piezas creativas y funcionales.',
            whatsapp: true
        },
        {
            id: 7,
            name: 'Agenda',
            image: require('../../assets/agenda.webp'),
            categoria: ['Editorial', 'Corporativo'],
            descripcion: 'Útiles y con gran impacto visual. Las agendas personalizadas refuerzan tu marca cada día.',
            whatsapp: true
        },
        {
            id: 8,
            name: 'Brochure/Plegable',
            image: require('../../assets/plegable.webp'),
            categoria: ['Editorial','Publicidad'],
            descripcion: 'Presenta tu portafolio con estilo. Ideal para eventos, ventas o como presentación empresarial.',
            whatsapp: true
        },
        {
            id: 9,
            name: 'Cartilla/Catálogo',
            image: require('../../assets/cartilla.webp'),
            categoria: ['Editorial'],
            descripcion: 'Organiza y muestra tu información de forma clara y atractiva. Perfecto para catálogos y manuales.',
            whatsapp: true
        },
        {
            id: 10,
            name: 'Libro',
            image: require('../../assets/libro.webp'),
            categoria: ['Editorial'],
            descripcion: 'Desde novelas hasta libros técnicos. Calidad editorial que resalta el contenido.',
            whatsapp: true
        },
        {
            id: 11,
            name: 'Periódico',
            image: require('../../assets/periodico.webp'),
            categoria: ['Editorial','Publicidad'],
            descripcion: 'Ideal para medios internos, publicaciones comunitarias o promocionales. Efectivo y económico.',
            whatsapp: true
        },
        {
            id: 12,
            name: 'Revista',
            image: require('../../assets/revista.webp'),
            categoria: ['Editorial'],
            descripcion: 'Diseños atractivos y coherentes. Impacta a tus lectores con contenido de calidad y presentación profesional.',
            whatsapp: true
        },
        {
            id: 13,
            name: 'Afiches',
            image: require('../../assets/afiche.webp'),
            categoria: ['Publicidad', 'MaterialPop'],
            descripcion: 'Captura la atención con diseños llamativos en gran formato. Perfectos para promociones o campañas visuales.',
            whatsapp: true
        },
        {
            id: 14,
            name: 'Boletas',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Publicidad'],
            descripcion: 'Entradas personalizadas con alta calidad de impresión. Seguridad y diseño para tu evento.',
            whatsapp: true
        },
        {
            id: 15,
            name: 'Menú',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Publicidad'],
            descripcion: 'Diseñamos menús que reflejan el estilo de tu restaurante. Claros, duraderos y atractivos.',
            whatsapp: true
        },
        {
            id: 16,
            name: 'Volantes',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Publicidad'],
            descripcion: 'Promociona de forma directa y efectiva. Volantes con diseño estratégico y gran impacto.',
            whatsapp: true
        },
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

                <header className="movil">
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
                </main> 
              {/*   <div className="imagen-construccion-contenedor">
                    <img className="construccion" src={require('../../assets/construccion.png')} alt="En construcción" />
                </div> */}
            </div>
        </>
    );

}

export default Soluciones;
