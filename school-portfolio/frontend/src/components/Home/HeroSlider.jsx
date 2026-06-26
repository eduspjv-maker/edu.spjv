import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
  };

  const slides = [
    {
      image: '/hero1.jpg',
      title: 'Welcome to Elite School',
      subtitle: 'Excellence in Education Since 1999',
      buttonText: 'Learn More',
      buttonLink: '/about',
    },
    {
      image: '/hero2.jpg',
      title: 'Innovative Learning',
      subtitle: 'Empowering Students for the Future',
      buttonText: 'Explore Academics',
      buttonLink: '/academics',
    },
    {
      image: '/hero3.jpg',
      title: 'Join Our Family',
      subtitle: 'Admissions Open for 2024-25',
      buttonText: 'Contact Us',
      buttonLink: '/contact',
    },
  ];

  return (
    <div className="relative h-screen">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative h-full flex items-center justify-center text-center px-4">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">{slide.subtitle}</p>
                <Link
                  to={slide.buttonLink}
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/80 transition-all duration-300 hover:scale-105"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;