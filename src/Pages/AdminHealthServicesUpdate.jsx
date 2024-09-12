import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Creatable from 'react-select/creatable';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners";

const AdminHealthServicesUpdate = () => {
    const { id } = useParams();
    const { healthServicesData } = useUser();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/admin';

    const [formData, setFormData] = useState({
        name: '',
        servicesImage: '',
        highlights: [],
        texts: [],
    });

    const [imagePreview, setImagePreview] = useState('');
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedTexts, setSelectedTexts] = useState([]);

    useEffect(() => {
        if (healthServicesData.length > 0 && id) {
            const healthServiceId = parseInt(id, 10);
            const healthService = healthServicesData.find(healthSer => healthSer.id === healthServiceId);

            if (healthService) {
                const initialHighlights = healthService.highlights ? healthService.highlights.map(ser => ({ value: ser, label: ser })) : [];
                const initialTexts = healthService.texts ? healthService.texts.map(text => ({ value: text, label: text })) : [];

                setFormData({
                    name: healthService.name || '',
                    servicesImage: healthService.servicesImage || '',
                    highlights: initialHighlights,
                    texts: initialTexts,
                });

                setSelectedServices(initialHighlights);
                setSelectedTexts(initialTexts);

                setImagePreview(healthService.servicesImage || '');
            } else {
                console.log('No Health Service found with the given ID.');
            }
        }
    }, [id, healthServicesData]);

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
    
    const handleSelectChange = (newValue, category) => {
        if (category === 'highlights') {
            setSelectedServices(newValue);
            setFormData(prevData => ({ 
                ...prevData, 
                highlights: newValue.map(option => option.value) 
            }));
        } else if (category === 'texts') {
            setSelectedTexts(newValue);
            setFormData(prevData => ({ 
                ...prevData, 
                texts: newValue.map(option => option.value) 
            }));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        const loadingToastId = toast.loading("Updating Health Service...", { autoClose: false, toastId: 'loading-toast' });
    
        try {
            const token = localStorage.getItem('bearer_token');
            if (!token) throw new Error('No token found. Please log in.');
    
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
    
            if (formData.servicesImage instanceof File) {
                formDataToSend.append('servicesImage', formData.servicesImage);
            }
    
            // Extract the values from the objects for highlights and texts
            selectedServices.forEach((service, index) => {
                formDataToSend.append(`highlights[${index}]`, service.value);
            });
    
            selectedTexts.forEach((text, index) => {
                formDataToSend.append(`text[${index}]`, text.value);
            });
    
            const response = await fetch(`${BASE_URL}/update-health/${id}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formDataToSend
            });
    
            const result = await response.json();
    
            if (response.ok) {
                toast.update(loadingToastId, {
                    render: 'Health Service updated successfully!',
                    type: 'success',
                    autoClose: 2500,
                    isLoading: false
                });
                setTimeout(() => {
                    navigate('/admin/health-services', { replace: true });
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

    if (!healthServicesData || healthServicesData.length === 0) {
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
                    <Link to="/admin/health-services">
                        Back
                    </Link>
                </div>
                <div className="admin-pages-caption">
                    <h2>Update "{formData.name}" Service</h2>
                </div>
            </div>
            <form onSubmit={handleSave} className='details-page-form'>
                {/* {error && <div className="error">{error}</div>} */}
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
                        Highlights:
                        <Creatable
                            isMulti
                            value={selectedServices}
                            onChange={(options) => handleSelectChange(options, 'highlights')}
                            placeholder="Create Highlights"
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
                        Service Texts:
                        <Creatable
                            isMulti
                            value={selectedTexts}
                            onChange={(options) => handleSelectChange(options, 'texts')}
                            placeholder="Create Service Texts"
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
                        {loading ? 'Updating ...' : 'Update Service'}
                    </button>
                </div>
            </form>
        </>
    );
};

export default AdminHealthServicesUpdate;
