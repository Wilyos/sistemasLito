// File: src/components/Carousel.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}

const Carousel=()=> {

  const width = useWindowWidth();

  const bannersDesktop = [
    require('../assets/banner1.webp'),
    require('../assets/banner2.webp'),
  ];

  const bannersMobile = [
    require('../assets/banner-movil.jpg'),
    require('../assets/banner-movil.jpg'),
  ];

  const banners = width < 768 ? bannersMobile : bannersDesktop

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