import React from "react";

const LocationsDetailsInputs = ({ formData, handleInputChange }) => {
    return (
        <div className="details-inputs">
            {/* LOCATION NAME */}
            <label>
                Location Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name || ''}
                    onChange={handleInputChange}
                />
            </label>
            {/* ADDRESS */}
            <label>
                Address:
                <textarea
                    name="address"
                    value={formData.address || ''}
                    onChange={handleInputChange}
                ></textarea>
            </label>
            {/* STATE */}
            <label>
                State:
                <input
                    type="text"
                    name="state"
                    value={formData.state || ''}
                    onChange={handleInputChange}
                />
            </label>
        </div>
    );
};

export default LocationsDetailsInputs;
