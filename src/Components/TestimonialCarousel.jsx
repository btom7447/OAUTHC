import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide'; 
import TestimonialCarouselItem from "./TestimonialCarouselItem";
import { useTestimonials } from "./DepartmentProvider";

function TestimonialCarousel() {

    const testimonials = useTestimonials();

    const options = {
        type: 'slide',
        rewind: false,
        width: '100%',
        height: '100%',
        perPage: 1,
    };

    return (
        <div className="testimonial-container">
            <div className="testimonial-caption">
                <h5>What People Say About Us</h5>
                <h3>Testimonials</h3>
            </div>
            <Splide options={options}>
            {testimonials && testimonials.map((item, index) => (
                <SplideSlide key={index}>
                    <TestimonialCarouselItem 
                        text={item.message} 
                        name={item.name} 
                        rating={item.starRatings} 
                    />
                </SplideSlide>
            ))}
        </Splide>
        </div>
    );
}
export default TestimonialCarousel;