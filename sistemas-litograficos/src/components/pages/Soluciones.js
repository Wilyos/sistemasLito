import React, { useState } from "react";
import '../../ModernLanding.css'; // Assuming it's in src/
import { useTranslation } from 'react-i18next';
import '../../i18n'; 

const Soluciones = () => {
    const [selectedCategory, setSelectedCategory] = useState("todos");

    const products = [
        { id: 1, name: 'Editorial', image: require('../../assets/revistaA.jpg'), categoria: ['Editorial'], descripcion: 'Transformamos ideas en publicaciones memorables. Ideal para libros, revistas y más.' },
        { id: 2, name: 'Publicomerciales', image: require('../../assets/afiche.webp'), categoria: ['Publicidad'], descripcion: 'Diseños impactantes que venden. Dale presencia a tu marca con piezas promocionales.' },
        { id: 3, name: 'Packaging', image: require('../../assets/caja.webp'), categoria: ['Empaque'], descripcion: 'Crea una experiencia de marca desde el primer contacto. Empaques que destacan.' },
        { id: 4, name: 'Corporativa', image: require('../../assets/corporativo.webp'), categoria: ['Corporativo'], descripcion: 'Impulsa tu identidad visual con artículos que comunican profesionalismo.' },
        { id: 5, name: 'Publicidad Exterior', image: require('../../assets/publicidadEx.webp'), categoria: ['Publicidad Exterior'], descripcion: 'Atrae miradas con formatos grandes y resistentes. Ideal para calles y eventos.' },
        { id: 6, name: 'Material P.O.P', image: require('../../assets/popPortafolio.jpg'), categoria: ['MaterialPop'], descripcion: 'Destaca en el punto de venta con piezas creativas y funcionales.' },
        { id: 7, name: 'Agenda', image: require('../../assets/agenda.webp'), categoria: ['Editorial', 'Corporativo'], descripcion: 'Útiles y con gran impacto visual. Las agendas personalizadas refuerzan tu marca cada día.' },
        { id: 8, name: 'Brochure/Plegable', image: require('../../assets/plegable.webp'), categoria: ['Editorial','Publicidad'], descripcion: 'Presenta tu portafolio con estilo. Ideal para eventos, ventas o como presentación empresarial.' },
        { id: 9, name: 'Cartilla/Catálogo', image: require('../../assets/catalogo.webp'), categoria: ['Editorial'], descripcion: 'Organiza y muestra tu información de forma clara y atractiva. Perfecto para catálogos y manuales.' },
        { id: 10, name: 'Libro', image: require('../../assets/libro.webp'), categoria: ['Editorial'], descripcion: 'Desde novelas hasta libros técnicos. Calidad editorial que resalta el contenido.' },
        { id: 11, name: 'Periódico', image: require('../../assets/periodico.webp'), categoria: ['Editorial','Publicidad'], descripcion: 'Ideal para medios internos, publicaciones comunitarias o promocionales. Efectivo y económico.' },
        { id: 12, name: 'Revista', image: require('../../assets/revista.webp'), categoria: ['Editorial'], descripcion: 'Diseños atractivos y coherentes. Impacta a tus lectores con contenido de calidad y presentación profesional.' },
        { id: 13, name: 'Afiches', image: require('../../assets/afiche.webp'), categoria: ['Publicidad', 'MaterialPop'], descripcion: 'Captura la atención con diseños llamativos en gran formato. Perfectos para promociones o campañas visuales.' },
        { id: 14, name: 'Boletas', image: require('../../assets/boletas.webp'), categoria: ['Publicidad'], descripcion: 'Entradas personalizadas con alta calidad de impresión. Seguridad y diseño para tu evento.' },
        { id: 15, name: 'Menú', image: require('../../assets/menu.webp'), categoria: ['Publicidad'], descripcion: 'Diseñamos menús que reflejan el estilo de tu restaurante. Claros, duraderos y atractivos.' },
        { id: 16, name: 'Volantes', image: require('../../assets/volantes.webp'), categoria: ['Publicidad'], descripcion: 'Promociona de forma directa y efectiva. Volantes con diseño estratégico y gran impacto.' },
        { id: 17, name: 'Bolsas', image: require('../../assets/bolsa.webp'), categoria: ['Empaque', 'MaterialPop'], descripcion: 'Empaca con estilo y funcionalidad. Las bolsas personalizadas son ideales para entregar productos y reforzar tu marca.' },
        { id: 18, name: 'Caja / Empaque', image: require('../../assets/caja.webp'), categoria: ['Empaque'], descripcion: 'Cajas personalizadas que protegen y promocionan tus productos. Perfectas para retail o envíos.' },
        { id: 19, name: 'Etiqueta Adhesiva', image: require('../../assets/etiquetaAd.webp'), categoria: ['Empaque'], descripcion: 'Etiqueta tus productos con estilo. Adhesivos personalizados para destacar tu marca en cada detalle.' },
        { id: 20, name: 'Etiquetas', image: require('../../assets/etiqueta.png'), categoria: ['Empaque', 'MaterialPop'], descripcion: 'Soluciones versátiles para clasificar y promocionar. Etiquetas impresas a la medida de tus necesidades.' },
        { id: 21, name: 'Block de notas', image: require('../../assets/blockdenotas.webp'), categoria: ['Corporativo'], descripcion: 'Funcionales y promocionales. Ideal como regalo corporativo o herramienta de trabajo diaria.' },
        { id: 22, name: 'Bolsa Corporativa', image: require('../../assets/bolsas.webp'), categoria: ['Corporativo'], descripcion: 'Refuerza tu imagen de marca con bolsas institucionales elegantes y resistentes.' },
        { id: 23, name: 'Almanaque / Calendario', image: require('../../assets/calendario.webp'), categoria: ['Corporativo'], descripcion: 'Marca presencia todo el año con calendarios personalizados que combinan funcionalidad y diseño.' },
        { id: 24, name: 'Carpetas', image: require('../../assets/carpeta.webp'), categoria: ['Corporativo'], descripcion: 'Organización y presentación profesional. Carpetas corporativas ideales para propuestas y eventos.' },
        { id: 25, name: 'Membrete', image: require('../../assets/membrete.webp'), categoria: ['Corporativo'], descripcion: 'Comunica formalidad y coherencia con membretes que refuerzan tu identidad de marca.' },
        { id: 26, name: 'Sellos', image: require('../../assets/sello.webp'), categoria: ['Corporativo'], descripcion: 'Agiliza procesos y añade profesionalismo con sellos personalizados de alta calidad.' },
        { id: 27, name: 'Señalización', image: require('../../assets/señalizacion.webp'), categoria: ['Corporativo'], descripcion: 'Orienta, informa y refuerza la imagen de tu empresa con señalización personalizada y funcional.' },
        { id: 28, name: 'Sobres', image: require('../../assets/sobre.jpg'), categoria: ['Corporativo'], descripcion: 'Dale un toque profesional a tu correspondencia. Sobres personalizados para todo tipo de comunicación empresarial.' },
        { id: 29, name: 'Souvenirs', image: require('../../assets/souvenir.webp'), categoria: ['Corporativo', 'MaterialPop'], descripcion: 'Regalos promocionales que dejan huella. Souvenirs ideales para fidelizar y sorprender a tus clientes.' },
        { id: 30, name: 'Talonarios', image: require('../../assets/talonario.webp'), categoria: ['Corporativo'], descripcion: 'Control y organización en cada hoja. Talonarios personalizados para facturas, pedidos y más.' },
        { id: 31, name: 'Tarjetas', image: require('../../assets/tarjetas.webp'), categoria: ['Corporativo'], descripcion: 'Primera impresión con impacto. Tarjetas de presentación profesionales y memorables.' },
        { id: 32, name: 'Vinilo / Plotter', image: require('../../assets/plotter.webp'), categoria: ['Corporativo','Publicidad Exterior','MaterialPop'], descripcion: 'Ideal para decorar espacios o señalizar con estilo. Vinilos resistentes y personalizados.' },
        { id: 33, name: 'Floorgrap', image: require('../../assets/floograp.webp'), categoria: ['Publicidad Exterior', 'MaterialPop'], descripcion: 'Publicidad en el piso con impacto visual. Floorgraps para señalización o promociones llamativas.' },
        { id: 34, name: 'Microperforado', image: require('../../assets/microper.webp'), categoria: ['Publicidad Exterior'], descripcion: 'Vinilo microperforado ideal para ventanas. Visibilidad desde el interior y publicidad desde el exterior.' },
        { id: 35, name: 'Pendón', image: require('../../assets/pendon.webp'), categoria: ['Publicidad Exterior', 'MaterialPop'], descripcion: 'Impacto visual en eventos o puntos de venta. Pendones resistentes y personalizados.' },
        { id: 36, name: 'Rompe Tráfico', image: require('../../assets/rompetr.webp'), categoria: ['Publicidad Exterior', 'MaterialPop'], descripcion: 'Diseños resistentes para captar atención en zonas de alto tránsito. Publicidad directa y efectiva.' },
        { id: 38, name: 'Valla publicitaria', image: require('../../assets/publicidadEx.webp'), categoria: ['Publicidad Exterior'], descripcion: 'Impacto masivo y alta visibilidad. Las vallas publicitarias son ideales para campañas de gran alcance.' },
        { id: 39, name: 'Vinilo laminado', image: require('../../assets/vinilo.webp'), categoria: ['Publicidad Exterior'], descripcion: 'Durabilidad y protección extra. Perfecto para exteriores o superficies expuestas.' },
        { id: 40, name: 'Dangler', image: require('../../assets/dangler2.webp'), categoria: ['MaterialPop'], descripcion: 'Promociona con creatividad desde el techo. Llamativos, versátiles y fáciles de instalar.' },
        { id: 41, name: 'Display / Móvil', image: require('../../assets/dangler.webp'), categoria: ['MaterialPop'], descripcion: 'Soluciones visuales que elevan tus productos en el punto de venta. Diseños atractivos y funcionales.' },
        { id: 42, name: 'Exhibidor', image: require('../../assets/gondola.webp'), categoria: ['MaterialPop'], descripcion: 'Resalta tus productos con exhibidores personalizados. Funcionalidad y marca en un solo elemento.' },
        { id: 43, name: 'Góndola', image: require('../../assets/gondola.webp'), categoria: ['MaterialPop'], descripcion: 'Optimiza espacios de venta y aumenta la visibilidad de tus productos con góndolas personalizadas.' }
    ];

    const categories = [
        { id: 'todos', label: 'all_products', icon: 'fa-layer-group' },
        { id: 'Editorial', label: 'categories.Editorial', icon: 'fa-book' },
        { id: 'Publicidad', label: 'categories.Publicidad', icon: 'fa-bullhorn' },
        { id: 'Empaque', label: 'categories.Empaque', icon: 'fa-box-open' },
        { id: 'Corporativo', label: 'categories.Corporativo', icon: 'fa-briefcase' },
        { id: 'Publicidad Exterior', label: 'categories.Publicidad Exterior', icon: 'fa-map-signs' },
        { id: 'MaterialPop', label: 'categories.MaterialPop', icon: 'fa-tags' }
    ];

    const filteredProducts = selectedCategory === "todos"
    ? products.filter(product => product.id > 6)
    : products.filter(product => product.id > 6 && product.categoria.includes(selectedCategory));

    const { t } = useTranslation();

    return (
        <div className="modern-soluciones-page">
            <header className="soluciones-hero">
                <h1>Nuestras <span>Soluciones</span></h1>
                <p>Explora nuestro catálogo completo de productos y descubre cómo podemos materializar tus ideas con la más alta calidad.</p>
            </header>

            <nav className="modern-filters">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(cat.id)}
                    >
                        <i className={`fa-solid ${cat.icon}`}></i> {t(cat.label)}
                    </button>
                ))}
            </nav>

            <main className="soluciones-grid">
                {filteredProducts.map(product => (
                    <div key={product.id} className="solucion-card">
                        <img src={product.image} alt={product.name} />
                        <div className="solucion-title-static">{t(`products.${product.name}.name`, product.name)}</div>
                        <div className="solucion-overlay">
                            <h3>{t(`products.${product.name}.name`, product.name)}</h3>
                            <p>{t(`products.${product.descripcion}.desc`, product.descripcion)}</p>
                        </div>
                    </div>
                ))}
            </main> 
        </div>
    );
}

export default Soluciones;
