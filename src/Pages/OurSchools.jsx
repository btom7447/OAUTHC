import React from 'react';
import { CurrentSectionProvider } from '../Components/CurrentSectionContent';
import PageCaption from '../Components/PageCaption';
import SectionWrapper from '../Components/SectionWrapper';
import TestimonialCarousel from '../Components/TestimonialCarousel';
import GetInTouch from '../Components/GetInTouch';
import { useSchools } from '../Components/DepartmentProvider';
import SchoolList from '../Components/SchoolList';

const OurSchools = () => {
    const schools = useSchools();
    
    return (
        <CurrentSectionProvider>
            <PageCaption />
            <SectionWrapper sectionName="Our Schools">
                <div className="departments-centers-section">
                    <div className="departments-centers-text">
                        <p>
                            At OAUTHC, we take pride in our esteemed schools, each dedicated to excellence in education and training. 
                            Our schools are staffed by experienced professionals committed to providing high-quality instruction and mentorship. 
                            From the School of Nursing and Ife School of Nursing, which foster compassionate and skilled nurses, to the School of Midwifery, 
                            which prepares students for safe and effective midwifery practice, we ensure that every student receives personalized attention 
                            tailored to their unique learning needs.                     
                        </p>
                        <p>
                            Additionally, our School of Perioperative Nursing, School of Health Information Management, and Community Health Officers Training Program 
                            provide specialized training, equipping students with the latest knowledge and skills in their respective fields. Whether you aspire to become a nurse, 
                            midwife, perioperative nurse, health information manager, or community health officer, our schools at OAUTHC are dedicated to meeting all your educational 
                            needs with professionalism and dedication.                    
                        </p>
                    </div>
                    <SchoolList schools={schools} />
                </div>
                <TestimonialCarousel />
                <GetInTouch />
            </SectionWrapper>
        </CurrentSectionProvider>
    );
};

export default OurSchools;