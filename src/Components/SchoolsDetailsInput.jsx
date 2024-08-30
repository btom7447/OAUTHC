import React from "react";
import Creatable from 'react-select/creatable';

const SchoolDetailsInput = ({
    formData, 
    handleInputChange, 
    handleSelectChange, 
    defaultFacilitiesOptions,
    defaultFacultiesOptions,
}) => {
    return (
        <div className="details-inputs">
            {/* SCHOOL NAME */}
            <label>
                School Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name || ''}
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
            {/* DESCRIPTION */}
            <label>
                Schools Description:
                <textarea
                    name="description"
                    value={formData.description || ''}
                    onChange={handleInputChange}
                ></textarea>
            </label>
            {/* OVERVIEW TEXT */}
            <label>
                Facilities Overview:
                <textarea
                    name="facilitiesText"
                    value={formData.facilitiesText || ''}
                    onChange={handleInputChange}
                ></textarea>
            </label>
            {/* FACILITIES */}
            <label>
                Facilities:
                <Creatable
                    isMulti
                    value={formData.facilities || []}
                    onChange={(newValue) => handleSelectChange(newValue, 'facilities')}
                    options={defaultFacilitiesOptions}
                    className="admin-select"
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
            {/* FACULTIES */}
            <label>
                Faculties:
                <Creatable
                    isMulti
                    value={formData.faculties || []}
                    onChange={(newValue) => handleSelectChange(newValue, 'faculties')}
                    options={defaultFacultiesOptions}
                    className="admin-select"
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
            
        </div>
    );
};

export default SchoolDetailsInput;
