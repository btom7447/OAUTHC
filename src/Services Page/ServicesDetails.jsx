import React from 'react';
import { Link } from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useHealthServices } from '../Services Page/ServiceProvider';
import HealthServicesCaption from './HealthServiceCaption';
import DoctorsContainer from '../AboutUs Page/DoctorsContainer';

const ServicesDetails = () => {
    const { name } = useParams();
    const healthServices = useHealthServices();

    const selectedService = healthServices.find(dep => {
        const formattedName = dep.name.replace(/\s+/g, '-').toLowerCase();
        return formattedName === name;
    });

    if (!selectedService) {
        return <p>Service not found.</p>;
    }

    return (
        <div>
            <HealthServicesCaption />
            <div className="back-button">
                <FontAwesomeIcon icon={faChevronLeft} className="list-icon" />
                <Link to="/Services/Health-Services">Back</Link>
            </div>
            <div className="department-details">
                <div className="department-overview-container">
                    <div className="departments-overview">
                        <h5>{selectedService.name} Overview</h5>
                        {/* Assuming text is an array of paragraphs */}
                        {selectedService.text.map((paragraph, index) => (
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
                        {selectedService.highlights.map((facility, index) => (
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
