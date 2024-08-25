import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide'; 
import TestimonialCarouselItem from "./TestimonialCarouselItem";

function TestimonialCarousel() {
    const testimonialItems = [
        { 
            text: 'OAUTHC Hospital is dedicated to providing top-notch healthcare services, leveraging state-of-the-art medical technology to deliver innovative solutions, and actively engaging with the community to promote health and well-being.',
            name: 'Dolapo H.', 
            rating: 4.5
        },
        { 
            text: 'As a premier healthcare institution, OAUTHC Hospital is committed to delivering high-quality patient care, utilizing evidence-based medical practices to ensure optimal outcomes, and actively participating in medical research to advance healthcare knowledge.',
            name: 'Ella Thompson', 
            rating: 5
        },
        { 
            text: 'OAUTHC Hospital focuses on providing exceptional medical services, employing skilled healthcare professionals who use industry-standard methodologies to deliver compassionate care, and actively collaborating with stakeholders to improve healthcare access and delivery.',
            name: 'James M.', 
            rating: 4 
        },
        { 
            text: 'At OAUTHC Hospital, we are dedicated to promoting health and wellness, employing experts in various medical specialties to provide comprehensive care, and actively engaging with the community to address healthcare challenges and promote preventive measures.',
            name: 'Danielle Bryant', 
            rating: 4.5
        }
    ];

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
            {testimonialItems.map((item, index) => (
                <SplideSlide key={index}>
                    <TestimonialCarouselItem 
                        text={item.text} 
                        name={item.name} 
                        rating={item.rating} 
                    />
                </SplideSlide>
            ))}
        </Splide>
        </div>
    );
}
export default TestimonialCarousel;