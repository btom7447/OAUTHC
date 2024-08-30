import React from "react";
import Creatable from 'react-select/creatable';

const DepartmentsDetailsInputs = ({
    formData, 
    handleInputChange, 
    handleSelectChange, 
    defaultFacilitiesOptions, 
    defaultServicesOptions 
}) => {
    return (
        <div className="details-inputs">
            {/* DEPARTMENT NAME */}
            <label>
                Department Name:
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
            {/* TEXT */}
            <label>
                Text:
                <textarea
                    name="text"
                    value={formData.text || ''}
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
                    placeholder="Add and select facilities"
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
            {/* SERVICES OFFERED */}
            <label>
                Services:
                <Creatable
                    isMulti
                    value={formData.services || []}
                    onChange={(newValue) => handleSelectChange(newValue, 'services')}
                    options={defaultServicesOptions}
                    placeholder="Add and select services"
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
            {/* CONTACT INFORMATION */}
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

export default DepartmentsDetailsInputs;