import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CaptionUnderline from './CaptionUnderline';
import { useDiseaseData } from './ServiceProvider';

const DiseasesCaption = () => {
    const { name } = useParams();
    const diseases = useDiseaseData();

    const disease = diseases.find(disease => {
        const formattedName = disease.name.replace(/\s+/g, '-').toLowerCase();
        return formattedName === name;
    });

    if (!disease) {
        return null; // Or you could return a default caption or message
    }

    return (
        <div className="diseases-caption">
            <div className="page-caption-text">
                <Link to="/">Home</Link> <span>/</span>
                <Link to="/Services/Diseases-Symptoms">Diseases & Symptoms</Link> 
                <h5>{disease.name}</h5>
            </div>
            <CaptionUnderline />
        </div>
    );
};

export default DiseasesCaption;
