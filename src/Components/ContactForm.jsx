import React from "react";
import GetInTouch from "./GetInTouch";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
    return(
        <div className="contact-us-form">
            <ContactUsForm />
            <div className="contact-get-in-touch">
                <GetInTouch />
            </div>

        </div>
    )
};

export default ContactForm;