import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CaptionUnderline from './CaptionUnderline';
import { useDoctors } from './DepartmentProvider';

const DoctorsCaption = () => {
    const { doctorName } = useParams();
    const doctors = useDoctors();

    // Decode the doctorName from the URL
    const decodedDoctorName = decodeURIComponent(doctorName);

    // Find the doctor based on the name from the URL
    const doctor = doctors.find(dep => {
        const formattedName = dep.doctorName.replace(/\s+/g, '-').toLowerCase();
        return formattedName === decodedDoctorName.replace(/\s+/g, '-').toLowerCase();
    });

    if (!doctor) {
        return null; // Or you could return a default caption or message
    }

    return (
        <div className="doctors-caption">
            <div className="page-caption-text">
                <Link to="/">Home</Link> <span>/</span>
                <Link to="/About/Find-Doctor">Find a Doctor</Link> 
                <h5>{doctor.doctorName}</h5>
            </div>
            <CaptionUnderline />
        </div>
    );
};

export default DoctorsCaption;
