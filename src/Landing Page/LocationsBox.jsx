import React from "react";
import { Link } from "react-router-dom";

const LocationsBox = ({ locationPicture, locationName }) => {
  return (
    <Link to="/About/locations">
      <div className="locations-box">
          <img src={locationPicture} alt={locationName} /> 
          <h5>{locationName}</h5>
      </div>
    </Link>

  );
};

export default LocationsBox;
