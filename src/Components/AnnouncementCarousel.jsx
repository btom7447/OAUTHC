import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const AnnouncementData = [
    {
        title: 'Our Commitment to Quality Healthcare',
        content: `We are a leading healthcare institution committed to delivering quality healthcare to our patients,
        unwavering in using industry standard methodologies to produce highly competent health professionals,
        and actively contributing to build a healthier community.`,
    },
    {
        title: 'New Specialized Pediatric Unit Now Open!',
        content: `We are thrilled to announce the opening of our brand-new Pediatric care for our youngest patients. 
        Equipped with state-of-the-art facilities and staffed by experienced pediatric specialists, 
        our unit is committed to ensuring the health and well-being of children in our community. 
        Learn more about our pediatric services and schedule appointments today!`,
    },
    {
        title: 'Now Offering Virtual Consultations',
        content: `We understand that your health needs may not always align with your schedule. 
        That's why we're excited to introduce virtual consultations, 
        allowing you to connect with our healthcare professionals from the comfort of your home. 
        Whether you have questions about a recent diagnosis or need medical advice, 
        our virtual platform makes it convenient to receive the care you deserve. 
        Schedule your virtual consultation today!`,
    },
    {
        title: 'Join Us for our Annual Health Fair!',
        content: `Save the date for our upcoming Annual Health Fair, where we will be offering free health screenings, 
        informative seminars, and fun activities for the whole family. 
        Discover ways to improve your health and wellness while enjoying a day filled with educational resources and interactive exhibits. 
        Don't miss out on this opportunity to prioritize your well-being!`,
    },
];

const AnnouncementCarousel = () => {
    return (
        <div className="announcement-carousel">
            <Splide 
                options={{
                    type: 'slide',
                    autoplay: false,
                    arrows: true,
                    pagination: true,
                }}
            >
                {AnnouncementData.map((announcement, index) => (
                    <SplideSlide key={index}>
                        <div className="announcement-box">
                            <h5>{announcement.title}</h5>
                            <p>{announcement.content}</p>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default AnnouncementCarousel;