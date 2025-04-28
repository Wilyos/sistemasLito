import React from "react";
import '../../App.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function Clientes() {
    
    const clientes = [
        { id: 1, name: 'Arrendamientos', image: require('../../assets/Arrendamientos_Promobienes.png') },
        { id: 2, name: 'Comfenalco', image: require('../../assets/Comfenalco.png') },
        { id: 3, name: 'cats', image: require('../../assets/Cats_Boston.png') },
        { id: 4, name: 'Fedean', image: require('../../assets/Fedean.png') },
        { id: 5, name: 'Pizza_Doble_Pizza', image: require('../../assets/Pizza_Doble_Pizza.png') },
        { id: 6, name: 'Tiendas_D1', image: require('../../assets/Tiendas_D1.jpg') },
        { id: 7, name: 'Universidad_de_Antioquia', image: require('../assets/Universidad_de_Antioquia.jpg') }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 2500,
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
            <h2>Clientes</h2>
            <Slider {...settings}>
                {clientes.map(cliente => (
                    <div key={cliente.id} className="clientes-card">
                        <img src={cliente.image} alt={cliente.name} className="clientes-image" />
                        <h3>{cliente.name}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

    
