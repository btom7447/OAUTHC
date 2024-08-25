import React from 'react';
import { Link } from 'react-router-dom';

const DiseasesSymptomsDisplay = ({ filteredDiseases, initialLetter }) => {
    return (
        <div className='diseases-display-container'>
            <h6>OAUTHC does not endorse companies or products. Advertising revenue supports our non-profit mission</h6>
            <div className="diseases-symptoms-display">
                <h3>{initialLetter}</h3>
                <ul>
                    {filteredDiseases.length > 0 ? (
                        filteredDiseases.map((disease, index) => (
                            <li key={index}>
                                <Link to={`/Diseases-Symptoms/${disease.name.replace(/\s+/g, '-').toLowerCase()}`} className='disease-links   '>
                                    <strong>{disease.name}</strong>
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li>No Diseases Found</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default DiseasesSymptomsDisplay;