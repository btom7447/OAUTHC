import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { ClipLoader } from "react-spinners";

const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/home/culture';

const PeopleCulture = () => {
    const [cultureData, setCultureData] = useState({
        title: "",
        subtitle: "",
        text: ""
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCultureData = async () => {
            try {
                const response = await fetch(BASE_URL);
                const result = await response.json();

                if (result.success && result.data) {
                    setCultureData({
                        title: result.data.title || "",
                        subtitle: result.data.subtitle || "",
                        text: result.data.text || ""
                    });
                } else {
                    throw new Error(result.message || 'Failed to retrieve data');
                }
            } catch (error) {
                console.error("Error fetching culture data:", error);
                toast.error("Failed to load culture section");
            } finally {
                setLoading(false);
            }
        };

        fetchCultureData();
    }, []);

    if (loading) {
        return <div className="loading-spinner loading">
              <ClipLoader color="#005046" size={100} />
            </div>; 
    }

    return (
        <div className="people-culture">
          <ToastContainer />
            <div className="people-culture-text">
              <h5>{cultureData.subtitle}</h5>
              <h4>{cultureData.title}</h4>
              <p>{cultureData.text}</p>
            </div>
            <div className="people-culture-poster"></div>
        </div>
    );
};

export default PeopleCulture;
