import React from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import '../App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portafolio=()=> {
  const { t } = useTranslation();

    const products = [
        { id: 1, name: 'Editorial', image: require('../assets/standar-banner-editorial.png') },
        { id: 2, name: 'Publicidad', image: require('../assets/standar-banner-publicidad.png') },
        { id: 3, name: 'Empaques', image: require('../assets/standar-banner-empaques.png') },
        { id: 4, name: 'Corporativa', image: require('../assets/corporativasPortafolio.jpg') },
        { id: 5, name: 'Publicidad Exterior', image: require('../assets/standar-banner-valla.png')},
        { id: 6, name: 'Material P.O.P', image: require('../assets/popPortafolio.jpg') }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
              breakpoint: 1474,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 980,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      

    return (
        <div className="portafolio">
             <h2>{t('portfolio.title')}</h2>
            <Slider {...settings}>
                {products.map(product => (
                    <div key={product.id} className="portafolio-card">
                        <img src={product.image} alt={product.name} className="portafolio-image" />
                        <h3>{t(`portfolio.${product.name}`)}</h3>
                    </div>
                ))}
            </Slider>
       
        </div>
    );
}

export default Portafolio;