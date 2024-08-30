import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useSchools } from '../Components/DepartmentProvider';
import SchoolsCaption from '../Components/SchoolsCaption';
import DoctorsContainer from '../Components/DoctorsContainer';

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
                    <p>{school.facilitiesText}</p>
                    <ul>
                        {school.facilities.map((facility, index) => (
                            <li key={index}>
                                <FontAwesomeIcon icon={faChevronRight} className="list-icon" />
                                {facility}
                            </li>
                        ))}
                    </ul>
                    <h5>Faculties of {school.schoolName} </h5>
                    <ul>
                        {school.faculties.map((faculty, index) => (
                            <li key={index}>
                                <FontAwesomeIcon icon={faChevronRight} className="list-icon" />
                                {faculty}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <DoctorsContainer />
        </div>
    );
};

export default SchoolDetails;