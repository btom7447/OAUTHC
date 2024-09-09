import React from 'react';
import { Link } from 'react-router-dom';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { useHealthServices } from './ServiceProvider';
import HealthServicesCaption from './HealthServiceCaption';
import DoctorsContainer from './DoctorsContainer';

const ServicesDetails = () => {
    const { name } = useParams();
    const healthServices = useHealthServices();

    // Find the selected service
    const selectedService = healthServices.find(service => {
        const formattedName = service.name.replace(/\s+/g, '-').toLowerCase();
        return formattedName === name;
    });

    // Check if selectedService is found and has the necessary properties
    if (!selectedService) {
        return <p>Service not found.</p>;
    }

    return (
        <div>
            <HealthServicesCaption />
            <div className="back-button">
                <FontAwesomeIcon icon={faChevronLeft} className="list-icon" />
                <Link to="/services/health-services">Back</Link>
            </div>
            <div className="department-details">
                <div className="department-overview-container">
                    <div className="departments-overview">
                        <h5>{selectedService.name} Overview</h5>
                        {/* Ensure 'texts' exists and is an array */}
                        {Array.isArray(selectedService.texts) && selectedService.texts.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="departments-poster">
                        <img src={selectedService.servicesImage} alt={selectedService.name} />
                    </div>
                </div>
                <div className="departments-facilities">
                    <h5>{selectedService.name} Services</h5>
                    <ul>
                        {/* Ensure 'highlights' exists and is an array */}
                        {Array.isArray(selectedService.highlights) && selectedService.highlights.map((facility, index) => (
                            <li key={index}>
                                <FontAwesomeIcon icon={faChevronRight} className="list-icon" />
                                {facility}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <DoctorsContainer />
        </div>
    );
};

export default ServicesDetails;
