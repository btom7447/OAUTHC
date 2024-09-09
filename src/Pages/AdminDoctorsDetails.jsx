
import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from 'react-dropzone'; 
import DoctorsDetailsInputs from "../Components/DoctorsDetailsInput"; 
import DoctorsDetailsPublish from "../Components/DoctorDetailsPublish";

const AdminDoctorsDetails = () => {
    const { name } = useParams();
    const { doctorsData, updateDoctor } = useUser();
    const { departmentsData, unitsData } = useUser();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [toastId, setToastId] = useState(null); // Track toast ID to prevent duplicates

    const isCreating = !name;
    const doctor = !isCreating && doctorsData.length > 0 
        ? doctorsData.find(doc => doc.name && doc.name.toLowerCase().replace(/\s+/g, '-') === name) 
        : null;
    const doctorId = doctor ? doctor.id : null;
    const doctorName = doctor ? doctor.name : "";

    const specialtiesFromDoctorsData = [...new Set(
        doctorsData.flatMap(doctor =>
            Array.isArray(doctor.specialty) ? doctor.specialty : []
        )
    )].sort((a, b) => a.localeCompare(b));

    const defaultSpecialtiesOptions = specialtiesFromDoctorsData.map(specialty => ({
        value: specialty,
        label: specialty
    })) || [];

    const defaultDepartmentOptions = departmentsData.map(department => ({
        value: department.id,
        label: department.name
    }));
    
    const defaultUnitsOptions = unitsData.map(unit => ({
        value: unit.id,
        label: unit.name
    }));

    const qualificationsFromDoctorsData = [...new Set(
        doctorsData.flatMap(doctor =>
            Array.isArray(doctor.qualification) ? doctor.qualification : []
        )
    )].sort((a, b) => a.localeCompare(b));

    const defaultQualificationsOptions = qualificationsFromDoctorsData.map(qualification => ({
        value: qualification,
        label: qualification
    })) || [];

    const clinicDaysFromDoctorsData = [...new Set(
        doctorsData.flatMap(doctor =>
            Array.isArray(doctor.clinicDays) ? doctor.clinicDays : []
        )
    )].sort((a, b) => a.localeCompare(b));
    
    const defaultClinicDaysOptions = clinicDaysFromDoctorsData.map(day => ({
        value: day,
        label: day
    })) || [];
    

    const genderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
    ];

    const statusOptions = [
        { value: 'publish', label: 'Publish' },
        { value: 'draft', label: 'Draft' }
    ];

    const [formData, setFormData] = useState({
        name: doctor?.name || '',
        overviewText: doctor?.overviewText || '',
        accomplishments: doctor?.accomplishments || '',
        specialties: doctor?.specialty?.map(spec => ({ value: spec, label: spec })) || [],
        phone: doctor?.phone || '',
        email: doctor?.email || '',
        status: doctor?.status ? { value: doctor.status.toLowerCase(), label: doctor.status.charAt(0).toUpperCase() + doctor.status.slice(1) } : null,
        doctorImage: doctor?.doctorImage ? URL.createObjectURL(new Blob([doctor.doctorImage])) : '',
        departments: doctor?.department ? departmentsData.filter(dep => doctor.department.includes(dep.name)).map(dep => ({ value: dep.id, label: dep.name })) : [],
        qualifications: doctor?.qualification ? doctor.qualification.map(qual => ({ value: qual, label: qual })) : [],
        units: doctor?.unit ? unitsData.filter(unit => doctor.unit.includes(unit.name)).map(unit => ({ value: unit.id, label: unit.name })) : [],
        gender: doctor?.gender ? [{ value: doctor.gender.toLowerCase(), label: doctor.gender.charAt(0).toUpperCase() + doctor.gender.slice(1) }] : [],
        clinicDays: doctor?.clinicDays || '', 
        images: doctor.images || [],
    });

    useEffect(() => {
        if (doctor) {
            setFormData(prevData => ({
                ...prevData,
                name: doctor.name || '',
                overviewText: doctor.overviewText || '',
                accomplishments: doctor.accomplishments || '',
                specialties: doctor.specialty ? doctor.specialty.map(spec => ({ value: spec, label: spec })) : [],
                phone: doctor.phone || '',
                email: doctor.email || '',
                gender: doctor?.gender ? [{ value: doctor.gender.toLowerCase(), label: doctor.gender.charAt(0).toUpperCase() + doctor.gender.slice(1) }] : [],
                status: doctor.status ? { value: doctor.status.toLowerCase(), label: doctor.status.charAt(0).toUpperCase() + doctor.status.slice(1) } : null,
                departments: doctor.department ? doctor.department.map(dep => ({ value: dep, label: dep })) : [],
                qualifications: doctor.qualification ? doctor.qualification.map(qual => ({ value: qual, label: qual })) : [],
                units: doctor.unit ? doctor.unit.map(unit => ({ value: unit, label: unit })) : [],
                gender: doctor.gender ? [{ value: doctor.gender.toLowerCase(), label: doctor.gender.charAt(0).toUpperCase() + doctor.gender.slice(1) }] : [],
                clinicDays: doctor.clinicDays || '',
                doctorImage: doctor.doctorImage || '',
                images: doctor.images || [],
            }));
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

    const handleSave = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
    
        const id = toast.loading('Saving doctor profile...', { autoClose: false });
        setToastId(id);
    
        try {
            // Validate required fields
            if (!formData.clinicDays.trim()) {
                throw new Error('The clinic day field is required.');
            }
    
            const method = isCreating ? 'POST' : 'POST';
            const url = isCreating
                ? 'https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/create/doctor'
                : `https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/update-doctor/${doctorId}`;
    
            const token = localStorage.getItem('bearer_token');
            if (!token) {
                console.error('No token found. Please log in.');
                toast.update(id, { render: 'No token found. Please log in.', type: 'error', isLoading: false, autoClose: 5000 });
                setLoading(false);
                return;
            }
    
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name || '');
            formDataToSend.append('gender', formData.gender[0]?.value || '');
            formDataToSend.append('email', formData.email || '');
    
            // Handle departments with IDs
            formData.departments.forEach((dept, index) => {
                formDataToSend.append(`department[${index}]`, dept.value);
            });
    
            // Handle specialties
            formData.specialties.forEach((spec, index) => {
                formDataToSend.append(`specialty[${index}]`, spec.value);
            });
    
            // Handle units with IDs
            formData.units.forEach((unit, index) => {
                formDataToSend.append(`unit[${index}]`, unit.value);
            });
    
            // Handle single clinic_day
            formDataToSend.append('clinic_day', formData.clinicDays || '');
    
            // Handle text_desc and other optional fields
            formDataToSend.append('text_desc', formData.overviewText || '');
            formDataToSend.append('accomplishment', formData.accomplishments || '');
    
            // Handle image files
            if (formData.images.length > 0) {
                formData.images.forEach((image, index) => {
                    formDataToSend.append(`images[${index}]`, image);
                });
            }
    
            // Handle doctorImage separately if exists
            if (formData.doctorImage) {
                formDataToSend.append('doctorImage', formData.doctorImage);
            }
    
            formData.images.forEach((image, index) => {
                formDataToSend.append(`images[${index}]`, image);
            });
    
            const response = await fetch(url, {
                method,
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formDataToSend
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to save doctor profile.');
            }
    
            toast.update(id, { render: 'Doctor profile saved successfully!', type: 'success', isLoading: false, autoClose: 5000 });
            navigate('/admin/doctors');
        } catch (error) {
            toast.update(id, { render: `Error: ${error.message}`, type: 'error', isLoading: false, autoClose: 5000 });
        } finally {
            setLoading(false);
        }
    };

    const handleDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (!file) return; // If no file is selected
    
        if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
            console.error('The file must be a PNG or JPG image.');
            return;
        }
    
        const reader = new FileReader();
        reader.onload = () => {
            setFormData((prev) => ({ ...prev, departmentImage: reader.result }));
        };
        reader.readAsDataURL(file);
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
                doctorImage: newImages.length > 0 ? newImages[0].preview : '' // Update doctorImage based on remaining images
            };
        });
    };
    

    if (!doctorsData || doctorsData.length === 0) {
        return <div className="loading">Loading...</div>; 
    }

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
                <h2>{isCreating ? "Create New Doctor Profile" : `Edit "${doctorName}" Profile`}</h2>
            </div>
            <div className="doctor-details-page">
                <div className="details-page-section">
                    <DoctorsDetailsInputs
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleSelectChange={handleSelectChange}
                        genderOptions={genderOptions}
                        defaultSpecialtiesOptions={defaultSpecialtiesOptions}
                        defaultDepartmentOptions={defaultDepartmentOptions}
                        defaultQualificationsOptions={defaultQualificationsOptions}
                        defaultUnitsOptions={defaultUnitsOptions}
                        defaultClinicDaysOptions={defaultClinicDaysOptions}
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
            <div className="save-btn">
                <button type="submit" disabled={loading}>
                    {isCreating ? "Create Doctor Profile" : "Save Doctor Profile"}
                </button>
            </div>
        </form>
    );
};

export default AdminDoctorsDetails;