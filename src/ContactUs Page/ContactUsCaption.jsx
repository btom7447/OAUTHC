import React from 'react';
import { Link } from 'react-router-dom';
import CaptionUnderline from '../General Components/CaptionUnderline';

const ContactUsCaption = () => {
  return (
    <div className="contact-caption">
      <div className="page-caption-text">
        <Link to="/">Home</Link> <span>/</span> Contact Us
        <h5>Contact Us</h5>
      </div>
      <CaptionUnderline />
    </div>
  );
};

export default ContactUsCaption;
