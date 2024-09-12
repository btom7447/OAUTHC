import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDiseasesCreate = () => {
    const navigate = useNavigate();

    const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/admin';

    const [formData, setFormData] = useState({
        name: '',
        overviewText: '',
        description: '',
        symptoms: '',
        treatment: '',
        images: [], 

    });

    const [imagePreview, setImagePreview] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        const loadingToastId = toast.loading("Updating Disease ...", { autoClose: false, toastId: 'loading-toast' });
    
        try {
            const token = localStorage.getItem('bearer_token');
            if (!token) throw new Error('No token found. Please log in.');
    
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('overviewText', formData.overviewText);
            formDataToSend.append('description', formData.description);

            // Handle multiple image uploads
            formData.images.forEach((file, index) => {
                formDataToSend.append(`images[${index}]`, file);
            });

            // Append array fields
            const appendArrayField = (fieldName, string) => {
                const array = string.split('\n').map(item => item.trim()).filter(item => item);
                array.forEach((item, index) => {
                    formDataToSend.append(`${fieldName}[${index}]`, item);
                });
            };

            appendArrayField('symptoms', formData.symptoms);
            appendArrayField('treatments', formData.treatment);
    
            // Proceed with form submission
            const response = await fetch(`${BASE_URL}/create/disease`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formDataToSend
            });
    
            const result = await response.json();
            if (response.ok) {
                toast.update(loadingToastId, { render: 'Disease Created successfully!', type: 'success', autoClose: 2500, isLoading: false });
                setTimeout(() => { 
                    navigate('/admin/diseases', { replace: true }); 
                    window.location.reload(); 
                }, 2500);
            } else {
                throw new Error(result.message || 'Update failed');
            }
    
        } catch (err) {
            toast.update(loadingToastId, { render: `Error: ${err.message}`, type: 'error', autoClose: 5000, isLoading: false });
        } finally {
            setLoading(false);
        }
    };
    
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files); // Allow multiple files
        if (files.length > 0) {
            setFormData(prevData => ({
                ...prevData,
                images: files // Store multiple files in the array
            }));
            const previewUrl = URL.createObjectURL(files[0]); // Preview first image
            setImagePreview(previewUrl);
        } else {
            setImagePreview('');
        }
    };
    
    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
    
        if (type === 'file') {
            if (files && files[0]) {
                setFormData(prevData => ({
                    ...prevData,
                    [name]: files // Store multiple files in the array
                }));
                const previewUrl = URL.createObjectURL(files[0]);
                setImagePreview(previewUrl);
            } else {
                setImagePreview('');
            }
        } else if (type === 'textarea' || type === 'text') {
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
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
                    <h2>Create New Disease</h2>
                </div>
            </div>
            <form onSubmit={handleSave} className='test-image-form details-page-form'>
                <div className="details-inputs">
                    <label>
                        Disease Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Disease Name"
                        />
                    </label>
                    <label>
                        Disease Overview Text:
                        <textarea
                            name="overviewText"
                            value={formData.overviewText}
                            onChange={handleInputChange}
                            placeholder="Disease Overview Text ..."
                        />
                    </label>
                    <label>
                        Disease Description:
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Diesease Description ..."
                        />
                    </label>
                    <label>
                        Disease Symptoms:
                        <textarea
                            name="symptoms"
                            value={formData.symptoms}
                            onChange={handleInputChange}
                            placeholder="Symptoms of Disease ..."
                        />
                    </label>
                    <label>
                        Disease Treatment
                        <textarea
                            name="treatment"
                            value={formData.treatment}
                            onChange={handleInputChange}
                            placeholder="Treatment of Disease ..."
                        />
                    </label>
                </div>
                <div className="details-publish">
                    <div className="image-box">
                        <h4>Diseases's Image <br /> <span className="image-spec">(237 x 300px)</span> <br />
                        <span className="image-spec">2 Mb Max</span>
                        </h4>
                        <label>
                            <input
                                type="file"
                                name="images"
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
                        {loading ? 'Updating ...' : 'Update Disease'}
                    </button>
                </div>
            </form>
        </>
    )
};

export default AdminDiseasesCreate;