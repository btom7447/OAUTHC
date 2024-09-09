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
import DepartmentDetails from './Pages/DepartmentDetails';
import { DepartmentProvider } from './Components/DepartmentProvider';
import { SectionProvider } from './Components/SectionProvider';
import SchoolDetails from './Pages/SchoolDetails';
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
import LoginPage from './Pages/LoginPage';
import { AuthProvider, useAuth } from './Components/AuthContext';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { isAuthenticated, login } = useAuth();

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
              <Route path="/" element={<Navigate to="/Home" replace />} />
              <Route path="/home" element={<LandingPage />} />
              <Route path="/about/*" element={<AboutUsPage />} />
              <Route path="/services/*" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/terms-of-service" element={<TermsService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/student-portal" element={<StudentPortal />} />
              <Route path="/home#bookAppointmentSection" element={<LandingPage />} />
              <Route path="/department-details/:departmentName" element={<DepartmentDetails />} />
              <Route path="/doctor-profile/:doctorName" element={<DoctorsProfile />} />
              <Route path="/school-details/:schoolName" element={<SchoolDetails />} />
              <Route path="/services-details/:name" element={<ServicesDetails />} /> 
              <Route path="/diseases-symptoms/:name" element={<DiseaseSymptomDetails />} /> 
              <Route path="/test-procedures/:name" element={<TestDetails />} />
              <Route path="/management/:name" element={<TeamMemberDetails />} /> 
              
              {/* ADMIN DASHBOARD ROUTE */}
              <Route path="/admin/login" element={<LoginPage onLogin={login} />} />
              <Route 
                path="/admin/*" 
                element={isAuthenticated ? <UserAdmin /> : <Navigate to="/admin/login" replace />} 
              />
            </Routes>

            {/* Conditionally render Footer */}
            {!isAdminRoute && <Footer />}
          </div>
        </ServiceProvider>
      </SectionProvider>
    </DepartmentProvider>
  );
};

// Wrap the App component with AuthProvider
const AppWithAuth = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default AppWithAuth;
