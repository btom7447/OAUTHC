import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header/Header';
import MobileHeader from './Header/HeaderMobile';
import SidebarMobile from './Header/SidebarMobile';
import LandingPage from './Landing Page/LandingPage';
import AboutUsPage from './AboutUs Page/AboutUsPage';
import ServicesPage from './Services Page/ServicesPage';
import ContactUsPage from './ContactUs Page/ContactUsPage';
import Footer from './Footer/Footer';
import DepartmentDetails from './AboutUs Page/DepartmentDetails'; 
import { DepartmentProvider } from './AboutUs Page/DepartmentProvider';
import { SectionProvider } from './General Components/SectionProvider';
import SchoolDetails from './AboutUs Page/SchoolDetails';
import DoctorsProfile from './AboutUs Page/DoctorsProfile';
import { ServiceProvider } from './Services Page/ServiceProvider';  // Ensure correct import path
import ServicesDetails from './Services Page/ServicesDetails';
import ScrollToTop from './General Components/ScrollToTop';
import DiseaseSymptomDetails from './Services Page/DiseaseSymptomDetails';
import TestDetails from './Services Page/TestDetails';
import TermsService from './General Components/TermsService';
import PrivacyPolicy from './General Components/PrivacyPolicy';
import StudentPortal from './StudentPortal/StudentPortal';
import { DoctorProvider } from './AboutUs Page/DoctorProvider';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <DepartmentProvider>
      <SectionProvider>
        <ServiceProvider> 
          <DoctorProvider>
            <div className="app">
              <ScrollToTop /> {/* Add the ScrollToTop component here */}
              <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <MobileHeader />
              <SidebarMobile />
              <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/Home" element={<LandingPage />} />
                <Route path="/About/*" element={<AboutUsPage />} />
                <Route path="/Services/*" element={<ServicesPage />} />
                <Route path="/Contact" element={<ContactUsPage />} />
                <Route path="/Terms-of-Service" element={<TermsService />} />
                <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
                <Route path="/Student-Portal" element={<StudentPortal />} />
                <Route path="/Home#bookAppointmentSection" element={<LandingPage />} />
                <Route path="/Department-Details/:departmentName" element={<DepartmentDetails />} />
                <Route path="/Doctor-Profile/:doctorName" element={<DoctorsProfile />} />
                <Route path="/School-Details/:schoolName" element={<SchoolDetails />} />
                <Route path="/Services-Details/:name" element={<ServicesDetails />} /> 
                <Route path="/Diseases-Symptoms/:name" element={<DiseaseSymptomDetails />} /> 
                <Route path="Test-Procedures/:name" element={<TestDetails />} />

                {/* Add more routes as needed */}
              </Routes>
              <Footer />
            </div>
          </DoctorProvider>
        </ServiceProvider>
      </SectionProvider>
    </DepartmentProvider>
  );
};

export default App;