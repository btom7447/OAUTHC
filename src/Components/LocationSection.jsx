import React, { useContext } from "react";
import LocationsBox from "./LocationsBox";
import { DepartmentContext } from "../Components/DepartmentProvider";

const LocationsSection = () => {
    const { units } = useContext(DepartmentContext); // Use the context

    return (
        <div className="locations-section">
            <div className="locations-caption">
                <h5>Places We Can Be Found</h5>
                <h3>Locations</h3>
            </div>
            <div className="locations-container">
                {units.map((unit, index) => (
                    <LocationsBox
                        key={index}
                        unitImage={unit.unitImage}
                        unitName={unit.unitName}
                    />
                ))}
            </div>
        </div>
    );
};

export default LocationsSection;