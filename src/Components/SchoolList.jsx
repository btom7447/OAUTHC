import React from "react";
import { Link } from 'react-router-dom';

const SchoolList = ({ schools }) => {
    const displayedSchools = schools
    return (
        <div className="departments-log">
            <div className="departments-container">
                {displayedSchools.map(({ schoolImage, schoolName }, index) => (
                    <div key={index} className="department">
                        <Link to={`/School-Details/${schoolName.replace(/\s+/g, '-').toLowerCase()}`}>
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
