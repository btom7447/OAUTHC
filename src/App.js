import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import MobileHeader from './Header/HeaderMobile';
import SidebarMobile from './Header/SidebarMobile';

import LandingPage from './Landing Page/LandingPage';
import AboutUsPage from './AboutUs Page/AboutUsPage';
import ServicesPage from './Services Page/ServicesPage';
import ContactUsPage from './ContactUs Page/ContactUsPage';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <Router>
      <div className="app">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <MobileHeader /> 
        <SidebarMobile /> 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;