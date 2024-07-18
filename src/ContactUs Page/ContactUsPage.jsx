import React from 'react';
import OurValues from '../AboutUs Page/OurValues';
import MapComponent from './MapContent';
import ContactUsCaption from './ContactUsCaption';
import ContactForm from './ContactForm';
import TeamMembersContainer from '../AboutUs Page/TeamMembersContainer';

const ContactUsPage = () => {
  return (
    <div className='contact-us'>
      <ContactUsCaption />
      <OurValues />
      <ContactForm />
      <MapComponent />
      <TeamMembersContainer />
    </div>
   
  );
};

export default ContactUsPage;
