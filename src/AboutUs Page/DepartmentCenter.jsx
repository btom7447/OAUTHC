import React from 'react';
import { CurrentSectionProvider } from '../General Components/CurrentSectionContent';
import PageCaption from '../General Components/PageCaption';
import SectionWrapper from '../General Components/SectionWrapper';
import TestimonialCarousel from '../Landing Page/TestimonialCarousel';
import GetInTouch from '../General Components/GetInTouch';
import DepartmentList from './DepartmentList';
import { useDepartments } from './DepartmentProvider';

const DepartmentCenter = () => {
    const departments = useDepartments();

    return (
        <div>
            <CurrentSectionProvider>
                <PageCaption />
                <SectionWrapper sectionName="Departments and Centers">
                    <div className="departments-centers-section">
                        <div className="departments-centers-text">
                            <p>
                                At our hospital, we pride ourselves on offering comprehensive medical services through our specialized departments and centers.
                                Each department is staffed by experienced professionals dedicated to providing the highest quality of care. From our Cardiology Center,
                                where state-of-the-art technology meets compassionate patient care, to our General Surgery Center, which handles a wide range of surgical
                                procedures with precision and expertise, we ensure that every patient receives personalized attention tailored to their unique health needs.
                            </p>
                            <p>
                                In addition to these specialized centers, our hospital houses a variety of other essential departments, such as the Neurology Center, Orthopedic
                                Center, and Emergency Department. Each of these departments is equipped with the latest medical technology and staffed by experts who are leaders in their fields.
                                Whether you require routine check-ups, emergency care, or specialized treatment, our hospital is dedicated to meeting all your healthcare needs with professionalism and compassion.
                            </p>
                        </div>
                        <DepartmentList departments={departments} />
                    </div>
                    <TestimonialCarousel />
                    <GetInTouch />
                </SectionWrapper>
            </CurrentSectionProvider>
        </div>
    );
}

export default DepartmentCenter;