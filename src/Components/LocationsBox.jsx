import React from "react";
import { Link } from "react-router-dom";

const LocationsBox = ({ unitImage, unitName}) => {
  return (
    <Link to="/about/locations" className="locations-box-link">
      <div className="locations-box">
        <img src={unitImage} alt={unitName} className="locations-box-image" /> 
        <h5 className="locations-box-name">{unitName}</h5>
      </div>
    </Link>
  );
};

export default LocationsBox;
