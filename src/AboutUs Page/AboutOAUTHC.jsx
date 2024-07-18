import React from 'react';
import { CurrentSectionProvider } from '../General Components/CurrentSectionContent';
import PageCaption from '../General Components/PageCaption';
import PeopleCulture from './PeopleCulture';
import VisionMissionGoal from './VisionMissionGoal';
import SectionWrapper from '../General Components/SectionWrapper';
import GetInTouch from '../General Components/GetInTouch';
import OurValues from './OurValues';
import TeamMembersContainer from './TeamMembersContainer';
import OAUTHCHistory from './OAUTHCHistory';

const AboutOAUTHC = () => {
    return (
        <CurrentSectionProvider>
            <PageCaption />
            <SectionWrapper sectionName="About OAUTHC">
                <div className="about-oauthc">
                    <OAUTHCHistory />
                    <div className="about-poster-text">
                        <div className="about-oauthc-poster"></div>
                        <div className="about-oauthc-text">
                            <h5>Who We Are</h5>
                            <h4>Leading Excellent Healthcare Delivery</h4> 
                            <p>
                                Obafemi Awolowo University Teaching Hospitals Complex is a healthcare institution committed to leading the delivery of quality healthcare to its diverse patients,training excellent healthcare professionals capable of delivering standard care, and working to build a world that is immediately healthier for all. 
                            </p>
                            <p>
                                We have a patient-focused ecosystem that deploys the best of conditions to ensure excellent healthcare delivery. We achieve this by using state-of-the-art facilities to administer the best care to our patients and committing our healthcare operations to world class professionals.
                            </p>
                            <p>
                                Our institution boasts of being a pioneer and leader in the adoption, training, and practice of several high-level medical procedures. This is a testament to our mission to fully focus and deliver excellent medical care to our patients.
                            </p>
                        </div>
                    </div>
                    <VisionMissionGoal />
                    <TeamMembersContainer />
                    <PeopleCulture />
                    <OurValues />
                    <GetInTouch />
                </div>
            </SectionWrapper>
        </CurrentSectionProvider>
    );
};

export default AboutOAUTHC;
