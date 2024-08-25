import React from "react";
import CaptionUnderline from "./CaptionUnderline";

const WelcomeSection = () => {
    return (
        <div className="welcome-section">
            <div className="welcome-section-caption">
                <h5>Welcome to OAUTHC</h5>
                <h3>Your Quality Healthcare is Guaranteed Here</h3>
                <p>
                    We are a leading healthcare institution committed to delivering quality healthcare 
                    to Nigerians, unwavering in using industry standard methodlogies to produce highly 
                    competent health professionals, and actively contributing to build a healthier community. 
                </p>
            </div>
            <div className="welcome-section-poster">
                <CaptionUnderline />
            </div>
        </div>
    )
};

export default WelcomeSection;