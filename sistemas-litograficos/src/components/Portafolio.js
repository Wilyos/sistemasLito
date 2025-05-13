import React from 'react';
import Slider from 'react-slick';
import '../App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portafolio=()=> {

    const products = [
        { id: 1, name: 'Editorial', image: require('../assets/cartilla.webp') },
        { id: 2, name: 'Publicomerciales', image: require('../assets/afiche.webp') },
        { id: 3, name: 'Packaging', image: require('../assets/empaques.webp') },
        { id: 4, name: 'Corporativa', image: require('../assets/corporativo.webp') },
        { id: 5, name: 'Publicidad Exterior', image: require('../assets/publicidadEx.webp') },
        { id: 6, name: 'Material P.O.P', image: require('../assets/souvenirs.webp') }
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
             <h2>Soluciones</h2>
            <Slider {...settings}>
                {products.map(product => (
                    <div key={product.id} className="portafolio-card">
                        <img src={product.image} alt={product.name} className="portafolio-image" />
                        <h3>{product.name}</h3>
                    </div>
                ))}
            </Slider>
       
        </div>
    );
}

export default Portafolio;