import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CaptionUnderline from './CaptionUnderline';
import { useHealthServices } from './ServiceProvider';

const HealthServicesCaption = () => {
    const { name } = useParams();
    const healthServices = useHealthServices();

    const service = healthServices.find(service => {
        const formattedName = service.name.replace(/\s+/g, '-').toLowerCase();
        return formattedName === name;
    });

    if (!service) {
        return null; // Or you could return a default caption or message
    }

    return (
        <div className="health-services-caption">
            <div className="page-caption-text">
                <Link to="/">Home</Link> <span>/</span>
                <Link to="/services/health-services">Health Services</Link>
                <h5>{service.name}</h5>
            </div>
            <CaptionUnderline />
        </div>
    );
};

export default HealthServicesCaption;
