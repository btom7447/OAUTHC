import React from "react";
import SectionWrapper from '../Components/SectionWrapper';
import { CurrentSectionProvider } from '../Components/CurrentSectionContent';
import PageCaption from '../Components/PageCaption';
import DoctorList from "../Components/DoctorList";
import { useDoctors } from '../Components/DepartmentProvider'; 

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