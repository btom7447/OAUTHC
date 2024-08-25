import React from 'react';
import { CurrentSectionProvider } from '../Components/CurrentSectionContent';
import SectionWrapper from '../Components/SectionWrapper';
import GetInTouch from '../Components/GetInTouch';
import ServicesCaption from '../Components/ServicesCaption';
import { useHealthServices } from '../Components/ServiceProvider';
import ServicesList from '../Components/ServicesList';

const HealthServices = () => {
    const healthServices = useHealthServices();

    return (
        <CurrentSectionProvider>
            <ServicesCaption />
            <SectionWrapper sectionName="Health Services">
                <div className="health-services-section">
                    <ServicesList healthServices={healthServices} />
                    <GetInTouch />
                </div>
                
            </SectionWrapper>
        </CurrentSectionProvider>
    );
};

export default HealthServices;
