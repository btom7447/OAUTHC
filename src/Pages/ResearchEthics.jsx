import React from 'react';
import { CurrentSectionProvider } from '../Components/CurrentSectionContent';
import SectionWrapper from '../Components/SectionWrapper';
import ServicesCaption from '../Components/ServicesCaption';
import ResearchEthicsCarousel from '../Components/ResearchEthicsCarousel';
import ResearchApplicationRules from '../Components/ResearchApplicationRules';
import ResearchEthicsForm from '../Components/ResearchEthicsForm';

const ResearchEthics = () => {

    return (
        <CurrentSectionProvider>
            <ServicesCaption />
            <SectionWrapper sectionName="Research & Ethics">
                <div className="research-ethics">
                    <h1>Research at OAUTHC</h1> 
                    <ResearchEthicsCarousel />
                    <ResearchApplicationRules />
                    <ResearchEthicsForm />
                </div>
                
            </SectionWrapper>
        </CurrentSectionProvider>
    );
};

export default ResearchEthics;
