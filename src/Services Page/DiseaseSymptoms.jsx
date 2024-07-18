import React, { useState, useEffect } from 'react';
import { CurrentSectionProvider } from '../General Components/CurrentSectionContent';
import SectionWrapper from '../General Components/SectionWrapper';
import ServicesCaption from './ServicesCaption';
import DiseasesSymptomsNav from './DiseaseSymptomsNav';
import DiseasesSymptomsDisplay from './DiseasesSymptomsDisplay';
import { ServiceProvider, useDiseaseData } from './ServiceProvider';

const DiseasesSymptoms = () => {
    const diseasesData = useDiseaseData();
    const [filteredDiseases, setFilteredDiseases] = useState([]);
    const [initialLetter, setInitialLetter] = useState('A');

    useEffect(() => {
        // Filter diseases by 'A' initially
        const initialFiltered = diseasesData.filter(disease =>
            disease.name.toLowerCase().startsWith('a')
        );
        setFilteredDiseases(initialFiltered);
    }, [diseasesData]);

    const handleSearchChange = (filtered, alphabet) => {
        setFilteredDiseases(filtered);
        setInitialLetter(alphabet);
    };

    return (
        <CurrentSectionProvider>
            <ServicesCaption />
            <SectionWrapper sectionName="Diseases and Symptoms">
                <ServiceProvider>
                    <div className="diseases-symptoms-section">
                        <DiseasesSymptomsNav diseasesData={diseasesData} onSearchChange={handleSearchChange} />
                        <DiseasesSymptomsDisplay filteredDiseases={filteredDiseases} initialLetter={initialLetter} />
                    </div>
                </ServiceProvider>
            </SectionWrapper>
        </CurrentSectionProvider>
    );
};

export default DiseasesSymptoms;
