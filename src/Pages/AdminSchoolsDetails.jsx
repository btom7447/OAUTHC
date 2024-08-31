import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from 'react-dropzone'; 
import SchoolDetailsInput from "../Components/SchoolsDetailsInput";
import SchoolsDetailsPublish from "../Components/SchoolsDetailsPublish";

const AdminSchoolsDetails = () => {
    const { name } = useParams();
    const { schoolsData, updateSchool } = useUser();
    const navigate = useNavigate();

    const isCreating = !name;

    const school = !isCreating && schoolsData.length > 0 
        ? schoolsData.find(sch => sch.name && sch.name.toLowerCase().replace(/\s+/g, '-') === name) 
        : null;

    const [formData, setFormData] = useState({
        name: school?.name || '',
        overviewText: school?.overviewText || '',
        description: school?.description || '',
        facilitiesText: school?.facilitiesText || '',
        facilities: school?.facilities?.map(facility => ({ label: facility, value: facility })) || [],
        faculties: school?.faculties?.map(faculty => ({ label: faculty, value: faculty })) || [],
        schoolImage: school?.schoolImage || '',
        dateCreated: school?.dateCreated || '',
    });

    useEffect(() => {
        if (school) {
            setFormData({
                name: school.name || '',
                overviewText: school.overviewText || '',
                description: school.description || '',
                facilitiesText: school.facilitiesText || '',
                facilities: school.facilities?.map(facility => ({ label: facility, value: facility })) || [],
                faculties: school.faculties?.map(faculty => ({ label: faculty, value: faculty })) || [],
                schoolImage: school.schoolImage || '',
                dateCreated: school.dateCreated || '',
            });
        }
    }, [school, name]);

    const allFacilities = Array.from(
        new Set(schoolsData.flatMap(sch => sch.facilities || []))
    ).sort();

    const allFaculties = Array.from(
        new Set(schoolsData.flatMap(sch => sch.faculties || []))
    ).sort();

    const defaultFacilitiesOptions = allFacilities.map(facility => ({ label: facility, value: facility }));
    const defaultFacultiesOptions = allFaculties.map(faculty => ({ label: faculty, value: faculty }));

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

    const handleSelectChange = (newValue, category) => {
        setFormData(prevData => ({
            ...prevData,
            [category]: newValue
        }));
    };

    const handleSave = async () => {
        try {
            const method = isCreating ? 'POST' : 'PUT';
            const url = isCreating
                ? 'https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/school'
                : `https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/school/${school.id}`;
    
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('overviewText', formData.overviewText);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('facilitiesText', formData.facilitiesText);
            formData.facilities.forEach(facility => formDataToSend.append('facilities[]', facility.value));
            formData.faculties.forEach(faculty => formDataToSend.append('faculties[]', faculty.value));
    
            if (formData.schoolImage) {
                formDataToSend.append('schoolImage', formData.schoolImage);
            }
    
            const response = await fetch(url, {
                method,
                body: formDataToSend,
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            console.log('Save successful:', result);
    
            if (!isCreating) {
                updateSchool(school.id, result);
            }
    
            navigate('/admin/schools');
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    const handleDrop = (acceptedFiles) => {
        if (acceptedFiles.length <= 1) {
            const newImage = acceptedFiles[0];
            setFormData(prevData => ({
                ...prevData,
                schoolImage: newImage ? URL.createObjectURL(newImage) : prevData.schoolImage,
            }));
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleDrop,
        maxFiles: 1 // Should be 1 if only one image is allowed
    });

    const handleRemoveImage = () => {
        setFormData(prevData => ({
            ...prevData,
            schoolImage: ''
        }));
    };

    if (!schoolsData || schoolsData.length === 0) {
        return <div className="loading">Loading...</div>; 
    }

    return (
        <>
            <div className="pages-caption">
                <h1>Pages</h1>
            </div>
            <div className="back">
                <FontAwesomeIcon icon={faChevronLeft} />
                <Link to="/admin/schools">
                    Back
                </Link>
            </div>
            <div className="admin-pages-caption">
            <h2>{isCreating ? 'Create New School' : `Edit "${school.name}"`}</h2>
            </div>
            <div className="department-details-page">
                <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                    <div className="details-page-section">
                        <SchoolDetailsInput
                            formData={formData}
                            handleInputChange={handleInputChange}
                            handleSelectChange={handleSelectChange}
                            defaultFacilitiesOptions={defaultFacilitiesOptions}
                            defaultFacultiesOptions={defaultFacultiesOptions}
                        />
                        <SchoolsDetailsPublish 
                            schoolImage={formData.schoolImage} 
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
                </form>
            </div>
        </>
    );
};

export default AdminSchoolsDetails;
