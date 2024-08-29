import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from 'react-dropzone'; 
import DoctorsDetailsInputs from "../Components/DoctorsDetailsInput"; 
import DoctorsDetailsPublish from "../Components/DoctorDetailsPublish";

const AdminDoctorsDetails = () => {
    const { doctorName } = useParams();
    const { doctorsData, updateDoctor } = useUser();

    // Find the specific doctor based on URL params
    const doctor = doctorsData.find(doc => doc.doctorName && doc.doctorName.toLowerCase().replace(/\s+/g, '-') === doctorName);

    // Extract unique specialties from doctorsData
    const specialtiesFromDoctorsData = [...new Set(
        doctorsData.flatMap(doctor => 
            Array.isArray(doctor.specialty) ? doctor.specialty : []
        )
    )].sort((a, b) => a.localeCompare(b));

    // Populate defaultSpecialtiesOptions with specialties from doctorsData
    const defaultSpecialtiesOptions = specialtiesFromDoctorsData.map(specialty => ({
        value: specialty,
        label: specialty
    })) || [];

    // Extract unique departments from doctorsData
    const departmentFromDoctorsData = [...new Set(
        doctorsData.flatMap(doctor => 
            Array.isArray(doctor.department) ? doctor.department : []
        )
    )].sort((a, b) => a.localeCompare(b));

    // Populate defaultSpecialtiesOptions with specialties from doctorsData
    const defaultDepartmentOptions = departmentFromDoctorsData.map(department => ({
        value: department,
        label: department
    })) || [];

    // Extract unique qualifications from doctorsData
    const qualificationsFromDoctorsData = [...new Set(
        doctorsData.flatMap(doctor => 
            Array.isArray(doctor.qualification) ? doctor.qualification : []
        )
    )].sort((a, b) => a.localeCompare(b));

    // Populate defaultQualificationsOptions with qualifications from doctorsData
    const defaultQualificationsOptions = qualificationsFromDoctorsData.map(qualification => ({
        value: qualification,
        label: qualification
    })) || [];

    const statusOptions = [
        { value: 'publish', label: 'Publish' },
        { value: 'draft', label: 'Draft' }
    ];

    const [formData, setFormData] = useState({
        name: '',
        overviewText: '',
        accomplishments: '',
        specialties: [],
        phone: '',
        email: '',
        status: null,
        doctorImage: '',
        images: [],
        departments: [],
        qualifications: []
    });

    useEffect(() => {
        if (doctor) {
            setFormData({
                name: doctor.doctorName || '',
                overviewText: doctor.overviewText || '',
                accomplishments: doctor.accomplishments || '',
                specialties: doctor.specialty ? doctor.specialty.map(spec => ({ value: spec, label: spec })) : [],
                phone: doctor.phone || '',
                facebook: doctor.facebook || '', 
                linkedIn: doctor.linkedIn || '', 
                twitter: doctor.twitter || '', 
                instagram: doctor.instagram || '',
                email: doctor.email || '',
                status: doctor.status ? { value: doctor.status.toLowerCase(), label: doctor.status.charAt(0).toUpperCase() + doctor.status.slice(1) } : null,
                doctorImage: doctor.doctorImage || '',
                images: doctor.images || [],
                departments: doctor.department ? doctor.department.map(dep => ({ value: dep, label: dep })) : [],
                qualifications: doctor.qualification ? doctor.qualification.map(qual => ({ value: qual, label: qual })) : []
            });
        }
    }, [doctor]);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSelectChange = (newValue, category) => {
        setFormData(prevData => ({
            ...prevData,
            [category]: newValue
        }));
    };

    const handleSave = () => {
        const updatedData = {
            ...formData
        };
        updateDoctor(doctorName, updatedData);
    };

    const handleDrop = (acceptedFiles) => {
        if (acceptedFiles.length + formData.images.length <= 2) {
            setFormData(prevData => {
                const newImages = [
                    ...prevData.images,
                    ...acceptedFiles.map(file => Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    }))
                ];
                return {
                    ...prevData,
                    images: newImages,
                    doctorImage: newImages[0] ? newImages[0].preview : prevData.doctorImage
                };
            });
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleDrop,
        maxFiles: 2
    });

    const handleRemoveImage = (index) => {
        setFormData(prevData => {
            const newImages = prevData.images.filter((_, i) => i !== index);
            return {
                ...prevData,
                images: newImages,
                doctorImage: newImages.length > 0 ? newImages[0].preview : ''
            };
        });
    };

    if (!doctor) {
        return <div>Doctor not found</div>;
    }

    return (
        <>
            <div className="pages-caption">
                <h1>Pages</h1>
            </div>
            <div className="back">
                <FontAwesomeIcon icon={faChevronLeft} />
                <Link to="/admin/doctors">
                    Back
                </Link>
            </div>
            <div className="admin-pages-caption">
                <h2>Edit "{doctor.doctorName}"</h2>
            </div>
            <div className="doctor-details-page">
                <div className="details-page-section">
                    <DoctorsDetailsInputs
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleSelectChange={handleSelectChange}
                        defaultSpecialtiesOptions={defaultSpecialtiesOptions}
                        defaultDepartmentOptions={defaultDepartmentOptions}
                        defaultQualificationsOptions={defaultQualificationsOptions}
                    />
                    <DoctorsDetailsPublish
                        doctorImage={formData.doctorImage}
                        formData={formData}
                        handleSave={handleSave}
                        handleDrop={handleDrop}
                        getRootProps={getRootProps}
                        getInputProps={getInputProps}
                        handleRemoveImage={handleRemoveImage}
                        statusOptions={statusOptions}
                        handleSelectChange={handleSelectChange}
                    />
                </div>
            </div>
        </>
    );
};

export default AdminDoctorsDetails;
