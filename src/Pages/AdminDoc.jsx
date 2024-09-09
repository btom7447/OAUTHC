import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from 'react-dropzone'; 
import DoctorsDetailsInput from "../Components/DoctorsDetailsInput"; 
import DoctorsDetailsPublish from "../Components/DoctorsDetailsPublish";

const AdminDoctorsDetails = () => {
    const { name } = useParams();
    const { doctorsData, updateDoctor } = useUser(); 
    const navigate = useNavigate();

    const isCreating = !name;

    const doctor = !isCreating && doctorsData.length > 0 
        ? doctorsData.find(doctor => doctor.name && doctor.name.toLowerCase().replace(/\s+/g, '-') === name) 
        : null;

    const [formData, setFormData] = useState({
        name: doctor?.name || '',
        overviewText: doctor?.overviewText || '',
        accomplishments: doctor?.accomplishments || '',
        specialties: doctor?.specialties?.map(speciality => ({ label: speciality, value: speciality })) || [],
        email: doctor?.email || '',
        doctorImage: doctor?.doctorImage || '',
        departments: doctor?.departments?.map(department => ({ label: department, value: department })) || [],
        units: doctor?.units?.map(units => ({ label: unit, value: unit })) || [],
        qualifications: doctor?.qualifications?.map(qualification => ({ label: qualification, value: qualification })) || [],
        gender: doctor?.gender || '',
        clinicDay: doctor?.clinicDay || '',
    });
        
    useEffect(() => {
        if (doctor) {
            setFormData({
                name: doctor?.name || '',
                overviewText: doctor?.overviewText || '',
                accomplishments: doctor?.accomplishments || '',
                specialties: doctor?.specialties?.map(speciality => ({ label: speciality, value: speciality })) || [],
                email: doctor?.email || '',
                doctorImage: doctor?.doctorImage || '',
                departments: doctor?.departments?.map(department => ({ label: department, value: department })) || [],
                units: doctor?.units?.map(units => ({ label: units, value: units })) || [],
                qualifications: doctor?.qualifications?.map(qualification => ({ label: qualification, value: qualification })) || [],
                gender: doctor?.gender || '',
                clinicDay: doctor?.clinicDay || '',
            });
        }
    }, [doctor, name]);

    const specialtiesFromDoctorsData = [...new Set(
        doctorsData.flatMap(doctor => 
            Array.isArray(doctor.specialty) ? doctor.specialty : []
        )
    )].sort((a, b) => a.localeCompare(b));

    const defaultSpecialtiesOptions = specialtiesFromDoctorsData.map(specialty => ({
        value: specialty,
        label: specialty
    })) || [];

    const departmentsFromDoctorsData = [...new Set(
        doctorsData.flatMap(doctor => 
            Array.isArray(doctor.department) ? doctor.department : []
        )
    )].sort((a, b) => a.localeCompare(b));

    const defaultDepartmentsOptions = departmentFromDoctorsData.map(department => ({
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

    const unitsFromDoctorsData = [...new Set(
        doctorsData.flatMap(doctor => 
            Array.isArray(doctor.unit) ? doctor.unit : []
        )
    )].sort((a, b) => a.localeCompare(b));

    const defaultUnitsOptions = qualificationsFromDoctorsData.map(unit => ({
        value: unit,
        label: unit
    })) || [];


    const statusOptions = [
        { value: 'publish', label: 'Publish' },
        { value: 'draft', label: 'Draft' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSelectChange = (newValue) => {
        setFormData(prevData => ({
            ...prevData,
            services: newValue
        }));
    };

    const handleSave = async () => {
        try {
            const method = isCreating ? 'POST' : 'PUT';
            const url = isCreating
                ? 'https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/create/doctor'
                : `https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/create/doctor/${healthService.id}`;

            formdata.append("name", formData.name || '');
            formdata.append("gender", formData.gender || '');
            formdata.append("email", formData.email || '');
            formdata.append("clinic_day", formData.clinic_day || '');
            formdata.append("text_desc", formData.text_desc || '');
            formdata.append("accomplishment", formData.accomplishments || '');
            formdata.append("linkdin", formData.linkedin || '');
            formdata.append("instagram", formData.instagram || '');
            formdata.append("twitter", fomrData.twitter || '');
            formdata.append("facebook", formData.facebook || '');

            formData.services.forEach((department, index) => {
                formDataToSend.append(`department[${index}]`, department.value);
            });

            formData.speciality.forEach((specialty, index) => {
                formDataToSend.append(`specialty[${index}]`, specialty.value);
            });

            formData.services.forEach((qualification, index) => {
                formDataToSend.append(`qualification[${index}]`, qualification.value);
            });

            formData.services.forEach((unit, index) => {
                formDataToSend.append(`unit[${index}]`, unit.value);
            });

            if (formData.doctorImage) {
                formDataToSend.append('doctorImage', formData.doctorImage);
            }

            const response = await fetch(url, {
                method: isUpdate ? 'PUT' : 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formDataToSend,
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error: ${errorData.message || 'Network response was not ok'}`);
            }
    
            const result = await response.json();
            console.log('Save successful:', result);
            navigate('/admin/doctors'); 
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };


    const handleDrop = (acceptedFiles) => {
        if (acceptedFiles.length <= 1) {
            const newImage = acceptedFiles[0];
            setFormData(prevData => ({
                ...prevData,
                doctorImage: newImage ? URL.createObjectURL(newImage) : prevData.doctorImage,
            }));
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleDrop,
        maxFiles: 1
    });

    const handleRemoveImage = () => {
        setFormData(prevData => ({
            ...prevData,
            doctorImage: ''
        }));
    };

    if (!doctorsData || doctorsData.length === 0) {
        return <div className="loading">Loading...</div>; 
    }

    return (
        <>
            <div className="pages-caption">
                <h1>Health Services</h1>
            </div>
            <div className="back">
                <FontAwesomeIcon icon={faChevronLeft} />
                <Link to="/admin/health-services">
                    Back
                </Link>
            </div>
            <div className="admin-pages-caption">
                <h2>{isCreating ? 'Create New Doctor Profile' : `Edit "${doctor.name}"`}</h2>
            </div>
            <div className="service-details-page">
                <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                    <div className="details-page-section">
                        <DoctorsDetailsInput
                            formData={formData}
                            handleInputChange={handleInputChange}
                            handleSelectChange={handleSelectChange}
                            genderOptions={genderOptions}
                            defaultDepartmentsOptionsOptions={defaultDepartmentOptions}
                            defaultQualificationsOptions={defaultQualificationsOptions}
                            defaultSpecialtiesOptions={defaultSpecialtiesOptions}
                            defaultUnitsOptions={defaultUnitsOptions}
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
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default AdminDoctorsDetails;