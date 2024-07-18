import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useDepartments } from './DepartmentProvider';
import DepartmentCaption from './DepartmentCaption';
import DoctorsContainer from './DoctorsContainer';

const DepartmentDetails = () => {
    const { departmentName } = useParams();
    const departments = useDepartments();

    const department = departments.find(dep => {
        const formattedName = dep.departmentName.replace(/\s+/g, '-').toLowerCase();
        return formattedName === departmentName;
    });

    if (!department) {
        return <p>Department not found.</p>;
    }

    return (
        <div>
            <DepartmentCaption />
            <div className="back-button">
                <FontAwesomeIcon icon={faChevronLeft} className="list-icon" />
                <Link to="/About/Departments-Centers">Back</Link>
            </div>
            <div className="department-details">
                <div className="department-overview-container">
                    <div className="departments-overview">
                        <h5>{department.departmentName} Department</h5>
                        <h6>{department.overviewText}</h6>
                        <p>{department.team}</p>
                    </div>
                    <div className="departments-poster">
                        <img src={department.departmentImage} alt={department.departmentName} />
                    </div>
                </div>
                <div className="departments-facilities">
                    <h5>{department.departmentName} Department Facilities & Technology</h5>
                    <ul>
                        {department.facilities.map((service, index) => (
                            <li key={index}>
                                <FontAwesomeIcon icon={faChevronRight} className="list-icon" />
                                {service}
                            </li>
                        ))}
                    </ul>
                    <h5>Services Offered</h5>
                    <ul>
                        {department.services.map((service, index) => (
                            <li key={index}>
                                <FontAwesomeIcon icon={faChevronRight} className="list-icon" />
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="departments-contacts">
                    <h5> Contact Information</h5>
                    <p>Department Phone: {department.phone}</p>
                </div>
            </div>
            <DoctorsContainer />
        </div>
    );
};

export default DepartmentDetails;