import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useDiseaseData } from '../Components/ServiceProvider';
import DiseasesCaption from '../Components/DiseasesCaption';
import DoctorsContainer from '../Components/DoctorsContainer';
import { ClipLoader } from 'react-spinners';

const DiseaseSymptomDetails = () => {
    const { name } = useParams();
    const diseasesData = useDiseaseData();

    const selectedDisease = diseasesData.find(disease => {
        const formattedName = disease.name.replace(/\s+/g, '-').toLowerCase();
        return formattedName === name;
    });

    if (!selectedDisease) {
        return (
            <div className="loading-spinner loading">
                <ClipLoader color="#005046" size={100} />
            </div>
        );
    }

    const images = Array.isArray(selectedDisease.images) ? selectedDisease.images : [];
    const symptoms = Array.isArray(selectedDisease.symptoms) ? selectedDisease.symptoms : ["No symptom information available"];
    const treatment = Array.isArray(selectedDisease.treatment) ? selectedDisease.treatment : ["No treatment information available"];

    return (
        <div>
            <DiseasesCaption />
            <div className="back-button">
                <FontAwesomeIcon icon={faChevronLeft} className="list-icon" />
                <Link to="/services/diseases-symptoms">Back</Link>
            </div>
            <div className="department-details">
                <div className="department-overview-container">
                    <div className="departments-overview">
                        <h5>{selectedDisease.name} Overview</h5>
                        <h6>{selectedDisease.overviewText}</h6>
                        <p>{selectedDisease.description}</p>
                    </div>
                    <div className="departments-poster">
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={selectedDisease.name} />
                        ))}
                    </div>
                </div>
                <div className="departments-facilities">
                    <p>Symptoms of {selectedDisease.name} may include:</p>
                    <ul>
                        {symptoms.map((symptom, index) => (
                            <li key={index}>
                                <FontAwesomeIcon icon={faChevronRight} className="list-icon" />
                                {symptom}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="departments-contacts">
                    <h5>Treatment</h5>
                    {treatment.length > 0 ? (
                        treatment.map((treat, index) => (
                            <p key={index}>{treat}</p>
                        ))
                    ) : (
                        <p>No treatment information available.</p>
                    )}
                </div>
            </div>
            <DoctorsContainer />
        </div>
    );
};


export default DiseaseSymptomDetails;
