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
                    options={defaultSpecialtiesOptions}
                    className="react-select-container"
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
                    className="react-select-container"
                />
            </label>
            {/* DEPARTMENTS */}
            <label>
                Departments:
                <Creatable
                    isMulti
                    value={departments}
                    onChange={(newValue) => handleSelectChange(newValue, 'departments')}
                    options={defaultDepartmentOptions}
                    className="react-select-container"
                />
            </label>
            <p>Social links</p>
            <div className="social-links">
                <label>
                    Facebook:
                    <input
                        type="text"
                        name="facebook"
                        value={formData.facebook || ''}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    LinkedIn:
                    <input
                        type="text"
                        name="linkedIn"
                        value={formData.linkedIn || ''}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Twitter:
                    <input
                        type="text"
                        name="twitter"
                        value={formData.twitter || ''}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Instagram:
                    <input
                        type="text"
                        name="instagram"
                        value={formData.instagram || ''}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
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
            {/* EMAIL */}
            <label>
                Email:
                <input
                    type="text"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleInputChange}
                />
            </label>
        </div>
    );
};

export default DoctorsDetailsInputs;