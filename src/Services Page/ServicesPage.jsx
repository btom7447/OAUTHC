import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CurrentSectionProvider } from '../General Components/CurrentSectionContent';
import { ServiceProvider } from './ServiceProvider';
import HealthServices from './HealthServices';
import DepartmentDetails from '../AboutUs Page/DepartmentDetails';
import DiseasesSymptoms from './DiseaseSymptoms';
import TestProcedures from './TestProcedures';
import DiseaseSymptomDetails from './DiseaseSymptomDetails';
import TestDetails from './TestDetails';
import ResearchEthics from './ResearchEthics';

const ServicesPage = () => {
  return (
    <CurrentSectionProvider>
      <ServiceProvider>
        <Routes>
          <Route path="Health-Services" element={<HealthServices />} />
          <Route path="Health-Centers/:departmentName" element={<DepartmentDetails />} />
          <Route path="Research-Ethics" element={<ResearchEthics />} />
          <Route path="Diseases-Symptoms" element={<DiseasesSymptoms />} />
          <Route path="Diseases-Symptoms/:departmentName" element={<DiseaseSymptomDetails />} />
          <Route path="Tests-Procedures" element={<TestProcedures />} />
          <Route path="Tests-Procedures/:name" element={<TestDetails />} />

          {/* Add more routes as needed */} 
        </Routes>
      </ServiceProvider>
    </CurrentSectionProvider>
  );
};

export default ServicesPage;
