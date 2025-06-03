import React, {useState} from "react";
import '../../App.css';
import { useTranslation } from 'react-i18next';
import '../../i18n'; 




const Soluciones=()=>{

    const [selectedCategory, setSelectedCategory] = useState("todos");
    const  [menuVisible,setMenuVisible] = useState(false)
    

    const products = [
        {
            id: 1,
            name: 'Editorial',
            image: require('../../assets/revistaA.jpg'),
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
            image: require('../../assets/caja.webp'),
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
            categoria: ['Publicidad Exterior'],
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
            image: require('../../assets/boletas.webp'),
            categoria: ['Publicidad'],
            descripcion: 'Entradas personalizadas con alta calidad de impresión. Seguridad y diseño para tu evento.',
            whatsapp: true
        },
        {
            id: 15,
            name: 'Menú',
            image: require('../../assets/menu.webp'),
            categoria: ['Publicidad'],
            descripcion: 'Diseñamos menús que reflejan el estilo de tu restaurante. Claros, duraderos y atractivos.',
            whatsapp: true
        },
        {
            id: 16,
            name: 'Volantes',
            image: require('../../assets/volantes.webp'),
            categoria: ['Publicidad'],
            descripcion: 'Promociona de forma directa y efectiva. Volantes con diseño estratégico y gran impacto.',
            whatsapp: true
        },
        {
            id: 17,
            name: 'Bolsas',
            image: require('../../assets/bolsa.webp'),
            categoria: ['Empaque', 'MaterialPop'],
            descripcion: 'Empaca con estilo y funcionalidad. Las bolsas personalizadas son ideales para entregar productos y reforzar tu marca.',
            whatsapp: true
        },
         {
            id: 18,
            name: 'Caja / Empaque',
            image: require('../../assets/caja.webp'),
            categoria: ['Empaque'],
            descripcion: 'Cajas personalizadas que protegen y promocionan tus productos. Perfectas para retail o envíos.',
            whatsapp: true
            },
        {
            id: 19,
            name: 'Etiqueta Adhesiva',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Empaque'],
            descripcion: 'Etiqueta tus productos con estilo. Adhesivos personalizados para destacar tu marca en cada detalle.',
            whatsapp: true
        },
        {
            id: 20,
            name: 'Etiquetas',
            image: require('../../assets/etiqueta.png'),
            categoria: ['Empaque', 'MaterialPop'],
            descripcion: 'Soluciones versátiles para clasificar y promocionar. Etiquetas impresas a la medida de tus necesidades.',
            whatsapp: true
        },
        {
            id: 21,
            name: 'Block de notas',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Corporativo'],
            descripcion: 'Funcionales y promocionales. Ideal como regalo corporativo o herramienta de trabajo diaria.',
            whatsapp: true
        },
        {
            id: 22,
            name: 'Bolsa Corporativa',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Corporativo'],
            descripcion: 'Refuerza tu imagen de marca con bolsas institucionales elegantes y resistentes.',
            whatsapp: true
        },
         {
            id: 23,
            name: 'Almanaque / Calendario',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Corporativo'],
            descripcion: 'Marca presencia todo el año con calendarios personalizados que combinan funcionalidad y diseño.',
            whatsapp: true
        },
        {
            id: 24,
            name: 'Carpetas',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Corporativo'],
            descripcion: 'Organización y presentación profesional. Carpetas corporativas ideales para propuestas y eventos.',
            whatsapp: true
        },
        {
            id: 25,
            name: 'Membrete',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Corporativo'],
            descripcion: 'Comunica formalidad y coherencia con membretes que refuerzan tu identidad de marca.',
            whatsapp: true
        },
        {
            id: 26,
            name: 'Sellos',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Corporativo'],
            descripcion: 'Agiliza procesos y añade profesionalismo con sellos personalizados de alta calidad.',
            whatsapp: true
        },
        {
            id: 27,
            name: 'Señalización',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Corporativo'],
            descripcion: 'Orienta, informa y refuerza la imagen de tu empresa con señalización personalizada y funcional.',
            whatsapp: true
        },
       {
            id: 28,
            name: 'Sobres',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Corporativo'],
            descripcion: 'Dale un toque profesional a tu correspondencia. Sobres personalizados para todo tipo de comunicación empresarial.',
            whatsapp: true
        },
        {
            id: 29,
            name: 'Souvenirs',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Corporativo', 'MaterialPop'],
            descripcion: 'Regalos promocionales que dejan huella. Souvenirs ideales para fidelizar y sorprender a tus clientes.',
            whatsapp: true
        },
        {
            id: 30,
            name: 'Talonarios',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Corporativo'],
            descripcion: 'Control y organización en cada hoja. Talonarios personalizados para facturas, pedidos y más.',
            whatsapp: true
        },
        {
            id: 31,
            name: 'Tarjetas',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Corporativo'],
            descripcion: 'Primera impresión con impacto. Tarjetas de presentación profesionales y memorables.',
            whatsapp: true
        },
        {
            id: 32,
            name: 'Vinilo / Plotter',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Corporativo','Publicidad Exterior','MaterialPop'],
            descripcion: 'Ideal para decorar espacios o señalizar con estilo. Vinilos resistentes y personalizados.',
            whatsapp: true
        },
        {
            id: 33,
            name: 'Floorgrap',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Publicidad Exterior', 'MaterialPop'],
            descripcion: 'Publicidad en el piso con impacto visual. Floorgraps para señalización o promociones llamativas.',
            whatsapp: true
        },
        {
            id: 34,
            name: 'Microperforado',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Publicidad Exterior'],
            descripcion: 'Vinilo microperforado ideal para ventanas. Visibilidad desde el interior y publicidad desde el exterior.',
            whatsapp: true
        },
        {
            id: 35,
            name: 'Pendón',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Publicidad Exterior', 'MaterialPop'],
            descripcion: 'Impacto visual en eventos o puntos de venta. Pendones resistentes y personalizados.',
            whatsapp: true
        },
         {
            id: 36,
            name: 'Rompe Tráfico',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Publicidad Exterior', 'MaterialPop'],
            descripcion: 'Diseños resistentes para captar atención en zonas de alto tránsito. Publicidad directa y efectiva.',
            whatsapp: true
        },
        {
            id: 38,
            name: 'Valla publicitaria',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Publicidad Exterior'],
            descripcion: 'Impacto masivo y alta visibilidad. Las vallas publicitarias son ideales para campañas de gran alcance.',
            whatsapp: true
        },
        {
            id: 39,
            name: 'Vinilo laminado',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['Publicidad Exterior'],
            descripcion: 'Durabilidad y protección extra. Perfecto para exteriores o superficies expuestas.',
            whatsapp: true
        },
        {
            id: 40,
            name: 'Dangler',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['MaterialPop'],
            descripcion: 'Promociona con creatividad desde el techo. Llamativos, versátiles y fáciles de instalar.',
            whatsapp: true
        },
        {
            id: 41,
            name: 'Display / Móvil',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['MaterialPop'],
            descripcion: 'Soluciones visuales que elevan tus productos en el punto de venta. Diseños atractivos y funcionales.',
            whatsapp: true
        },
        {
            id: 42,
            name: 'Exhibidor',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['MaterialPop'],
            descripcion: 'Resalta tus productos con exhibidores personalizados. Funcionalidad y marca en un solo elemento.',
            whatsapp: true
        },
        {
            id: 43,
            name: 'Góndola',
            image: require('../../assets/popPortafolio.jpg'),
            categoria: ['MaterialPop'],
            descripcion: 'Optimiza espacios de venta y aumenta la visibilidad de tus productos con góndolas personalizadas.',
            whatsapp: true
        }
       
    ];

    const filteredProducts = selectedCategory === "todos"
    ? products.filter(product => product.id > 6)
    : products.filter(product => product.id > 6 && product.categoria.includes(selectedCategory));

    const { t } = useTranslation();

    return (
        <>
            <div className="wrapper-solucion">

                <header className="movil">
                    <button className="open-menu" id="open-menu" onClick={()=> setMenuVisible(true)}>
                        <i class="fa-solid fa-bars"></i>{t('menu')}
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
                                    <i className="fa-solid fa-hand-point-right"></i> {t('all_products')}
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
                                    <i className="fa-regular fa-hand-point-right"></i> {t(`categories.Editorial`)}
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
                                    id="Publicidad Exterior"
                                    className={`boton-categoria ${selectedCategory === "Publicidad Exterior" ? "active" : ""}`}
                                    onClick={() => {setSelectedCategory("Publicidad Exterior");
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
