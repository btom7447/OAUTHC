import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    const [loading, setLoading] = useState(false);
    const [toastId, setToastId] = useState(null); // Track toast ID to prevent duplicates

    const isCreating = !name;
    const department = !isCreating && departmentsData.length > 0 
        ? departmentsData.find(dep => dep.name.toLowerCase().replace(/\s+/g, '-') === name) 
        : null;
    const departmentName = department ? department.name : "";

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

    const allFacilities = Array.from(new Set(departmentsData.flatMap(dep => dep.facilities || []))).sort();
    const allServices = Array.from(new Set(departmentsData.flatMap(dep => dep.services || []))).sort();
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
        if (loading) return; // Prevent multiple submissions
        setLoading(true);

        // Show loading toast
        const id = toast.loading('Saving data...', { autoClose: false });
        setToastId(id);

        try {
            const isUpdate = !isCreating;
            const url = isUpdate
                ? `https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/update-department/${department.id}`
                : 'https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/department';
    
            const token = localStorage.getItem('bearer_token');
            if (!token) {
                console.error('No token found. Please log in.');
                return;
            }
    
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name || '');
            formDataToSend.append('over_view_text', formData.overviewText || '');
            formDataToSend.append('text', formData.text || '');
            formDataToSend.append('phone', formData.phone || '');
    
            // Append image file if present
            if (formData.departmentImage) {
                const blob = await fetch(formData.departmentImage).then(res => res.blob());
                formDataToSend.append('image', blob, 'department-image.jpg');
            }
    
            formData.services.forEach((service, index) => {
                formDataToSend.append(`services[${index}]`, service.value);
            });
            formData.facilities.forEach((facility, index) => {
                formDataToSend.append(`facilities[${index}]`, facility.value);
            });
    
            const response = await fetch(url, {
                method: 'POST',
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
            toast.update(id, { render: 'Department saved successfully', type: 'success', isLoading: false, autoClose: 3000 });

            console.log('Save successful:', result);

            // Refresh or navigate after saving
            setTimeout(() => {
                navigate('/admin/departments');
            }, 3000); // Wait for the toast to finish
        } catch (error) {
            console.error('Error saving data:', error);
            toast.update(id, { render: `Error saving data: ${error.message}`, type: 'error', isLoading: false, autoClose: 5000 });
        } finally {
            setLoading(false);
            setToastId(null); // Reset toast ID
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
                <h2>{isCreating ? 'Create New Department' : `Edit "${departmentName}" Department`}</h2>
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
                            loading={loading}
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default AdminDepartmentDetails;
