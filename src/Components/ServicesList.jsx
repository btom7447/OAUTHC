import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import HealthServiceText from "./HealthServiceText";

const ServicesList = ({ healthServices }) => {
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [fade, setFade] = useState(false);

    const totalPages = Math.ceil(healthServices.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedServices = healthServices.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setFade(true);
            setTimeout(() => {
                setCurrentPage(pageNumber);
                setFade(false);
            }, 500);
        }
    };

    return (
        <div className="services-log">
            <HealthServiceText />
            <div className={`services-container ${fade ? 'fade-enter' : 'fade-enter-active'}`}>
                {displayedServices.map(({ servicesImage, name }, index) => (
                    <div key={index} className="service">
                        <Link to={`/Services-Details/${name.replace(/\s+/g, '-').toLowerCase()}`}>
                            <img src={servicesImage} alt={name} />
                            <div className="service-caption">
                                <h5>{name}</h5>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="services-pagination">
                <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                >
                <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>{`Page ${currentPage} of ${totalPages}`}</span>
                <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                >
                <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
};

export default ServicesList;