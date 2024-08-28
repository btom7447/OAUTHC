import React from "react";
import Creatable from 'react-select/creatable';

const DoctorsDetailsInputs = ({ formData, handleInputChange, handleSelectChange, defaultSpecialtiesOptions }) => {
    // Ensure formData.specialties is always an array
    const specialties = Array.isArray(formData.specialties) ? formData.specialties : [];

    return (
        <div className="details-inputs">
            {/* DOCTOR NAME */}
            <label>
                Doctor Name:
                <input
                    type="text"
                    name="title"
                    value={formData.title || ''}
                    onChange={handleInputChange}
                />
            </label>
            {/* OVERVIEW TEXT */}
            <label>
                Overview Text:
                <textarea
                    name="overviewText"
                    value={formData.overviewText || ''}
                    onChange={handleInputChange}
                ></textarea>
            </label>
            {/* SPECIALTIES */}
            <label>
                Specialties:
                <Creatable
                    isMulti
                    value={specialties}
                    onChange={(newValue) => handleSelectChange(newValue, 'specialties')}
                    options={[...defaultSpecialtiesOptions, ...specialties]}
                    placeholder="Add and select specialties"
                    className="react-select-container"
                    classNames={{
                        control: () => 'react-select__control',
                        option: () => 'react-select__option',
                        menu: () => 'react-select__menu',
                        menuList: () => 'react-select__menu-list',
                        multiValue: () => 'react-select__multi-value',
                        multiValueLabel: () => 'react-select__multi-value__label',
                        multiValueRemove: () => 'react-select__multi-value__remove',
                        placeholder: () => 'react-select__placeholder',
                        dropdownIndicator: () => 'react-select__dropdown-indicator',
                    }}
                />
            </label>
            {/* PHONE */}
            <label>
                Phone:
                <input
                    type="text"
                    name="phone"
                    value={formData.phone || ''}
                    onChange={handleInputChange}
                />
            </label>
        </div>
    );
};

export default DoctorsDetailsInputs;
