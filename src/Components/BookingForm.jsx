import React, { useState } from 'react';
import Select from 'react-select';

function BookingForm({ fileIcon }) {
    const [formData, setFormData] = useState({
        patientType: '',
        phone: '',
        firstName: '',
        lastName: '',
        email: '',
        date: '',
        time: '',
        message: '',
        file: null,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            file: file ? file : null,
        }));
    };

    const handleSelectChange = (selectedOption) => {
        setFormData((prevData) => ({
            ...prevData,
            patientType: selectedOption ? selectedOption.value : '',
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        // Validation logic
        if (!formData.patientType) newErrors.patientType = true;
        if (!formData.phone) newErrors.phone = true;
        if (!formData.firstName) newErrors.firstName = true;
        if (!formData.lastName) newErrors.lastName = true;
        if (!formData.date) newErrors.date = true;

        setErrors(newErrors);

        // Check if there are no errors
        if (Object.keys(newErrors).length === 0) {
            const formToSubmit = new FormData();
            for (const key in formData) {
                if (formData[key] !== null) {
                    formToSubmit.append(key, formData[key]);
                }
            }

            try {
                const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

                const response = await fetch('https://oauthc.iccflifeskills.com.ng/v0.1/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'X-CSRF-Token': csrfToken,
                    },
                    body: formToSubmit,
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log('Form submitted successfully:', result);
                    // Handle successful submission
                } else {
                    console.error('Form submission failed:', response.statusText);
                    // Handle form submission errors
                }
            } catch (error) {
                console.error('Error during form submission:', error);
                // Handle network errors
            }
        }
    };

    // Options for React Select
    const patientTypeOptions = [
        { value: 'referred patient', label: 'Referred Patient' },
        { value: 'new patient', label: 'New Patient' },
        { value: 'returning patient', label: 'Returning Patient' },
    ];

    return (
        <form onSubmit={handleSubmit} className="booking-form" id="bookAppointmentSection">
            {/* PATIENT TYPE */}
            <div className="form-group patient-type-group">
                <label htmlFor="patientTypeInput" className={errors.patientType ? 'error' : ''}>Patient type</label>
                <div className="select-container">
                    <Select
                        name="patientType"
                        id="patientTypeInput"
                        classNamePrefix="react-select" // Add this prop
                        options={patientTypeOptions}
                        onChange={handleSelectChange}
                        value={patientTypeOptions.find(option => option.value === formData.patientType)}
                        placeholder="Select Patient Type"
                        className="doctor-select"
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
                </div>
            </div>
            {/* PHONE NUMBER */}
            <div className="form-group phone-number-group">
                <label htmlFor="phoneInput" className={errors.phone ? 'error' : ''}>Phone</label>
                <input
                    type="text"
                    name="phone"
                    id="phoneInput"
                    maxLength="15"
                    placeholder="123456789"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>
            {/* FIRST NAME */}
            <div className="form-group name-group">
                <label htmlFor="firstNameInput" className={errors.firstName ? 'error' : ''}>First name</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstNameInput"
                    placeholder="John"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </div>
            {/* LAST NAME */}
            <div className="form-group name-group">
                <label htmlFor="lastNameInput" className={errors.lastName ? 'error' : ''}>Last name</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastNameInput"
                    placeholder="Doe"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>
            {/* EMAIL  */}
            <div className="form-group email-group">
                <label htmlFor="emailInput">Email</label>
                <input
                    type="email"
                    name="email"
                    id="emailInput"
                    placeholder="user@email.com"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            {/* APPOINTMENT DATE */}
            <div className="form-group appointment-date-group">
                <label htmlFor="dateInput" className={errors.date ? 'error' : ''}>Date</label>
                <input
                    type="date"
                    name="date"
                    id="dateInput"
                    className="date-time-input"
                    placeholder="Select Date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                />
            </div>
            {/* TIME */}
            <div className="form-group time-group">
                <label htmlFor="timeInput">Time</label>
                <input
                    type="time"
                    name="time"
                    id="timeInput"
                    placeholder="Select Time"
                    value={formData.time}
                    onChange={handleChange}
                />
            </div>
            {/* MESSAGE */}
            <div className="form-group message-group">
                <textarea
                    name="message"
                    id="messageInput"
                    cols="30"
                    rows="10"
                    placeholder="Type your message here.."
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
            </div>
            {/* UPLOAD FILE */}
            <div className="form-group upload-file-group">
                <label htmlFor="fileInput">Upload your referral note</label>
                <div className="file-input-wrapper">
                    <input
                        type="file"
                        name="file"
                        id="fileInput"
                        className="file-input"
                        placeholder="Upload file"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                    <div className="icon-wrapper" onClick={() => document.getElementById('fileInput').click()}>
                        Upload File
                    </div>
                </div>
                <p>*Compulsory for referred patients.</p>
            </div>
            <button type="submit" className="booking-submit">Book an Appointment</button>
        </form>
    );
}

export default BookingForm;
