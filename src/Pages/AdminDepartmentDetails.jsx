import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from 'react-dropzone'; 
import DepartmentsDetailsInputs from "../Components/DepartmentsDetailsInput"; 
import DepartmentsDetailsPublish from "../Components/DepartmentsDetailsPublish";

const AdminDepartmentDetails = () => {
    const { name } = useParams();
    const { departmentsData, updateDepartment } = useUser();
    const navigate = useNavigate();

    const isCreating = !name;
    
    // Add a conditional check to ensure departmentsData is not empty or undefined
    const department = !isCreating && departmentsData.length > 0 
        ? departmentsData.find(dep => dep.name.toLowerCase().replace(/\s+/g, '-') === name) 
        : null;

        const [formData, setFormData] = useState({
        name: department?.name || '',
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
                name: department.name || '',
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
    }, [department, name]);

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
            const isUpdate = !isCreating; 
            const url = isUpdate
                ? `https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/update-department/${department.id}`
                : 'https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/department'; 
    
            // FormData instance
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name || '');
            formDataToSend.append('over_view_text', formData.overviewText || '');
            formDataToSend.append('text', formData.text || '');
            formDataToSend.append('phone', formData.phone || '');
    
            // Append image
            if (formData.departmentImage) {
                formDataToSend.append('image', formData.departmentImage);
            }
    
            // Append services
            formData.services.forEach((service, index) => {
                formDataToSend.append(`services[${index}]`, service.value);
            });
    
            // Append facilities
            formData.facilities.forEach((facility, index) => {
                formDataToSend.append(`facilities[${index}]`, facility.value);
            });
    
            for (let [key, value] of formDataToSend.entries()) {
                console.log(`${key}:`, value);
            }
    
            // Send request
            const response = await fetch(url, {
                method: isUpdate ? 'PUT' : 'POST',
                body: formDataToSend,
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error: ${errorData.message || 'Network response was not ok'}`);
            }
    
            const result = await response.json();
            console.log('Save successful:', result);
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
                <h2>{isCreating ? 'Create New Department' : `Edit "${department.name}"`}</h2>
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