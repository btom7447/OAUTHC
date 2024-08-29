import React from "react";
import Creatable from 'react-select/creatable';

const DoctorsDetailsInputs = ({
    formData,
    handleInputChange,
    handleSelectChange,
    defaultSpecialtiesOptions,
    defaultDepartmentOptions,
    defaultQualificationsOptions 
}) => {
    const specialties = Array.isArray(formData.specialties) ? formData.specialties : [];
    const departments = Array.isArray(formData.departments) ? formData.departments : [];
    const qualifications = Array.isArray(formData.qualifications) ? formData.qualifications : [];

    const specialtyOptions = defaultSpecialtiesOptions.map(option => ({
        ...option,
        label: option.label,
        value: option.value
    }));

    const qualificationOptions = defaultQualificationsOptions.map(option => ({
        ...option,
        label: option.label,
        value: option.value
    }));

    const departmentOptions = defaultDepartmentOptions.map(option => ({
        ...option,
        label: option.label,
        value: option.value
    }));

    return (
        <div className="details-inputs">
            {/* DOCTOR NAME */}
            <label>
                Doctor Name:
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
            {/* ACCOMPLISHMENTS TEXT */}
            <label>
                Accomplishments:
                <textarea
                    name="accomplishments"
                    value={formData.accomplishments || ''}
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
                    options={specialtyOptions}
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

            {/* QUALIFICATIONS */}
            <label>
                Qualifications:
                <Creatable
                    isMulti
                    value={qualifications}
                    onChange={(newValue) => handleSelectChange(newValue, 'qualifications')}
                    options={qualificationOptions} // Use mapped options
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

            {/* DEPARTMENTS */}
            <label>
                Departments:
                <Creatable
                    isMulti
                    value={departments}
                    onChange={(newValue) => handleSelectChange(newValue, 'departments')}
                    options={departmentOptions}
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

            <p>Social links</p>
            <div className="social-links">
                {/* FACEBOOK */}
                <label>
                    Facebook:
                    <input
                        type="text"
                        name="facebook"
                        value={formData.facebook || ''}
                        onChange={handleInputChange}
                    />
                </label>
            
                {/* LINKEDIN */}
                <label>
                    LinkedIn:
                    <input
                        type="text"
                        name="linkedin"
                        value={formData.linkedIn || ''}
                        onChange={handleInputChange}
                    />
                </label>

                {/* INSTAGRAM */}
                <label>
                    Instagram:
                    <input
                        type="text"
                        name="instagram"
                        value={formData.instagram || ''}
                        onChange={handleInputChange}
                    />
                </label>

                {/* TWITTER */}
                <label>
                    Twitter:
                    <input
                        type="text"
                        name="twitter"
                        value={formData.twitter || ''}
                        onChange={handleInputChange}
                    />
                </label>

                {/* EMAIL */}
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email || ''}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
        </div>
    );
};

export default DoctorsDetailsInputs;
