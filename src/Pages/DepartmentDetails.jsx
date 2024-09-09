import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useDepartments } from '../Components/DepartmentProvider';
import DepartmentCaption from '../Components/DepartmentCaption';
import DepartmentDoctorsContainer from '../Components/DepartmentDoctorsContainer';
import { ClipLoader } from 'react-spinners';

const DepartmentDetails = () => {
    const { departmentName } = useParams();
    const departments = useDepartments();

    // Safely find the department by name
    const department = departments?.find(dep => {
        const formattedName = dep.departmentName.replace(/\s+/g, '-').toLowerCase();
        return formattedName === departmentName;
    });

    // If department is not found, display an error message
    if (!department) {
        return (
            <div className="loading-spinner loading">
                <ClipLoader color="#005046" size={100} />
            </div>
        );
    }

    return (
        <div>
            <DepartmentCaption />
            <div className="back-button">
                <FontAwesomeIcon icon={faChevronLeft} className="list-icon" />
                <Link to="/about/departments-centers">Back</Link>
            </div>
            <div className="department-details">
                <div className="department-overview-container">
                    <div className="departments-overview">
                        <h5>{department.departmentName} Department</h5>
                        <h6>{department.overviewText}</h6>
                        <p>{department.text}</p>
                    </div>
                    <div className="departments-poster">
                        <img src={department.departmentImage} alt={department.departmentName} />
                    </div>
                </div>
                <div className="departments-facilities">
                    <h5>Facilities & Technology</h5>
                    <ul>
                        {/* Use optional chaining to safely access the map function */}
                        {department.facilities?.map((facility, index) => (
                            <li key={index}>
                                <FontAwesomeIcon icon={faChevronRight} className="list-icon" />
                                {facility}
                            </li>
                        ))}
                    </ul>
                    <h5>Services Offered</h5>
                    <ul>
                        {/* Use optional chaining to safely access the map function */}
                        {department.services?.map((service, index) => (
                            <li key={index}>
                                <FontAwesomeIcon icon={faChevronRight} className="list-icon" />
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="departments-contacts">
                    <h5>Contact Information</h5>
                    <p>Department Phone: {department.phone}</p>
                </div>
            </div>
            <DepartmentDoctorsContainer departmentName={department.departmentName} />
        </div>
    );
};

export default DepartmentDetails;
