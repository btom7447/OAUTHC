import React from "react";
import Values from "./Values";

const OurValues = () => {

    const values = [
        {
            title: "Excellence",
            text: "We will not trade excellence in healthcare delivery for anything. This is the fundamental principles that defines everything we do at OAUTHC. Every part of our operations is driven this solemn commitment.",
            icon: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/public/safe-icon.png?raw=true",
        },
        {
            title: "Professionalism",
            text: "We are a patient-oriented health institution and this is why utmost professionalism is crucial to us. We are devoted to serving people and we do that in the most civil and professional way in order to create a memorable healthcare experience.",
            icon: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/public/simple-icon.png?raw=true",
        },
        {
            title: "Growth",
            text: "We are committed to advancing the frontiers of healthcare delivery to create a healthier world for us all. Our healthcare professionals are constantly advancing in knowledge and our mastery of top medical procedurs is constantly growing. We are a growth-focused organization.",
            icon: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/public/clean-icon.png?raw=true",
        },
        {
            title: "Integrity",
            text: "You can trust us. We hold ourselves to the highest standards in keeping our promises to all our stakeholders, especially our patients. We are transparent with our policies,ethical with our practices, and secure with our data management.",
            icon: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/public/people-icon.png?raw=true",
        },
    ];
    
    return (
        <div className="our-values-container">
            <div className="our-values-caption">
                <h6>Our Values</h6>
            </div>
            <Values values={values} />
        </div>
    )
};

export default OurValues;