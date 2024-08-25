import React from "react";

export const HealthText = [
    {
        textTitle: "Comprehensive and Personalized Care",
        text: "Offering a full range of medical services across specialties, including surgery, pediatrics, and radiology. Our skilled team delivers exceptional patient care, utilizing modern technology and compassionate support for your health needs."
    }, 
    {
        textTitle: "State-of-the-Art Facilities", 
        text: "Equipped with cutting-edge medical equipment and technology, our hospital ensures accurate diagnoses and effective treatments. From routine check-ups to complex procedures, we prioritize your well-being and strive for excellence in every aspect of care. Trust us to be your partner in health, providing comprehensive services tailored to your individual needs."
    }
];

const HealthServiceText = () => {
    return (
        <div className="health-service-text">
            {HealthText.map((item, index) => (
                <div key={index}>
                    <span>{item.textTitle} </span>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    );
};

export default HealthServiceText;