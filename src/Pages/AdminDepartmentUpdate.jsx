import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Creatable from 'react-select/creatable';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners";

const AdminDepartmentUpdate = () => {

    const { id } = useParams();
    const { departmentsData } = useUser();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/admin';

    const [formData, setFormData] = useState({
        name: '',
        overviewText: '',
        text: '', 
        phone: '', 
        services: [],
        facilities: [],
        image: [], 
    });

    const [imagePreview, setImagePreview] = useState('');
    const [selectedFacilities, setSelectedFacilities] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);

    const facilitiesFromDepartmentsData = [...new Set(
        departmentsData.flatMap(department =>
            Array.isArray(department.facilities) ? department.facilities : []
        )
    )].sort((a, b) => a.localeCompare(b));
    
    const servicesFromDepartmentsData = [...new Set(
        departmentsData.flatMap(department =>
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
    

    useEffect(() => {
        if (departmentsData.length > 0 && id) {
            const departmentId = parseInt(id, 10);
            const department = departmentsData.find(dep => dep.id === departmentId);
    
            if (department) {
                setFormData({
                    name: department.name || '',
                    overviewText: department.overviewText || '',
                    text: department.text || '',
                    phone: department.phone || '',
                    image: department.departmentImage ? [department.departmentImage] : [],
                });
    
                // Set the initial image preview
                setImagePreview(department.departmentImage || '');
    
                setSelectedFacilities(department.facilities ? department.facilities.map(fac => ({ value: fac, label: fac })) : []);
                setSelectedServices(department.services ? department.services.map(ser => ({ value: ser, label: ser })) : []);
            } else {
                console.log('No Department found with the given ID.');
            }
        }
    }, [id, departmentsData]);
    
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
            // Maintain the existing image preview if no new image is selected
            setImagePreview(formData.image[0] ? formData.image[0] : '');
        }
    };
    
    const handleSelectChange = (newValue, category) => {
        if (category === 'facility') {
            setSelectedFacilities(newValue);
            setFormData(prevData => ({ 
                ...prevData, 
                facilities: newValue.map(option => option.value) 
            }));
        } else if (category === 'service') {
            setSelectedServices(newValue);
            setFormData(prevData => ({ 
                ...prevData, 
                services: newValue.map(option => option.value) 
            }));
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
    
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value 
        }));
    };
    
    const handleSave = async (e) => {
        e.preventDefault();
    
        setLoading(true);
        const loadingToastId = toast.loading("Updating Departments ...", {
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
            console.log('Selected Facilities:', selectedFacilities);
            console.log('Selected Services: ', selectedServices)
    
            const response = await fetch(`${BASE_URL}/update-department/${id}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formDataToSend
            });
    
            const result = await response.json();
    
            if (response.ok) {
                toast.update(loadingToastId, {
                    render: 'Department updated successfully!',
                    type: 'success',
                    autoClose: 2500,
                    isLoading: false
                });
    
                setTimeout(() => {
                    navigate('/admin/departments', { replace: true });
                    window.location.reload();
                }, 2500);
            } else {
                throw new Error(result.message || 'Update failed');
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

    if (!departmentsData || departmentsData.length === 0) {
        return (
            <div className="loading-spinner loading">
                <ClipLoader color="#005046" size={100} />
            </div>
        );
    }

    return (
        <>
            <ToastContainer />
            <div>
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
                    <h2>Update "{formData.name}" Profile</h2>
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
                            type="text"
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
                        <h4>Doctor's Image <br /> <span className="image-spec">(237 x 300px)</span> <br />
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
                        {loading ? 'Updating ...' : 'Update Profile'}
                    </button>
                </div>
            </form>
        </>
    )
};

export default AdminDepartmentUpdate;