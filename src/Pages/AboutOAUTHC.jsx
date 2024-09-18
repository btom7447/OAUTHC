import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { CurrentSectionProvider } from '../Components/CurrentSectionContent';
import PageCaption from '../Components/PageCaption';
import PeopleCulture from '../Components/PeopleCulture';
import VisionMissionGoal from '../Components/VisionMissionGoal';
import SectionWrapper from '../Components/SectionWrapper';
import GetInTouch from '../Components/GetInTouch';
import OurValues from '../Components/OurValues';
import TeamMembersContainer from '../Components/TeamMembersContainer';
import OAUTHCHistory from '../Components/OAUTHCHistory';
import { ClipLoader } from 'react-spinners';

const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/home/who-we-are';

const AboutOAUTHC = () => {
    const [whoWeAreData, setWhoWeAreData] = useState({
        title: "",
        subtitle: "",
        text: "",
        image: ""
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWhoWeAreData = async () => {
            try {
                const response = await fetch(BASE_URL);
                const result = await response.json();

                if (result.success && result.data) {
                    setWhoWeAreData({
                        title: result.data.title || "",
                        subtitle: result.data.subtitle || "",
                        text: result.data.text || "",
                        image: result.data.image || ""
                    });
                } else {
                    throw new Error(result.message || 'Failed to retrieve data');
                }
            } catch (error) {
                console.error("Error fetching Who We Are data:", error);
                toast.error("Failed to load Who We Are section");
            } finally {
                setLoading(false);
            }
        };

        fetchWhoWeAreData();
    }, []);

    if (loading) {
        return <div className="loading-spinner loading">
                    <ClipLoader color="#005046" size={100} />
                </div>
    }

    return (
        <CurrentSectionProvider>
            <ToastContainer />
            <PageCaption />
            <SectionWrapper sectionName="About OAUTHC">
                <div className="about-oauthc">
                    <OAUTHCHistory />
                    <div className="about-poster-text">
                        <div className="about-oauthc-poster">
                            {whoWeAreData.image && (
                                <img 
                                    src={whoWeAreData.image} 
                                    alt={whoWeAreData.title} 
                                />
                            )}
                        </div>
                        <div className="about-oauthc-text">
                            <h5>{whoWeAreData.title}</h5>
                            <h4>{whoWeAreData.subtitle}</h4> 
                            {whoWeAreData.text.split('\r\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                    <VisionMissionGoal />
                    <TeamMembersContainer />
                    <PeopleCulture />
                    <OurValues />
                    <GetInTouch />
                </div>
            </SectionWrapper>
        </CurrentSectionProvider>
    );
};

export default AboutOAUTHC;