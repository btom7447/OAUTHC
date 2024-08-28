import React, { useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from 'react-dropzone'; 
import DoctorsDetailsInputs from "../Components/DoctorsDetailsInput"; 
import DoctorsDetailsPublish from "../Components/DoctorDetailsPublish";

const AdminDoctorsDetails = () => {
    const { doctorName } = useParams();
    console.log(`Doctor name from URL: ${doctorName}`);
    const { doctorsData, updateDoctor } = useUser();

    const doctor = doctorsData.find(doc => doc.doctorName && doc.doctorName.toLowerCase().replace(/\s+/g, '-') === doctorName);

    const defaultSpecialtiesOptions = [
        // your default specialties options
    ];

    const statusOptions = [
        { value: 'publish', label: 'Publish' },
        { value: 'draft', label: 'Draft' }
    ];

    const [formData, setFormData] = useState({
        name: doctor?.doctorName || '',
        specialty: doctor?.specialty || '',
        phone: doctor?.phone || '',
        email: doctor?.email || '',
        status: doctor?.status ? { value: doctor.status.toLowerCase(), label: doctor.status.charAt(0).toUpperCase() + doctor.status.slice(1) } : null,
        doctorImage: doctor?.doctorImage || '',  // Initialize doctorImage
        images: doctor?.images || [],
    });

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
            ...formData,
            // Assuming doctor data does not have arrays like facilities or services
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
                    />
                    <DoctorsDetailsPublish
                        doctorImage={formData.doctorImage}  // Pass doctorImage prop
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
