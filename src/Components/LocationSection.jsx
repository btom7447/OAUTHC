import React from "react";
import LocationsBox from "./LocationsBox"; 
import { unitData } from "../Pages/Location";



const LocationsSection = () => {
  return (
    <div className="locations-section">
      <div className="locations-caption">
        <h5>Places We can be Found</h5>
        <h3>Locations</h3>
      </div>
      <div className="locations-container">
        {unitData.map((unit, index) => (
          <LocationsBox
            key={index}
            locationPicture={unit.unitPoster}
            locationName={unit.unitName}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationsSection;
