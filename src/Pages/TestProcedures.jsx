import React, { useState, useEffect } from 'react';
import { CurrentSectionProvider } from '../Components/CurrentSectionContent';
import SectionWrapper from '../Components/SectionWrapper';
import ServicesCaption from '../Components/ServicesCaption';
import { ServiceProvider, useTestsData } from '../Components/ServiceProvider';
import TestProceduresNav from '../Components/TestProceduresNav';
import TestProceduresDisplay from '../Components/TestProceduresDisplay';

const TestsProcedures = () => {
    const testsData = useTestsData();
    const [filteredTests, setFilteredTests] = useState([]);
    const [initialLetter, setInitialLetter] = useState('A');

    useEffect(() => {
        // Filter tests by 'A' initially
        const initialFiltered = testsData.filter(test =>
            test.name.toLowerCase().startsWith('a')
        );
        setFilteredTests(initialFiltered);
    }, [testsData]);

    const handleSearchChange = (filtered, alphabet) => {
        setFilteredTests(filtered);
        setInitialLetter(alphabet);
    };

    return (
        <CurrentSectionProvider>
            <ServicesCaption />
            <SectionWrapper sectionName="Tests and Procedures">
                <ServiceProvider>
                    <div className="diseases-symptoms-section">
                        <TestProceduresNav testsData={testsData} onSearchChange={handleSearchChange} />
                        <TestProceduresDisplay filteredTests={filteredTests} initialLetter={initialLetter} />
                    </div>
                </ServiceProvider>
            </SectionWrapper>
        </CurrentSectionProvider>
    );
};

export default TestsProcedures;