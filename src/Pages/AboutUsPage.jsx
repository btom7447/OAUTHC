import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CurrentSectionProvider } from '../Components/CurrentSectionContent';
import AboutOAUTHC from './AboutOAUTHC';
import DepartmentCenter from '../Components/DepartmentCenter';
import DepartmentDetails from '../Components/DepartmentDetails';
import { DepartmentProvider } from '../Components/DepartmentProvider';
import FindDoctor from './FindDoctor';
import Location from './Location';
import DoctorsProfile from './DoctorsProfile';
import OurSchools from './OurSchools';
import TeamMemberDetails from '../Components/TeamMemberDetails';
import { teamMembersData } from '../Components/TeamMembersContainer';

const AboutUsPage = () => {
  return (
    <CurrentSectionProvider>
      <DepartmentProvider>
        <Routes>
          <Route path="about-oauthc" element={<AboutOAUTHC />} />
          <Route path="departments-centers" element={<DepartmentCenter />} />
          <Route path="departments-centers/:departmentName" element={<DepartmentDetails />} />
          <Route path="find-doctor" element={<FindDoctor />} />
          <Route path="find-doctor/:doctorName" element={<DoctorsProfile />} />
          <Route path="locations" element={<Location />} />
          <Route path="our-schools" element={<OurSchools />} />
          <Route path="management/:name" element={<TeamMemberDetails teamMembersData={teamMembersData} />} />          {/* Add more routes as needed */}
        </Routes>
      </DepartmentProvider>
    </CurrentSectionProvider>
  );
};

export default AboutUsPage;
