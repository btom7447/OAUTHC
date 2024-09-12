import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import Creatable from 'react-select/creatable';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDepartmentCreate = () => {
    const navigate = useNavigate();
    const { departmentsData } = useUser();

    const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/admin';

    const [formData, setFormData] = useState({
        name: '',
        overviewText: '',
        text: '', 
        phone: '', 
        services: [],
        facilities: [],
        image: null, 
    });

    const [imagePreview, setImagePreview] = useState('');
    const [selectedFacilities, setSelectedFacilities] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [loading, setLoading] = useState(false);

    const transformedDepartments = departmentsData.map(department => ({
        id: department.id,
        name: department.name,
        status: department.status,
        dateCreated: department.dateCreated,
        overviewText: department.overviewText,
        departmentImage: department.departmentImage,
        departmentName: department.departmentName,
        text: department.text,
        facilities: department.facilities,
        services: department.services,
        phone: department.phone
    }));

    const facilitiesFromDepartmentsData = [...new Set(
        transformedDepartments.flatMap(department =>
            Array.isArray(department.facilities) ? department.facilities : []
        )
    )].sort((a, b) => a.localeCompare(b));
    
    const servicesFromDepartmentsData = [...new Set(
        transformedDepartments.flatMap(department =>
            Array.isArray(department.services) ? department.services : []
        )
    )].sort((a, b) => a.localeCompare(b));
    
    const defaultFacilitiesOptions = facilitiesFromDepartmentsData.map(facility => ({
        value: facility,
        label: facility
    }));
    
    const defaultServicesOptions = servicesFromDepartmentsData.map(service => ({
        value: service,
        label: service
    }));

    const handleSave = async (e) => {
        e.preventDefault();
    
        setLoading(true);
        const loadingToastId = toast.loading("Creating Department ...", {
            autoClose: false,
            toastId: 'loading-toast'
        });
    
        try {
            const token = localStorage.getItem('bearer_token');
            if (!token) {
                throw new Error('No token found. Please log in.');
            }
    
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('over_view_text', formData.overviewText);
            formDataToSend.append('text', formData.text);
            formDataToSend.append('phone', formData.phone);
    
            if (formData.image && formData.image instanceof File) {
                formDataToSend.append('image', formData.image);
            }
    
            selectedServices.forEach((service, index) => {
                formDataToSend.append(`services[${index}]`, service.value);
            });
    
            selectedFacilities.forEach((facility, index) => {
                formDataToSend.append(`facilities[${index}]`, facility.value);
            });
    
            const response = await fetch(`${BASE_URL}/department`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formDataToSend
            });
    
            const result = await response.json();
    
            if (response.ok) {
                toast.update(loadingToastId, {
                    render: 'Department created successfully!',
                    type: 'success',
                    autoClose: 2500,
                    isLoading: false
                });
    
                setTimeout(() => {
                    navigate('/admin/departments', { replace: true });
                    window.location.reload();
                }, 2500);
            } else {
                throw new Error(result.message || 'Creation failed');
            }
        } catch (err) {
            toast.update(loadingToastId, {
                render: `Error: ${err.message}`,
                type: 'error',
                autoClose: 5000,
                isLoading: false
            });
        } finally {
            setLoading(false);
            toast.dismiss('loading-toast');
        }
    };
    
    const handleSelectChange = (newValue, category) => {
        if (category === 'facility') {
            setSelectedFacilities(newValue);
        } else if (category === 'service') {
            setSelectedServices(newValue);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
    
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value 
        }));
    };
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prevData => ({
                ...prevData,
                image: file
            }));
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        } else {
            setImagePreview('');
        }
    };

    return (
        <>
            <ToastContainer />
            <div>
                <div className="pages-caption">
                    <h1>Pages</h1>
                </div>
                <div className="admin-pages-caption">
                    <h2>Create New Department Profile</h2>
                </div>
            </div>
            <form onSubmit={handleSave} className='details-page-form'>
                <div className="details-inputs">
                    <label>
                        Name: 
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Department Name"
                        />
                    </label>
                    <label>
                        Facilities:
                        <Creatable
                            isMulti
                            options={defaultFacilitiesOptions}
                            value={selectedFacilities}
                            onChange={(options) => handleSelectChange(options, 'facility')}
                            placeholder="Create or Add Department Facilities"
                            className="admin-select"
                            classNames={{
                                control: () => 'react-select__control',
                                option: () => 'react-select__option',
                                menu: () => 'react-select__menu',
                                menuList: () => 'react-select__menu-list',
                                singleValue: () => 'react-select__single-value',
                                placeholder: () => 'react-select__placeholder',
                                dropdownIndicator: () => 'react-select__dropdown-indicator',
                            }}
                        />
                    </label>
                    <label>
                        Services:
                        <Creatable
                            isMulti
                            options={defaultServicesOptions}
                            value={selectedServices}
                            onChange={(options) => handleSelectChange(options, 'service')}
                            placeholder="Create or Add Department Services"
                            className="admin-select"
                            classNames={{
                                control: () => 'react-select__control',
                                option: () => 'react-select__option',
                                menu: () => 'react-select__menu',
                                menuList: () => 'react-select__menu-list',
                                singleValue: () => 'react-select__single-value',
                                placeholder: () => 'react-select__placeholder',
                                dropdownIndicator: () => 'react-select__dropdown-indicator',
                            }}
                        />
                    </label>
                    <label>
                        Department Overview:
                        <textarea
                            name="overviewText"
                            value={formData.overviewText}
                            onChange={handleInputChange}
                            placeholder="Department Description ..."
                        />
                    </label>
                    <label>
                        Text:
                        <textarea
                            name="text"
                            value={formData.text}
                            onChange={handleInputChange}
                            placeholder="Department Details ..."
                        />
                    </label>
                    <label>
                        Phone:
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="123 4567 8910"
                        />
                    </label>
                </div>
                <div className="details-publish">
                    <div className="image-box">
                        <h4>Department's Image <br /> <span className="image-spec">(237 x 300px)</span> <br />
                        <span className="image-spec">2 Mb Max</span>
                        </h4>
                        <label>
                            <input
                                type="file"
                                name="image"
                                onChange={handleImageChange}
                            />
                            {imagePreview && (
                                <div className="image-preview">
                                    <img src={imagePreview} alt="Preview" />
                                </div>
                            )}
                    </label>
                   </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Creating ...' : 'Create Profile'}
                    </button>
                </div>
            </form>
        </>
    )
};

export default AdminDepartmentCreate;