import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CaptionUnderline from '../Components/CaptionUnderline';
import { useSchools } from './DepartmentProvider';

const SchoolsCaption = () => {
    const { schoolName } = useParams();
    const schools = useSchools();

    const school = schools.find(dep => {
        const formattedName = dep.schoolName.replace(/\s+/g, '-').toLowerCase();
        return formattedName === schoolName;
    });

    if (!school) {
        return null; // Or you could return a default caption or message
    }

    return (
        <div className="schools-caption">
            <div className="page-caption-text">
                <Link to="/">Home</Link> <span>/</span>
                <Link to="/About/our-schools">Our Schools</Link> <span>/</span>
                <h5>{school.schoolName}</h5>
            </div>
            <CaptionUnderline />
        </div>
    );
};

export default SchoolsCaption;
