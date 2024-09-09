import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CurrentSectionProvider } from '../Components/CurrentSectionContent';
import { ServiceProvider } from '../Components/ServiceProvider';
import HealthServices from './HealthServices';
import DepartmentDetails from './DepartmentDetails';
import DiseasesSymptoms from './DiseaseSymptoms';
import TestProcedures from './TestProcedures';
import DiseaseSymptomDetails from '../Components/DiseaseSymptomDetails';
import TestDetails from '../Components/TestDetails';
import ResearchEthics from './ResearchEthics';

const ServicesPage = () => {
  return (
    <CurrentSectionProvider>
      <ServiceProvider>
        <Routes>
          <Route path="health-services" element={<HealthServices />} />
          <Route path="health-centers/:departmentName" element={<DepartmentDetails />} />
          <Route path="research-ethics" element={<ResearchEthics />} />
          <Route path="diseases-symptoms" element={<DiseasesSymptoms />} />
          <Route path="diseases-symptoms/:departmentName" element={<DiseaseSymptomDetails />} />
          <Route path="tests-procedures" element={<TestProcedures />} />
          <Route path="tests-procedures/:name" element={<TestDetails />} />
        </Routes>
      </ServiceProvider>
    </CurrentSectionProvider>
  );
};

export default ServicesPage;
