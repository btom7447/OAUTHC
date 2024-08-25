import React from "react";

const Values = ({ values }) => {
    return (
        <div className="our-values-section">
            {values.map(({ title, text, icon }, index) => (
                <div key={index} className="our-values">
                    <div className="icon">
                        <img src={icon} alt={`${title} icon`} />
                    </div>
                    <h5>{title}</h5>
                    <p>{text}</p>
                </div>
            ))}
        </div>
    );
};

export default Values;
