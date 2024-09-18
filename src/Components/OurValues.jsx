import React, { useState, useEffect } from "react";
import Values from "./Values";
import { toast, ToastContainer } from 'react-toastify';
import { ClipLoader } from "react-spinners";

const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api';

const OurValues = () => {
    const [values, setValues] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchValues = async () => {
            try {
                const response = await fetch(`${BASE_URL}/home/mission-goals`);
                const result = await response.json();

                if (result.success && result.data) {
                    const { excellence, professionalism, growth, integrity } = result.data;

                    // Prepare the values array dynamically
                    const dynamicValues = [
                        {
                            title: "Excellence",
                            text: excellence,
                            icon: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/public/safe-icon.png?raw=true",
                        },
                        {
                            title: "Professionalism",
                            text: professionalism,
                            icon: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/public/simple-icon.png?raw=true",
                        },
                        {
                            title: "Growth",
                            text: growth,
                            icon: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/public/clean-icon.png?raw=true",
                        },
                        {
                            title: "Integrity",
                            text: integrity,
                            icon: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/public/people-icon.png?raw=true",
                        },
                    ];

                    setValues(dynamicValues);
                    setLoading(false);
                } else {
                    throw new Error(result.message || 'Failed to retrieve data');
                }
            } catch (error) {
                console.error("Error fetching our values data:", error);
                setError("Failed to load Our Values data.");
                setLoading(false);
                toast.error("Failed to load Our Values data.");
            }
        };

        fetchValues();
    }, []);

    return (
        <div className="our-values-container">
            <ToastContainer />
            <div className="our-values-caption">
                <h6>Our Values</h6>
            </div>
            {loading ? (
                <div className="loading-spinner loading">
                    <ClipLoader color="#005046" size={100} />
                </div>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <Values values={values} />
            )}
        </div>
    );
};

export default OurValues;