import React, { useState, useCallback } from 'react';

const DiseasesSymptomsNav = ({ diseasesData = [], onSearchChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedAlphabet, setSelectedAlphabet] = useState('A');

    const filterDiseases = useCallback((searchTerm, alphabet) => {
        let filtered = diseasesData;

        // Filter by search term
        if (searchTerm) {
            const searchTermLower = searchTerm.toLowerCase();
            filtered = filtered.filter(disease =>
                disease.name.toLowerCase().includes(searchTermLower) ||
                disease.symptoms.some(symptom => symptom.toLowerCase().includes(searchTermLower))
            );
        }

        // Filter by alphabet
        if (alphabet) {
            filtered = filtered.filter(disease =>
                disease.name.toLowerCase().startsWith(alphabet.toLowerCase())
            );
        }

        // Call the callback with the filtered diseases and selected alphabet
        if (onSearchChange) onSearchChange(filtered, alphabet);
    }, [diseasesData, onSearchChange]);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        filterDiseases(value, selectedAlphabet);
    };

    const handleAlphabetClick = (alphabet) => {
        setSelectedAlphabet(alphabet);
        filterDiseases(searchTerm, alphabet);
    };

    return (
        <div className="diseases-symptoms-nav">
            <div className="diseases-nav-left">
                <h4>Diseases & Symptoms</h4>
                <p>Easy-to-understand answers about diseases and symptoms</p>

                <div className="diseases-nav-search-container">
                    <h5>Search Diseases & Symptoms</h5>
                    <input
                        className='disease-search'
                        type="search"
                        name="diseases-symptoms-search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder='Search'
                    />
                </div>
            </div>
            <div className="diseases-nav-right">
                <h5>Find diseases & symptoms by its first letter</h5>
                <div className="alphabet-buttons">
                    {Array.from(Array(26)).map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => handleAlphabetClick(String.fromCharCode(65 + index))}
                            className={selectedAlphabet === String.fromCharCode(65 + index) ? 'active' : ''}
                        >
                            {String.fromCharCode(65 + index)}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DiseasesSymptomsNav;
