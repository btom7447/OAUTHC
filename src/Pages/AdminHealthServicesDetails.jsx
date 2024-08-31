import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from 'react-dropzone'; 
import HealthServiceDetailsInput from "../Components/HealthServiceDetailsInput"; // Updated input component
import HealthServiceDetailsPublish from "../Components/HealthServiceDetailsPublish"; // Updated publish component

const AdminHealthServiceDetails = () => {
    const { name } = useParams();
    const { healthServicesData, updateHealthService } = useUser(); // Updated context
    const navigate = useNavigate();

    const isCreating = !name;

    const healthService = !isCreating && healthServicesData.length > 0 
        ? healthServicesData.find(service => service.name && service.name.toLowerCase().replace(/\s+/g, '-') === name) 
        : null;

    const [formData, setFormData] = useState({
        name: healthService?.name || '',
        services: healthService?.services?.map(service => ({ label: service, value: service })) || [],
        text: healthService?.text || [], // Array for text
        servicesImage: healthService?.servicesImage || '',
        overviewText: healthService?.overviewText || '' // Ensure this is included
    });
        
    useEffect(() => {
        if (healthService) {
            setFormData({
                name: healthService.name || '',
                services: healthService.services?.map(service => ({ label: service, value: service })) || [],
                text: healthService?.text || [],
                servicesImage: healthService.servicesImage || '',
            });
        }
    }, [healthService, name]);

    const allServices = Array.from(
        new Set(healthServicesData.flatMap(service => service.services || []))
    ).sort();

    const defaultServicesOptions = allServices.map(service => ({ label: service, value: service }));

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
                ? 'https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/health-service'
                : `https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/health-service/${healthService.id}`;

            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formData.services.forEach(service => formDataToSend.append('services[]', service.value));
            formDataToSend.append('text', formData.text);
    
            if (formData.servicesImage) {
                formDataToSend.append('servicesImage', formData.servicesImage);
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
                updateHealthService(healthService.id, result);
            }
    
            navigate('/admin/health-services');
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    const handleDrop = (acceptedFiles) => {
        if (acceptedFiles.length <= 1) {
            const newImage = acceptedFiles[0];
            setFormData(prevData => ({
                ...prevData,
                servicesImage: newImage ? URL.createObjectURL(newImage) : prevData.servicesImage,
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
            servicesImage: ''
        }));
    };

    if (!healthServicesData || healthServicesData.length === 0) {
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
                <h2>{isCreating ? 'Create New Health Service' : `Edit "${healthService.name}"`}</h2>
            </div>
            <div className="service-details-page">
                <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                    <div className="details-page-section">
                        <HealthServiceDetailsInput
                            formData={formData}
                            handleInputChange={handleInputChange}
                            handleSelectChange={handleSelectChange}
                            defaultServicesOptions={defaultServicesOptions}
                        />
                        <HealthServiceDetailsPublish 
                            servicesImage={formData.servicesImage} 
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

export default AdminHealthServiceDetails;