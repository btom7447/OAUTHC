import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/home/about';

const OAUTHCHistory = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHistoryData = async () => {
            try {
                const response = await fetch(BASE_URL);
                const result = await response.json();

                if (result.success && result.data) {
                    setTitle(result.data.title || ""); // Default to empty string if null
                    setText(result.data.text || ""); // Default to empty string if null
                } else {
                    throw new Error(result.message || 'Failed to retrieve data');
                }
            } catch (error) {
                console.error("Error fetching history data:", error);
                // Optionally set an error state to display an error message
            } finally {
                setLoading(false);
            }
        };

        fetchHistoryData();
    }, []);

    if (loading) {
        return (
            <div className="loading-spinner loading">
                <ClipLoader color="#005046" size={100} />
            </div>
        );
    }

    // Split the text into paragraphs by double newlines
    const paragraphs = text.split(/\n\s*\n/);

    return (
        <div className="oauthc-history">
            <h6>{title}</h6>
            {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
};

export default OAUTHCHistory;