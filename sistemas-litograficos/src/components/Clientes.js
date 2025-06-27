import React from "react";
import '../App.css';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Clientes= ()=> {
    const { t } = useTranslation();

    const clientes = [
        { id: 1, name: 'Autolarte', image: require('../assets/AUTOLARTEv2.png') },
        { id: 2, name: 'Alcaldia-Bello', image: require('../assets/ALCALDIA DE BELLOv2.png') },
        { id: 3, name: 'cats', image: require('../assets/CATSv2.png') },
        { id: 4, name: 'Fedean', image: require('../assets/FEDEANv2.png') },
        { id: 5, name: 'Pizza_Doble_Pizza', image: require('../assets/PIZZA DOBLE PIZZAv2.png') },
        { id: 6, name: 'Tiendas_D1', image: require('../assets/D1v2.png') },
        { id: 7, name: 'Universidad_de_Antioquia', image: require('../assets/UDEAv2.png') },
        { id: 8, name: 'CA Consultores', image: require('../assets/CACONSULTORESv2.png') },
        { id: 9, name: 'Comfenalco', image: require('../assets/COMFENALCOv2.png') },
        { id: 10, name: 'drogeria-todo-drogas', image: require('../assets/DROGUERIA TODO DROGASv2.png') },
        { id: 11, name: 'INSTITUTO-FERRINI', image: require('../assets/INSTITU FERRINIv2.png') },
        { id: 12, name: 'LINEA-E-METRO', image: require('../assets/LINEA E METROv2.png') },
        { id: 13, name: 'LUMA', image: require('../assets/LUMAv2.png') },
        { id: 14, name: 'OSANA', image: require('../assets/OSANAv2.png') },
        { id: 15, name: 'PEGAKLEIN', image: require('../assets/PEGAKLEINv2.png') },
        { id: 16, name: 'PINVIACRIL', image: require('../assets/PINVIACRILv2.png') },
        { id: 17, name: 'PIZZA-PREMIUM', image: require('../assets/PIZZA PREMIUMv2.png') },
        { id: 18, name: 'rionegro', image: require('../assets/ALCALDIA DE RIONEGROv2.png') },
        { id: 19, name: 'TECNIDECOR', image: require('../assets/TECNIDECORv2.png') },
        { id: 20, name: 'TICKETXPRESS', image: require('../assets/TICKETXPRESSv2.png') }
    ];

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: "linear", 
    pauseOnHover: false, 
        responsive: [
            {
              breakpoint: 1474,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 980,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
    };

    return (
        <div className="clientes">
            <div className="clientes-overlay"></div>
            <h2>{t('clientes.title')}</h2>
            <p>{t('clientes.descripcion')}</p>
            <Slider {...settings}>
                {clientes.map(cliente => (
                    <div key={cliente.id} className="clientes-card">
                        <img src={cliente.image} alt={cliente.name} className="clientes-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Clientes;

    
