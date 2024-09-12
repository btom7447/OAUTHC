import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Creatable from 'react-select/creatable';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminHealthServicesCreate = () => {
    const navigate = useNavigate();

    const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/admin';

    const [formData, setFormData] = useState({
        name: '',
        services: [],
        texts: [],
        servicesImage: null, 
    });

    const [imagePreview, setImagePreview] = useState('');
    const [loading, setLoading] = useState(false);

    // State for selected services and texts
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedTexts, setSelectedTexts] = useState([]);

    const handleSave = async (e) => {
        e.preventDefault();
    
        setLoading(true);
        const loadingToastId = toast.loading("Creating Health Service ...", {
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
    
            if (formData.servicesImage instanceof File) {
                formDataToSend.append('servicesImage', formData.servicesImage);
            }
    
            selectedServices.forEach((service, index) => {
                formDataToSend.append(`highlights[${index}]`, service.value);
            });
    
            selectedTexts.forEach((text, index) => {
                formDataToSend.append(`text[${index}]`, text.value);
            });
    
            const response = await fetch(`${BASE_URL}/create/health`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formDataToSend
            });
    
            const result = await response.json();
    
            if (response.ok) {
                toast.update(loadingToastId, {
                    render: 'Health Service created successfully!',
                    type: 'success',
                    autoClose: 2500,
                    isLoading: false
                });
    
                setTimeout(() => {
                    navigate('/admin/health-services', { replace: true });
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
        if (category === 'service') {
            setSelectedServices(newValue);
        } else if (category === 'text') { 
            setSelectedTexts(newValue);
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
                servicesImage: file
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
                    <h2>Create New Health Services</h2>
                </div>
            </div>
            <form onSubmit={handleSave} className='details-page-form'>
                <div className="details-inputs">
                    <label>
                        Health Service Name: 
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Service Name"
                        />
                    </label>
                    <label>
                        Services:
                        <Creatable
                            isMulti
                            value={selectedServices}
                            onChange={(options) => handleSelectChange(options, 'service')}
                            placeholder="Create Services"
                            className="admin-select"
                            classNames={{
                                control: () => 'react-select__control',
                                option: () => 'react-select__option',
                                menu: () => 'react-select__menu',
                                menuList: () => 'react-select__menu-list',
                                multiValue: () => 'react-select__multi-value',
                                multiValueLabel: () => 'react-select__multi-value__label',
                                multiValueRemove: () => 'react-select__multi-value__remove',
                                placeholder: () => 'react-select__placeholder',
                                dropdownIndicator: () => 'react-select__dropdown-indicator',
                            }}
                        />
                    </label>
                    <label>
                        Service Texts:
                        <Creatable
                            isMulti
                            value={selectedTexts}
                            onChange={(options) => handleSelectChange(options, 'text')}
                            placeholder="Create Service Texts"
                            className="admin-select"
                            classNames={{
                                control: () => 'react-select__control',
                                option: () => 'react-select__option',
                                menu: () => 'react-select__menu',
                                menuList: () => 'react-select__menu-list',
                                multiValue: () => 'react-select__multi-value',
                                multiValueLabel: () => 'react-select__multi-value__label',
                                multiValueRemove: () => 'react-select__multi-value__remove',
                                placeholder: () => 'react-select__placeholder',
                                dropdownIndicator: () => 'react-select__dropdown-indicator',
                            }}
                        />
                    </label>
                </div>
                <div className="details-publish">
                    <div className="image-box">
                        <h4>Health Service's Image <br /> <span className="image-spec">(237 x 300px)</span> <br />
                        <span className="image-spec">2 Mb Max</span>
                        </h4>
                        <label>
                            <input
                                type="file"
                                name="servicesImage"
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
                        {loading ? 'Creating ...' : 'Create Service'}
                    </button>
                </div>
            </form>
        </>
    );
};

export default AdminHealthServicesCreate;
