import React, { useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from 'react-dropzone'; 
import DepartmentsDetailsInputs from "../Components/DepartmentsDetailsInput"; 
import DepartmentsDetailsPublish from "../Components/DepartmentsDetailsPublish";

const AdminDepartmentDetails = () => {
    const { departmentTitle } = useParams();
    const { departmentsData, updateDepartment } = useUser();

    const department = departmentsData.find(dep => dep.title.toLowerCase().replace(/\s+/g, '-') === departmentTitle);

    const defaultFacilitiesOptions = [
        // your default facilities options
    ];

    const defaultServicesOptions = [
        // your default services options
    ];

    const statusOptions = [
        { value: 'publish', label: 'Publish' },
        { value: 'draft', label: 'Draft' }
    ];

    const [formData, setFormData] = useState({
        title: department?.title || '',
        overviewText: department?.overviewText || '',
        text: department?.text || '',
        facilities: department?.facilities.map(facility => ({ label: facility, value: facility })) || [],
        services: department?.services.map(service => ({ label: service, value: service })) || [],
        phone: department?.phone || '',
        status: department?.status ? { value: department.status, label: department.status.charAt(0).toUpperCase() + department.status.slice(1) } : null,
        departmentImage: department?.departmentImage || '',  // Initialize departmentImage
        images: department?.images || [],
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
            facilities: formData.facilities.map(facility => facility.value),
            services: formData.services.map(service => service.value),
        };
        updateDepartment(departmentTitle, updatedData);
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
        // accept: 'image/*',
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

    if (!department) {
        return <div>Department not found</div>;
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
                <h2>Edit "{department.title}"</h2>
            </div>
            <div className="department-details-page">
                <div className="details-page-section">
                    <DepartmentsDetailsInputs
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleSelectChange={handleSelectChange}
                        defaultFacilitiesOptions={defaultFacilitiesOptions}
                        defaultServicesOptions={defaultServicesOptions}
                    />
                    <DepartmentsDetailsPublish
                        departmentImage={formData.departmentImage}  // Pass departmentImage prop
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

export default AdminDepartmentDetails;