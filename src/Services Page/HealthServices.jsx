import React from 'react';
import { CurrentSectionProvider } from '../General Components/CurrentSectionContent';
import SectionWrapper from '../General Components/SectionWrapper';
import GetInTouch from '../General Components/GetInTouch';
import ServicesCaption from './ServicesCaption';
import { useHealthServices } from './ServiceProvider';
import ServicesList from './ServicesList';

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
