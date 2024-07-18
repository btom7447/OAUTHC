import React, { useState, useEffect } from 'react';
import { CurrentSectionProvider } from '../General Components/CurrentSectionContent';
import SectionWrapper from '../General Components/SectionWrapper';
import ServicesCaption from './ServicesCaption';
import { ServiceProvider, useTestsData } from './ServiceProvider';
import TestProceduresNav from './TestProceduresNav';
import TestProceduresDisplay from './TestProceduresDisplay';

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