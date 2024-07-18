import React from "react";
import DoctorsCarousel from "./DoctorCarousel";

const DoctorsContainer = () => {

  return (
    <div className="professionals-container">
      <div className="our-professionals-caption">
        <h5>Trusted Health Professionals</h5>
        <h3>Our Professionals</h3>
      </div>
      <DoctorsCarousel />
    </div>
  );
};

export default DoctorsContainer;
