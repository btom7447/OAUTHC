import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { toast, ToastContainer } from 'react-toastify';

const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/home';

const AnnouncementCarousel = () => {
    const [announcements, setAnnouncements] = useState([]);

    // Fetch the announcement data from the server
    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                const response = await fetch(`${BASE_URL}/announcement`);
                const result = await response.json();

                if (response.ok && result.success) {
                    setAnnouncements(result.data);
                } else {
                    throw new Error(result.message || 'Failed to fetch announcements');
                }
            } catch (error) {
                console.error("Error fetching announcements:", error);
                toast.error("Failed to load announcements");
            }
        };

        fetchAnnouncements();
    }, []);

    return (
        <div className="announcement-carousel">
            <ToastContainer />
            <Splide 
                options={{
                    type: 'slide',
                    autoplay: false,
                    arrows: true,
                    pagination: true,
                }}
            >
                {announcements.map((announcement) => (
                    <SplideSlide key={announcement.id}>
                        <div className="announcement-box">
                            <h5>{announcement.name}</h5>
                            <p>{announcement.content}</p>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default AnnouncementCarousel;