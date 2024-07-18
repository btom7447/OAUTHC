import React from 'react';
import { CurrentSectionProvider } from '../General Components/CurrentSectionContent';
import SectionWrapper from '../General Components/SectionWrapper';
import ServicesCaption from './ServicesCaption';
import ResearchEthicsCarousel from './ResearchEthicsCarousel';
import ResearchApplicationRules from './ResearchApplicationRules';
import ResearchEthicsForm from './ResearchEthicsForm';

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
