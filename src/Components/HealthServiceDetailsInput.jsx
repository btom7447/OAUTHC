import React from "react";
import Creatable from 'react-select/creatable';

const HealthServiceDetailsInput = ({
    formData, 
    handleInputChange, 
    handleSelectChange, 
    defaultServicesOptions
}) => {

    const handleTextChange = (e) => {
        const value = e.target.value;
        const textArray = value.split('\n').filter(line => line.trim() !== '');
        handleInputChange({ target: { name: 'text', value: textArray } });
    };
    return (
        <div className="details-inputs">
            {/* SERVICE NAME */}
            <label>
                Service Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name || ''}
                    onChange={handleInputChange}
                />
            </label>
            {/* OVERVIEW TEXT */}
            <label>
                Text:
                <textarea
                    name="text"
                    value={formData.text.join('\n') || ''}
                    onChange={handleTextChange}
                ></textarea>
            </label>
            {/* SERVICES */}
            <label>
                Services:
                <Creatable
                    isMulti
                    value={formData.services || []}
                    onChange={(newValue) => handleSelectChange(newValue, 'services')}
                    options={defaultServicesOptions}
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

export default HealthServiceDetailsInput;
