import React from "react";
import '../App.css';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Clientes= ()=> {
    const { t } = useTranslation();

    const clientes = [
        { id: 1, name: 'Arrendamientos', image: require('../assets/Arremdamientos_Promobienes.png') },
        { id: 2, name: 'Comfenalco', image: require('../assets/Comfenalco.png') },
        { id: 3, name: 'cats', image: require('../assets/Cats_Boston.png') },
        { id: 4, name: 'Fedean', image: require('../assets/Fedean.png') },
        { id: 5, name: 'Pizza_Doble_Pizza', image: require('../assets/Pizza_Doble_Pizza.png') },
        { id: 6, name: 'Tiendas_D1', image: require('../assets/Tiendas_D1.png') },
        { id: 7, name: 'Universidad_de_Antioquia', image: require('../assets/Universidad_de_Antioquia.png') }
    ];

    const settings = {
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

    
