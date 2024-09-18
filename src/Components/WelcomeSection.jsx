import React, { useState, useEffect } from "react";
import CaptionUnderline from "./CaptionUnderline";
import { toast, ToastContainer } from 'react-toastify';

const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api';

const WelcomeSection = () => {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [text, setText] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        const fetchWelcomeData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/home/welcome`);
                const result = await response.json();

                if (response.ok && result.success) {
                    const data = result.data;
                    setTitle(data.title);
                    setSubtitle(data.subtitle);
                    setText(data.text);
                    setImage(data.image);
                } else {
                    throw new Error(result.message || "Failed to load welcome section data");
                }
            } catch (error) {
                console.error("Error fetching welcome section data:", error);
                toast.error("Failed to load welcome section data");
            }
        };

        fetchWelcomeData();
    }, []);

    return (
        <div className="welcome-section">
            <ToastContainer />
            <div className="welcome-section-caption">
                <h5>{title}</h5>
                <h3>{subtitle}</h3>
                <p>{text}</p>
            </div>
            <div className="welcome-section-poster">
                <img src={image} alt={title} />
                <CaptionUnderline />
            </div>
        </div>
    );
};

export default WelcomeSection;