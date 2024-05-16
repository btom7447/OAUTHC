import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
    return (
        <div className="hero-carousel">
            <Splide 
                options={{
                    type: 'loop',
                    autoplay: true,
                    interval: 4000,
                    pauseOnHover: true,
                    arrows: false,
                    pagination: false,
                }}
            >
                <SplideSlide>
                    <div className="hero-carousel-one">
                        <Link to="/services">
                            <button type="button">
                                Our Services
                            </button>
                        </Link>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="hero-carousel-two">
                        <Link to="/about">
                            <button type="button">
                                About Us
                            </button>
                        </Link>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default HeroCarousel;
