import React, { useState, useCallback } from 'react';

const TestProceduresNav = ({ testsData = [], onSearchChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedAlphabet, setSelectedAlphabet] = useState('A');

    // Replace the filterTests function here with the updated version
    const filterTests = useCallback((searchTerm, alphabet) => {
        let filtered = testsData;

        // Filter by search term
        if (searchTerm) {
            const searchTermLower = searchTerm.toLowerCase();
            filtered = filtered.filter(test =>
                test.name.toLowerCase().includes(searchTermLower) ||
                (Array.isArray(test.procedure) && test.procedure.some(procedure => 
                    procedure.toLowerCase().includes(searchTermLower)
                ))
            );
        }

        // Filter by alphabet
        if (alphabet) {
            filtered = filtered.filter(test =>
                test.name.toLowerCase().startsWith(alphabet.toLowerCase())
            );
        }

        // Call the callback with the filtered tests and selected alphabet
        if (onSearchChange) onSearchChange(filtered, alphabet);
    }, [testsData, onSearchChange]);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        filterTests(value, selectedAlphabet);
    };

    const handleAlphabetClick = (alphabet) => {
        setSelectedAlphabet(alphabet);
        filterTests(searchTerm, alphabet);
    };

    return (
        <div className="diseases-symptoms-nav">
            <div className="diseases-nav-left">
                <h4>Tests & Procedures</h4>
                <p>What it is, how it's done, how to prepare, risks and results.</p>

                <div className="diseases-nav-search-container">
                    <h5>Search Tests & Procedures</h5>
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
                <h5>Find Tests & Procedures by its first letter</h5>
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

export default TestProceduresNav;