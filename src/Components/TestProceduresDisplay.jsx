import React from 'react';
import { Link } from 'react-router-dom';

const TestProceduresDisplay = ({ filteredTests, initialLetter }) => {
    return (
        <div className='diseases-display-container'>
            <h6>OAUTHC does not endorse companies or products. Advertising revenue supports our non-profit mission</h6>
            <div className="diseases-symptoms-display">
                <h3>{initialLetter}</h3>
                <ul>
                    {filteredTests.length > 0 ? (
                        filteredTests.map((test, index) => (
                            <li key={index}>
                                <Link to={`/services/tests-procedures/${test.name.replace(/\s+/g, '-').toLowerCase()}`} className='disease-links'>
                                    <strong>{test.name}</strong>
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li>No Tests Found</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default TestProceduresDisplay;
