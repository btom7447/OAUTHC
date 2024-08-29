import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from 'react-dropzone'; 
import DepartmentsDetailsInputs from "../Components/DepartmentsDetailsInput"; 
import DepartmentsDetailsPublish from "../Components/DepartmentsDetailsPublish";

const AdminDepartmentDetails = () => {
    const { departmentTitle } = useParams();
    const { departmentsData, updateDepartment } = useUser();
    const navigate = useNavigate();

    const isCreating = !departmentTitle;
    
    // Add a conditional check to ensure departmentsData is not empty or undefined
    const department = !isCreating && departmentsData.length > 0 
        ? departmentsData.find(dep => dep.title.toLowerCase().replace(/\s+/g, '-') === departmentTitle) 
        : null;

    const [formData, setFormData] = useState({
        title: department?.title || '',
        overviewText: department?.overviewText || '',
        text: department?.text || '',
        facilities: department?.facilities?.map(facility => ({ label: facility, value: facility })) || [],
        services: department?.services?.map(service => ({ label: service, value: service })) || [],
        phone: department?.phone || '',
        status: department?.status ? { value: department.status, label: department.status.charAt(0).toUpperCase() + department.status.slice(1) } : null,
        departmentImage: department?.departmentImage || '',
        images: department?.images || [],
    });

    useEffect(() => {
        if (department) {
            setFormData({
                title: department.title || '',
                overviewText: department.overviewText || '',
                text: department.text || '',
                facilities: department.facilities.map(facility => ({ label: facility, value: facility })) || [],
                services: department.services.map(service => ({ label: service, value: service })) || [],
                phone: department.phone || '',
                status: department.status ? { value: department.status, label: department.status.charAt(0).toUpperCase() + department.status.slice(1) } : null,
                departmentImage: department.departmentImage || '',
                images: department.images || [],
            });
        }
    }, [department, departmentTitle]);

    const allFacilities = Array.from(
        new Set(departmentsData.flatMap(dep => dep.facilities || []))
    ).sort();

    const allServices = Array.from(
        new Set(departmentsData.flatMap(dep => dep.services || []))
    ).sort();

    const defaultFacilitiesOptions = allFacilities.map(facility => ({ label: facility, value: facility }));
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
                ? 'https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/department'
                : `https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/department/${department.id}`;
    
            // Create FormData instance
            const formDataToSend = new FormData();
            formDataToSend.append('title', formData.title);
            formDataToSend.append('overviewText', formData.overviewText);
            formDataToSend.append('text', formData.text);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('status', formData.status?.value || '');
    
            formData.facilities.forEach(facility => formDataToSend.append('facilities[]', facility.value));
            formData.services.forEach(service => formDataToSend.append('services[]', service.value));
    
            if (formData.images.length > 0) {
                formData.images.forEach((image, index) => {
                    formDataToSend.append(`images[${index}]`, image);
                });
            }
            if (formData.departmentImage) {
                formDataToSend.append('departmentImage', formData.departmentImage);
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
    
            // Call updateDepartment to update the context state with the new department data
            if (!isCreating) {
                updateDepartment(department.id, result); // Assuming result contains the updated department data
            }
    
            navigate('/admin/departments');
        } catch (error) {
            console.error('Error saving data:', error);
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
                    departmentImage: newImages[0] ? newImages[0].preview : prevData.departmentImage
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
                departmentImage: newImages.length > 0 ? newImages[0].preview : ''
            };
        });
    };

    if (!departmentsData || departmentsData.length === 0) {
        return <div className="loading">Loading...</div>; 
    }


    return (
        <>
            <div className="pages-caption">
                <h1>Pages</h1>
            </div>
            <div className="back">
                <FontAwesomeIcon icon={faChevronLeft} />
                <Link to="/admin/departments">
                    Back
                </Link>
            </div>
            <div className="admin-pages-caption">
                <h2>{isCreating ? 'Create New Department' : `Edit "${department.title}"`}</h2>
            </div>
            <div className="department-details-page">
                <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                    <div className="details-page-section">
                        <DepartmentsDetailsInputs
                            formData={formData}
                            handleInputChange={handleInputChange}
                            handleSelectChange={handleSelectChange}
                            defaultFacilitiesOptions={defaultFacilitiesOptions}
                            defaultServicesOptions={defaultServicesOptions}
                        />
                        <DepartmentsDetailsPublish
                            departmentImage={formData.departmentImage}
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

export default AdminDepartmentDetails;