import React, { useState } from "react";

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to an API
        console.log(formData);
    };

    return (
        <div className="contact-form">
            <div className="get-in-touch-caption">
                <h5>Get In Touch</h5>
                <h6>Contact</h6>
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                    className="contact-name-input"
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Name" 
                    required 
                />
                <input 
                    className="contact-email-input"
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email" 
                    required 
                />
                <input 
                    className="contact-subject-input"
                    type="text" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="Subject" 
                    required 
                />
                <textarea 
                    className="contact-message-input"
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Message" 
                    required 
                ></textarea>
                <button className="contact-submit-button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactUsForm;
