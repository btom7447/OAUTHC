import React from "react";
import AnnouncementCarousel from './AnnouncementCarousel';
import CaptionUnderline from './CaptionUnderline';

const Announcement = () => {
    return (
        <div className="announcement-container">
            <div className="announcement-caption">
                <h3>Annoucement</h3>
                <CaptionUnderline />
            </div>
            <AnnouncementCarousel />
        </div>
    )
};

export default Announcement;