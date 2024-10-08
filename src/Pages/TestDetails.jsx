import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useTestsData } from '../Components/ServiceProvider';
import HealthServicesCaption from '../Components/HealthServiceCaption';
import { ClipLoader } from 'react-spinners';

const TestDetails = () => {
    const { name } = useParams();
    const testsData = useTestsData();

    const selectedTest = testsData.find(test => {
        const formattedName = test.name.replace(/\s+/g, '-').toLowerCase();
        return formattedName === name;
    });

    if (!selectedTest) {
        return (
            <div className="loading-spinner loading">
                <ClipLoader color="#005046" size={100} />
            </div>
        );
    }

    return (
        <div>
            <HealthServicesCaption />
            <div className="back-button">
                <FontAwesomeIcon icon={faChevronLeft} className="list-icon" />
                <Link to="/services/tests-procedures">Back</Link>
            </div>
            <div className="tests-procedures-details">
                <h4>{selectedTest.name} Overview</h4>
                <h6>{selectedTest.overview}</h6>

                {/* WHY IT IS DONE */}
                <h5>Why it's done</h5>
                <p>{selectedTest.why.join(" ")}</p>

                {/* HOW YOU PREPARE */}
                <h5>How you Prepare</h5>
                <p>{selectedTest.preparation.join(" ")}</p>


                {/* WHAT CAN YOU EXPECT */}
                <h5>What can you expect</h5>
                <p>{selectedTest.expectation.join(" ")}</p>


                {/* RESULTS */}
                <h5>Results</h5>
                <p>{selectedTest.result.join(" ")}</p>


                {/* LIMITATIONS */}
                <h5>Limitations of {selectedTest.name}</h5>
                <p>{selectedTest.limitation.join(" ")}</p>

            </div>
        </div>
    );
};

export default TestDetails;