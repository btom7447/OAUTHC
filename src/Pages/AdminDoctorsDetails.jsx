import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from 'react-dropzone';
import DoctorsDetailsInputs from "../Components/DoctorsDetailsInput"
import DoctorsDetailsPublish from "../Components/DoctorDetailsPublish";

const AdminDoctorsDetails = () => {
    const { name } = useParams();
    const { doctorsData, updateDoctor } = useUser();

    const doctor = doctorsData.find(doc => doc.name && doc.name.toLowerCase().replace(/\s+/g, '-') === name);

    // Extract doctorId if doctor is found
    const doctorId = doctor ? doctor.id : null;
    
    const specialtiesFromDoctorsData = [...new Set(
        doctorsData.flatMap(doctor => 
            Array.isArray(doctor.specialty) ? doctor.specialty : []
        )
    )].sort((a, b) => a.localeCompare(b));

    const defaultSpecialtiesOptions = specialtiesFromDoctorsData.map(specialty => ({
        value: specialty,
        label: specialty
    })) || [];

    const departmentFromDoctorsData = [...new Set(
        doctorsData.flatMap(doctor => 
            Array.isArray(doctor.department) ? doctor.department : []
        )
    )].sort((a, b) => a.localeCompare(b));

    const defaultDepartmentOptions = departmentFromDoctorsData.map(department => ({
        value: department,
        label: department
    })) || [];

    const qualificationsFromDoctorsData = [...new Set(
        doctorsData.flatMap(doctor => 
            Array.isArray(doctor.qualification) ? doctor.qualification : []
        )
    )].sort((a, b) => a.localeCompare(b));

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
                name: doctor.name || '',
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

    
    const handleSave = (e) => {
        e.preventDefault();
        if (doctorId) {
            const updatedData = {
                ...formData,
                specialties: formData.specialties.map(spec => spec.value),
                departments: formData.departments.map(dep => dep.value),
                qualifications: formData.qualifications.map(qual => qual.value)
            };
            updateDoctor(doctorId, updatedData);
        }
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

    return (
        <form onSubmit={handleSave} encType="multipart/form-data">
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
                <h2>{doctor ? `Edit "${doctor.name}"` : "Create New Doctor"}</h2>
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
        </form>
    );
};

export default AdminDoctorsDetails;