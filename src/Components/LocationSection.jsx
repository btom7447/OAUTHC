import React, { useContext } from "react";
import LocationsBox from "./LocationsBox";
import { DepartmentContext } from "../Components/DepartmentProvider";
import { ClipLoader } from "react-spinners";

const LocationsSection = () => {
    const { units } = useContext(DepartmentContext);

    if (!units || units.length === 0) {
        return (
            <div className="loading-spinner loading">
                <ClipLoader color="#005046" size={100} />
            </div>
        );
    }

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
