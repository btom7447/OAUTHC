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
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M27.5797 12.5886C27.3556 12.2886 27.012 12.1165 26.6376 12.1165H22.9234V9.50071C22.9234 8.62293 22.2091 7.90836 21.3311 7.90836H19.8331V2.97365C19.8331 2.37125 19.3432 1.88135 18.7408 1.88135H4.40102C3.79863 1.88135 3.30872 2.37125 3.30872 2.97365V4.9136H1.74588C0.868108 4.9136 0.153534 5.62787 0.153534 6.50595V21.7072V24.0408V24.8144C0.153534 25.5164 0.724578 26.0877 1.42655 26.0877H22.9535C22.9569 26.0877 22.96 26.0877 22.9637 26.0877C23.6979 26.0877 24.2683 25.5539 24.529 24.6269L27.7656 13.6262C27.8719 13.2666 27.804 12.8886 27.5797 12.5886ZM21.3314 8.83039C21.7008 8.83039 22.0017 9.13097 22.0017 9.50071V12.1165H19.8334V8.83039H21.3314ZM4.40102 2.80338H18.7411C18.8351 2.80338 18.9113 2.87991 18.9113 2.97365V12.1168H6.61912C5.90055 12.1168 5.26066 12.5993 5.06243 13.2899L4.23076 16.1916V2.97365C4.23076 2.8796 4.30728 2.80338 4.40102 2.80338ZM1.42686 25.1651C1.23323 25.1651 1.07587 25.0074 1.07587 24.8138V24.0405V21.7069V6.50564C1.07587 6.13591 1.37645 5.83533 1.74619 5.83533H3.30903V19.4079L1.79536 24.6881C1.65983 25.1651 1.50247 25.1651 1.42686 25.1651ZM26.8814 13.3652L23.6429 24.3715C23.5412 24.7339 23.3408 25.1651 22.96 25.1651C22.9591 25.1651 22.9578 25.1651 22.9566 25.1651H2.60798C2.63441 25.0953 2.65931 25.021 2.68205 24.941L4.19572 19.6596H4.23076V19.5376L5.94881 13.5438C6.03394 13.2463 6.30963 13.0385 6.61912 13.0385H26.6373C26.7483 13.0385 26.8125 13.1025 26.8411 13.1406C26.8697 13.1787 26.913 13.2586 26.8814 13.3652Z" fill="#005046"/>
                            <path d="M16.4815 6.44938H6.38893C6.13415 6.44938 5.92792 6.24315 5.92792 5.98836C5.92792 5.73357 6.13415 5.52734 6.38893 5.52734H16.4815C16.736 5.52734 16.9425 5.73357 16.9425 5.98836C16.9425 6.24315 16.7363 6.44938 16.4815 6.44938Z" fill="#005046"/>
                            <path d="M16.4815 9.21549H6.38893C6.13415 9.21549 5.92792 9.00926 5.92792 8.75447C5.92792 8.49968 6.13415 8.29346 6.38893 8.29346H16.4815C16.736 8.29346 16.9425 8.49968 16.9425 8.75447C16.9425 9.00926 16.7363 9.21549 16.4815 9.21549Z" fill="#005046"/>
                        </svg>
                    </div>
                </div>
                <p>*Compulsory for referred patients.</p>
            </div>
            <button type="submit" className="booking-submit">Book an Appointment</button>
        </form>
    );
}

export default BookingForm;
