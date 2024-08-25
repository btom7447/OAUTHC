import React from "react";
import FilterCarousel from "./FilterCarousel";

const DepartmentDoctorsContainer = ({ departmentName }) => {
  return (
    <div className="professionals-container">
      <div className="our-professionals-caption">
        <h5>Trusted Health Professionals</h5>
        <h3>Our Professionals</h3>
      </div>
      <FilterCarousel departmentName={departmentName} />
    </div>
  );
};

export default DepartmentDoctorsContainer;