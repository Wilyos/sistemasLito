// File: src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import '../App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel=()=> {
  const banners = [
    require('../assets/banner1.webp'),
    require('../assets/banner2.webp'),
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <img src={banner} alt={`Banner ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;