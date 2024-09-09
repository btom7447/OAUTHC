import React from "react";
import Creatable from 'react-select/creatable';

const DoctorsDetailsInput = ({
    formData,
    handleInputChange,
    handleSelectChange,
    genderOptions,
    defaultDepartmentOptions,
    defaultQualificationsOptions,
    defaultSpecialtiesOptions,
    defaultUnitsOptions,
    defaultClinicDaysOptions,
}) => {
    return (
        <div className="details-inputs">
            {/* DOCTOR NAME */}
            <label>
                Doctor Name:
                <input
                    type="text"
                    name="name"
                    placeholder="Doctor Name ..."
                    value={formData.name || ''}
                    onChange={handleInputChange}
                />
            </label>

            {/* GENDER */}
            <label>
                Gender:
                <Creatable
                    value={formData.gender || []}
                    onChange={(newValue) => handleSelectChange(newValue, 'gender')}
                    options={genderOptions}
                    placeholder="Choose Doctor Gender"
                    className="admin-select"
                    classNames={{
                        control: () => 'react-select__control',
                        option: () => 'react-select__option',
                        menu: () => 'react-select__menu',
                        menuList: () => 'react-select__menu-list',
                        singleValue: () => 'react-select__single-value',
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
                    placeholder="Doctors Accomplishments ..."
                ></textarea>
            </label>

            {/* OVERVIEW TEXT */}
            <label>
                Overview:
                <textarea
                    name="overviewText"
                    value={formData.overviewText || ''}
                    onChange={handleInputChange}
                    placeholder="Overview Text of Doctor ..."
                ></textarea>
            </label>

            {/* DEPARTMENTS */}
            <label>
                Departments:
                <Creatable
                    isMulti
                    value={formData.departments || []}
                    onChange={(newValue) => handleSelectChange(newValue, 'departments')}
                    options={defaultDepartmentOptions}
                    placeholder="Select Doctor's Departments"
                    className="admin-select"
                    classNames={{
                        control: () => 'react-select__control',
                        option: () => 'react-select__option',
                        menu: () => 'react-select__menu',
                        menuList: () => 'react-select__menu-list',
                        multiValue: () => 'react-select__multi-value',
                        multiValueLabel: () => 'react-select__multi-value__label',
                        multiValueRemove: () => 'react-select__multi-value__remove',
                    }}
                />
            </label>

            {/* UNITS */}
            <label>
                Units:
                <Creatable
                isMulti
                value={formData.units || []}
                onChange={(newValue) => handleSelectChange(newValue, 'units')}
                options={defaultUnitsOptions}
                placeholder="Select Doctor's Units"
                className="admin-select"
                classNames={{
                    control: () => 'react-select__control',
                    option: () => 'react-select__option',
                    menu: () => 'react-select__menu',
                    menuList: () => 'react-select__menu-list',
                    multiValue: () => 'react-select__multi-value',
                    multiValueLabel: () => 'react-select__multi-value__label',
                    multiValueRemove: () => 'react-select__multi-value__remove',
                }}
            />
            </label>

            {/* SPECIALTIES */}
            <label>
                Specialties:
                <Creatable
                    isMulti
                    value={formData.specialties || []}
                    onChange={(newValue) => handleSelectChange(newValue, 'specialties')}
                    options={defaultSpecialtiesOptions}
                    placeholder="Select Doctors Specialty"
                    className="admin-select"
                    classNames={{
                        control: () => 'react-select__control',
                        option: () => 'react-select__option',
                        menu: () => 'react-select__menu',
                        menuList: () => 'react-select__menu-list',
                        multiValue: () => 'react-select__multi-value',
                        multiValueLabel: () => 'react-select__multi-value__label',
                        multiValueRemove: () => 'react-select__multi-value__remove',
                    }}
                />
            </label>

            {/* QUALIFICATIONS */}
            <label>
                Qualifications:
                <Creatable
                    isMulti
                    value={formData.qualifications || []}
                    onChange={(newValue) => handleSelectChange(newValue, 'qualifications')}
                    options={defaultQualificationsOptions}
                    placeholder="Select Doctors Qualification"
                    className="admin-select"
                    classNames={{
                        control: () => 'react-select__control',
                        option: () => 'react-select__option',
                        menu: () => 'react-select__menu',
                        menuList: () => 'react-select__menu-list',
                        multiValue: () => 'react-select__multi-value',
                        multiValueLabel: () => 'react-select__multi-value__label',
                        multiValueRemove: () => 'react-select__multi-value__remove',
                    }}
                />
            </label>

            {/* CLINIC DAYS */}
            <label>
                Clinic Days:
                <input
                    type="text"
                    name="clinicDays"
                    value={formData.clinicDays || ''}
                    onChange={handleInputChange}
                    placeholder="Enter Clinic Days (e.g., Monday, Wednesday)"
                />
            </label>

            {/* EMAIL */}
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    placeholder="Doctor Email ..."
                    value={formData.email || ''}
                    onChange={handleInputChange}
                />
            </label>

            {/* SOCIAL LINKS */}
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
                        placeholder="https://www.facebook.com/"
                    />
                </label>
                {/* LINKEDIN */}
                <label>
                    LinkedIn:
                    <input
                        type="text"
                        name="linkedIn"
                        value={formData.linkedIn || ''}
                        onChange={handleInputChange}
                        placeholder="https://www.linkedin.com/"
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
                        placeholder="https://www.twitter.com/"
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
                        placeholder="https://www.instagram.com/"
                    />
                </label>
            </div>
        </div>
    );
};

export default DoctorsDetailsInput;