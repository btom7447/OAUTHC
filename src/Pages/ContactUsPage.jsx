import React from 'react';
import OurValues from '../Components/OurValues';
import MapComponent from '../Components/MapContent';
import ContactUsCaption from '../Components/ContactUsCaption';
import ContactForm from '../Components/ContactForm';
import TeamMembersContainer from '../Components/TeamMembersContainer';

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
