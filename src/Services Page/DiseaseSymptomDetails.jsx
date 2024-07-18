import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useDiseaseData } from '../Services Page/ServiceProvider';
import DiseasesCaption from './DiseasesCaption';
import DoctorsContainer from '../AboutUs Page/DoctorsContainer';

const DiseaseSymptomDetails = () => {
    const { name } = useParams();
    const diseasesData = useDiseaseData();

    const selectedDisease = diseasesData.find(disease => {
        const formattedName = disease.name.replace(/\s+/g, '-').toLowerCase();
        return formattedName === name;
    });

    if (!selectedDisease) {
        return <p>Disease and Symptom not found.</p>;
    }

    return (
        <div>
            <DiseasesCaption />
            <div className="back-button">
                <FontAwesomeIcon icon={faChevronLeft} className="list-icon" />
                <Link to="/Services/Diseases-Symptoms">Back</Link>
            </div>
            <div className="department-details">
                <div className="department-overview-container">
                    <div className="departments-overview">
                        <h5>{selectedDisease.name} Overview</h5>
                        <h6>{selectedDisease.overviewText}</h6>
                        {selectedDisease.description.map((description, index) => (
                            <p key={index}>
                                {description}
                            </p>
                        ))}
                    </div>
                    <div className="departments-poster">
                        {selectedDisease.images.map((images, index) => (
                            <img key={index} src={images} alt={selectedDisease.name}>
                                
                            </img>
                        ))}                    </div>
                </div>
                <div className="departments-facilities">
                    <h5>Symptoms</h5>
                    <p>Symptoms of {selectedDisease.name} may include:</p>
                    <ul>
                        {selectedDisease.symptoms.map((symptom, index) => (
                            <li key={index}>
                                <FontAwesomeIcon icon={faChevronRight} className="list-icon" />
                                {symptom}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="departments-contacts">
                    <h5>Treatment</h5>
                    {selectedDisease.treatment.map((treatment, index) => (
                        <p key={index}>
                            {treatment}
                        </p>
                    ))}
                </div>
            </div>
            <DoctorsContainer />
        </div>
    );
};

export default DiseaseSymptomDetails;
