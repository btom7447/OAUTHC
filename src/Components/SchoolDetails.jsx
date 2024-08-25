import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useSchools } from './DepartmentProvider';
import SchoolsCaption from './SchoolsCaption';
import DoctorsContainer from './DoctorsContainer';

const SchoolDetails = () => {
    const { schoolName } = useParams();
    const schools = useSchools();

    const school = schools.find(dep => {
        const formattedName = dep.schoolName.replace(/\s+/g, '-').toLowerCase();
        return formattedName === schoolName;
    });

    if (!school) {
        return <p>School not found.</p>;
    }

    return (
        <div>
            <SchoolsCaption />
            <div className="back-button">
                <FontAwesomeIcon icon={faChevronLeft} className="list-icon" />
                <Link to="/About/our-schools">Back</Link>
            </div>
            <div className="department-details">
                <div className="department-overview-container">
                    <div className="departments-overview">
                        <h5>{school.schoolName} Overview</h5>
                        <h6>{school.overviewText}</h6>
                        <p>{school.description}</p>
                    </div>
                    <div className="departments-poster">
                        <img src={school.schoolImage} alt={school.schoolName} />
                    </div>
                </div>
                <div className="departments-facilities">
                    <h5>{school.schoolName} Facilities</h5>
                    <p>{school.facilities}</p>
                    <ul>
                        {school.services.map((service, index) => (
                            <li key={index}>
                                <FontAwesomeIcon icon={faChevronRight} className="list-icon" />
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="departments-contacts">
                    <h5>{school.schoolName} Faculties</h5>
                    <p>{school.contactInfo}</p>
                </div>
            </div>
            <DoctorsContainer />
        </div>
    );
};

export default SchoolDetails;