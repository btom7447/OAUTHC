import React from 'react';
import HeroCarousel from '../Components/HeroCarousel';
import AboutToggleDisplay from '../Components/AboutToggleSection';
import TestimonialCarousel from '../Components/TestimonialCarousel';
import LocationsSection from '../Components/LocationSection';
import DepartmentsFocusArea from '../Components/DepartmentsFocusArea';
import DoctorsContainer from '../Components/DoctorsContainer';
import Announcement from '../Components/Announcement';
import WelcomeSection from '../Components/WelcomeSection';
import BookAppointment from '../Components/BookAppointment';
   
const LandingPage = () => {
  
  return (
    <div className="landing-page">
      <HeroCarousel />
      <Announcement />
      <WelcomeSection />
      <AboutToggleDisplay />
      <DepartmentsFocusArea />
      <BookAppointment />
      <DoctorsContainer />
      <TestimonialCarousel />
      <LocationsSection /> 
    </div>
  );
};

export default LandingPage;
