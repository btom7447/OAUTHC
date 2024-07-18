import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const ResearchEthicsCarousel = () => {
    return(
        <div className="research-carousel">
            <Splide 
                options={{
                    type: 'loop',
                    autoplay: true,
                    interval: 4000,
                    pauseOnHover: true,
                    arrows: false,
                    pagination: true,
                }}
            >
                <SplideSlide>
                    <div className="research-carousel-one"></div>
                </SplideSlide>
                <SplideSlide>
                    <div className="research-carousel-two"></div>
                </SplideSlide>
                <SplideSlide>
                    <div className="research-carousel-three"></div>
                </SplideSlide>
            </Splide>
            <div className="research-button">
                <h4>Explore options to join a clinical trial</h4>
            </div>
        </div>
    )
};

export default ResearchEthicsCarousel;