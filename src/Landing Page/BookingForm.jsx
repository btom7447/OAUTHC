import React, { useState } from 'react';

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
    file: '',
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
      file: file ? file.name : '',
    }));
  };

  const handleSubmit = (e) => {
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
      // Handle form submission logic here
      console.log(formData);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="booking-form">
        {/* PATIENT TYPE */}
        <div className="form-group patient-type-group">
            <label htmlFor="patientTypeInput" className={errors.patientType ? 'error' : ''}>Patient type</label>
            <select
                name="patientType"
                id="patientTypeInput"
                className="patient-type-input"
                required
                value={formData.patientType}
                onChange={handleChange}
            >
                <option value="" disabled>Select Patient Type</option>
                <option value="male">Referred Patients</option>
                <option value="female">Female</option>
            </select>
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
                    style={{ display: 'none' }} // Hide the default file input
                />
                <div className="icon-wrapper" onClick={() => document.getElementById('fileInput').click()}>
                    Upload File
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        className="custom-svg-icon"
                    >
                    <path d="M27.5797 12.5887C27.3556 12.2887 27.012 12.1166 26.6377 12.1166H22.9234V9.50077C22.9234 8.62299 22.2092 7.90842 21.3311 7.90842H19.8331V2.97371C19.8331 2.37131 19.3432 1.88141 18.7408 1.88141H4.40105C3.79866 1.88141 3.30876 2.37131 3.30876 2.97371V4.91366H1.74591C0.868139 4.91366 0.153564 5.62793 0.153564 6.50601V21.7072V24.0409V24.8145C0.153564 25.5164 0.724609 26.0878 1.42658 26.0878H22.9536C22.9569 26.0878 22.96 26.0878 22.9637 26.0878C23.6979 26.0878 24.2684 25.5539 24.529 24.627L27.7656 13.6262C27.872 13.2667 27.8041 12.8886 27.5797 12.5887ZM21.3314 8.83045C21.7008 8.83045 22.0017 9.13103 22.0017 9.50077V12.1166H19.8334V8.83045H21.3314ZM4.40105 2.80344H18.7411C18.8351 2.80344 18.9114 2.87997 18.9114 2.97371V12.1169H6.61915C5.90058 12.1169 5.26069 12.5994 5.06246 13.29L4.23079 16.1916V2.97371C4.23079 2.87966 4.30731 2.80344 4.40105 2.80344ZM1.42689 25.1652C1.23326 25.1652 1.0759 25.0075 1.0759 24.8139V24.0406V21.7069V6.5057C1.0759 6.13597 1.37649 5.83539 1.74622 5.83539H3.30906V19.408L1.79539 24.6882C1.65986 25.1652 1.5025 25.1652 1.42689 25.1652ZM26.8814 13.3653L23.6429 24.3716C23.5412 24.734 23.3408 25.1652 22.96 25.1652C22.9591 25.1652 22.9579 25.1652 22.9566 25.1652H2.60801C2.63444 25.0954 2.65934 25.021 2.68208 24.9411L4.19575 19.6597H4.23079V19.5377L5.94884 13.5439C6.03397 13.2464 6.30966 13.0386 6.61915 13.0386H26.6374C26.7483 13.0386 26.8126 13.1025 26.8411 13.1406C26.8697 13.1788 26.9131 13.2587 26.8814 13.3653Z" fill="#005046"/>
                    <path d="M16.4815 6.44944H6.38899C6.13421 6.44944 5.92798 6.24321 5.92798 5.98842C5.92798 5.73363 6.13421 5.5274 6.38899 5.5274H16.4815C16.736 5.5274 16.9426 5.73363 16.9426 5.98842C16.9426 6.24321 16.7363 6.44944 16.4815 6.44944Z" fill="#005046"/>
                    <path d="M16.4815 9.21555H6.38899C6.13421 9.21555 5.92798 9.00932 5.92798 8.75453C5.92798 8.49975 6.13421 8.29352 6.38899 8.29352H16.4815C16.736 8.29352 16.9426 8.49975 16.9426 8.75453C16.9426 9.00932 16.7363 9.21555 16.4815 9.21555Z" fill="#005046"/>
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
