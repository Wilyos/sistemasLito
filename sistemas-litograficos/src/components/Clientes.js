import React from "react";
import '../App.css';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Clientes= ()=> {
    const { t } = useTranslation();

    const clientes = [
        { id: 1, name: 'Autolarte', image: require('../assets/AUTOLARTE.png') },
        { id: 2, name: 'Alcaldia-Bello', image: require('../assets/bello.png') },
        { id: 3, name: 'cats', image: require('../assets/Cats_Boston2.png') },
        { id: 4, name: 'Fedean', image: require('../assets/AUTOLARTE.png') },
        { id: 5, name: 'Pizza_Doble_Pizza', image: require('../assets/Pizza_Doble_Pizza.png') },
        { id: 6, name: 'Tiendas_D1', image: require('../assets/D1.png') },
        { id: 7, name: 'Universidad_de_Antioquia', image: require('../assets/UDEA.png') },
        { id: 8, name: 'CA Consultores', image: require('../assets/CA-CONSULTORES.png') },
        { id: 9, name: 'Comfenalco', image: require('../assets/COMFENALCO.png') },
        { id: 10, name: 'drogeria-todo-drogas', image: require('../assets/DROGUERIA-TODO-DROGAS.png') },
        { id: 11, name: 'INSTITUTO-FERRINI', image: require('../assets/INSTITU-FERRINI.png') },
        { id: 12, name: 'LINEA-E-METRO', image: require('../assets/LINEA-E-METRO.png') },
        { id: 13, name: 'LUMA', image: require('../assets/LUMA.png') },
        { id: 14, name: 'OSANA', image: require('../assets/OSANA.png') },
        { id: 15, name: 'PEGAKLEIN', image: require('../assets/PEGAKLEIN.png') },
        { id: 16, name: 'PINVIACRIL', image: require('../assets/PINVIACRIL.png') },
        { id: 17, name: 'PIZZA-PREMIUM', image: require('../assets/PIZZA-PREMIUM.png') },
        { id: 18, name: 'rionegro', image: require('../assets/rionegro.png') },
        { id: 19, name: 'TECNIDECOR', image: require('../assets/TECNIDECOR.png') },
        { id: 20, name: 'TICKETXPRESS', image: require('../assets/TICKETXPRESS.png') }
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

    
