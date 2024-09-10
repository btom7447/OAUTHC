import React from "react";
import { Link } from 'react-router-dom';
import { ClipLoader } from "react-spinners";

const SchoolList = ({ schools }) => {
    // If schools is not yet loaded or is an empty array, show the loading spinner
    if (!schools || schools.length === 0) {
        return (
            <div className="loading-spinner loading">
                <ClipLoader color="#005046" size={100} />
            </div>
        );
    }

    const displayedSchools = schools
    return (
        <div className="departments-log">
            <div className="departments-container">
                {displayedSchools.map(({ schoolImage, schoolName }, index) => (
                    <div key={index} className="department">
                        <Link to={`/school-details/${schoolName.replace(/\s+/g, '-').toLowerCase()}`}>
                            <img src={schoolImage} alt={schoolName} />
                            <div className="department-caption">
                                <h5>{schoolName}</h5>
                            </div>
                        </Link>
                    </div>
                ))}
                <div className="school-gap"></div>
            </div>
        </div>
    );
};

export default SchoolList;
