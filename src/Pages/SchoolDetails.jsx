import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useSchools } from '../Components/DepartmentProvider';
import SchoolsCaption from '../Components/SchoolsCaption';
import DoctorsContainer from '../Components/DoctorsContainer';
import { ClipLoader } from 'react-spinners';

const SchoolDetails = () => {
    const { schoolName } = useParams();
    const schools = useSchools();

    const school = schools.find(dep => {
        const formattedName = dep.schoolName.replace(/\s+/g, '-').toLowerCase();
        return formattedName === schoolName;
    });

    if (!school) {
        return (
            <div className="loading-spinner loading">
                <ClipLoader color="#005046" size={100} />
            </div>
        );
    }

    // Ensure that these variables are arrays
    const functions = Array.isArray(school.function) ? school.function : [];
    const services = Array.isArray(school.services) ? school.services : [];
    const ruralPosting = Array.isArray(school.ruralPosting) ? school.ruralPosting : ["Currently unavailable"];
    const clinicalPosting = Array.isArray(school.clinicalPosting) ? school.clinicalPosting : ["Currently unavailable"];
    const specialTraining = Array.isArray(school.specialTraining) ? school.specialTraining : ["Currently unavailable"];

    return (
        <div>
            <SchoolsCaption />
            <div className="back-button">
                <FontAwesomeIcon icon={faChevronLeft} className="list-icon" />
                <Link to="/about/our-schools">Back</Link>
            </div>
            <div className="department-details">
                <div className="department-overview-container">
                    <div className="departments-overview">
                        <h5>{school.schoolName} Overview</h5>
                        <p>{school.overviewText}</p>
                    </div>
                    <div className="departments-poster">
                        <img src={school.schoolImage} alt={school.schoolName} />
                    </div>
                </div>
                
                <div className='departments-vision'>
                    <h5>Major Function of {school.schoolName}</h5>
                    <ul>
                        {functions.map((func, index) => (
                            <p key={index}>
                                {func}
                            </p>
                        ))}
                    </ul>

                    <h5>Location</h5>
                    <p>{school.location}</p>

                    <h5>Vision</h5>
                    <p>{school.vision}</p>

                    <h5>Mission</h5>
                    <p>{school.mission}</p>
                    
                    <h5>Services Rendered by {school.schoolName}</h5>
                    <ul>
                        {services.map((service, index) => (
                            <p key={index}>
                                {service}
                            </p>
                        ))}
                    </ul>
                </div>
                <div className="departments-facilities">
                    <h5>Postings</h5>
                    <h6>Rural/Urban Postings</h6>
                    <ul>
                        {ruralPosting.map((rural, index) => (
                            <li key={index}>
                                <FontAwesomeIcon icon={faChevronRight} className="list-icon" />
                                {rural}
                            </li>
                        ))}
                    </ul>
                    <h6>Clinical Postings</h6>
                    <ul>
                        {clinicalPosting.map((clinical, index) => (
                            <li key={index}>
                                <FontAwesomeIcon icon={faChevronRight} className="list-icon" />
                                {clinical}
                            </li>
                        ))}
                    </ul>
                    <h6>Special Trainings</h6>
                    <ul>
                        {specialTraining.map((training, index) => (
                            <li key={index}>
                                <FontAwesomeIcon icon={faChevronRight} className="list-icon" />
                                {training}
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
