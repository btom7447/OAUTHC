import React from "react";
import Creatable from 'react-select/creatable';

const DoctorsDetailsInput = ({
    formData,
    handleInputChange,
    handleSelectChange,
    genderOptions,
    defaultDepartmentsOptions,
    defaultQualificationsOptions,
    defaultSpecialtiesOptions,
    defaultUnitsOptions,
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
            {/* GENDER */}
            <label>
                Gender:
                <Creatable
                    isMulti
                    value={formData.gender || []}
                    onChange={(newValue) => handleSelectChange(newValue, 'gender')}
                    options={genderOptions}
                    placeholder="Choose Gender"
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
           {/* ACCOMPLISHMENTS TEXT */}
           <label>
                Accomplishments:
                <textarea
                    name="accomplishments"
                    value={formData.accomplishments || ''}
                    onChange={handleInputChange}
                ></textarea>
            </label>
            {/* DEPARTMENTS */}
            <label>
                Departments:
                <Creatable
                    isMulti
                    value={departments}
                    onChange={(newValue) => handleSelectChange(newValue, 'departments')}
                    options={defaultDepartmentsOptions}
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
            {/* UNITS */}
            <label>
                Units:
                <Creatable
                    isMulti
                    value={units}
                    onChange={(newValue) => handleSelectChange(newValue, 'units')}
                    options={defaultUnitsOptions}
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
            {/* SPECIALTIES */}
            <label>
                Specialties:
                <Creatable
                    isMulti
                    value={specialties}
                    onChange={(newValue) => handleSelectChange(newValue, 'specialties')}
                    options={defaultSpecialtiesOptions}
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
            {/* QUALIFICATIONS */}
            <label>
                Qualifications:
                <Creatable
                    isMulti
                    value={qualifications}
                    onChange={(newValue) => handleSelectChange(newValue, 'qualifications')}
                    options={defaultQualificationsOptions}
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
            {/* SOCIAL LINKS */}
            <p>Social links</p>
            <div className="social-links">
                <label>
                    <input
                        type="text"
                        name="facebook"
                        value={formData.facebook || ''}
                        onChange={handleInputChange}
                        placeholder="https://www.facebook.com/"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="linkedIn"
                        value={formData.linkedIn || ''}
                        onChange={handleInputChange}
                        placeholder="https://www.linkedin.com/"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="twitter"
                        value={formData.twitter || ''}
                        onChange={handleInputChange}
                        placeholder="https://www.twitter.com/"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="instagram"
                        value={formData.instagram || ''}
                        onChange={handleInputChange}
                        placeholder="https://www.instagram.com/"
                    />
                </label>
            </div>
        </div>
    );
};

export default DoctorsDetailsInput;