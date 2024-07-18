import React from "react";
import SectionWrapper from '../General Components/SectionWrapper';
import { CurrentSectionProvider } from '../General Components/CurrentSectionContent';
import PageCaption from '../General Components/PageCaption';
import DoctorList from "./DoctorList";
import { useDoctors } from './DepartmentProvider'; 

const FindDoctor = () => {
    const doctorsData = useDoctors(); 

    return (
        <CurrentSectionProvider>
            <PageCaption />
            <SectionWrapper sectionName="Find a Doctor">
                <div className="find-doctor">
                    <DoctorList doctorsData={doctorsData} />
                </div>
            </SectionWrapper>
        </CurrentSectionProvider>
    );
};

export default FindDoctor;