import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CaptionUnderline from '../General Components/CaptionUnderline';
import { useDepartments } from './DepartmentProvider';

const DepartmentCaption = () => {
    const { departmentName } = useParams();
    const departments = useDepartments();

    const department = departments.find(dep => {
        const formattedName = dep.departmentName.replace(/\s+/g, '-').toLowerCase();
        return formattedName === departmentName;
    });

    if (!department) {
        return null; // Or you could return a default caption or message
    }

    return (
        <div className="departments-caption">
            <div className="page-caption-text">
                <Link to="/">Home</Link> <span>/</span>
                <Link to="/About/Departments-Centers">Departments & Centers</Link>
                <h5>{department.departmentName}</h5>
            </div>
            <CaptionUnderline />
        </div>
    );
};

export default DepartmentCaption;
