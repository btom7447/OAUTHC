import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import MobileHeader from './Components/HeaderMobile';
import SidebarMobile from './Components/SidebarMobile';
import LandingPage from './Pages/LandingPage';
import AboutUsPage from './Pages/AboutUsPage';
import ServicesPage from './Pages/ServicesPage';
import ContactUsPage from './Pages/ContactUsPage';
import Footer from './Components/Footer';
import DepartmentDetails from './Components/DepartmentDetails'; 
import { DepartmentProvider } from './Components/DepartmentProvider';
import { SectionProvider } from './Components/SectionProvider';
import SchoolDetails from './Components/SchoolDetails';
import DoctorsProfile from './Pages/DoctorsProfile';
import { ServiceProvider } from './Components/ServiceProvider';
import ServicesDetails from './Components/ServicesDetails';
import ScrollToTop from './Components/ScrollToTop';
import DiseaseSymptomDetails from './Components/DiseaseSymptomDetails';
import TestDetails from './Components/TestDetails';
import TermsService from './Components/TermsService';
import PrivacyPolicy from './Components/PrivacyPolicy';
import StudentPortal from './Pages/StudentPortal';
import TeamMemberDetails from './Components/TeamMemberDetails';
import UserAdmin from './Pages/UserAdmin';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Check if the current route starts with "/admin"
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <DepartmentProvider>
      <SectionProvider>
        <ServiceProvider> 
          <div className="app">
            <ScrollToTop /> 

            {/* Conditionally render Header, MobileHeader, and SidebarMobile */}
            {!isAdminRoute && (
              <>
                <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <MobileHeader />
                <SidebarMobile />
              </>
            )}

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
              <Route path="/Test-Procedures/:name" element={<TestDetails />} />
              <Route path="/management/:name" element={<TeamMemberDetails />} /> 
              
              {/* ADMIN DASHBOARD ROUTE */}
              <Route path="/admin/*" element={<UserAdmin />} />
            </Routes>

            {/* Conditionally render Footer */}
            {!isAdminRoute && <Footer />}
          </div>
        </ServiceProvider>
      </SectionProvider>
    </DepartmentProvider>
  );
};

export default App;