import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Creatable from 'react-select/creatable';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners";

const AdminDiseasesUpdate = () => {
    const { id } = useParams();
    const { diseasesData } = useUser();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        overviewText: '',
        description: '',
        symptoms: '',
        treatment: '',
        images: [], 

    });

    const [imagePreview, setImagePreview] = useState('');
    
    useEffect(() => {
        if (diseasesData.length > 0 && id) {
            const diseaseId = parseInt(id, 10);
            const disease = diseasesData.find(disease => disease.id === diseaseId);
    
            if (disease) {
                const normalizeArray = (field) => Array.isArray(field) ? field : Object.values(field || {});
    
                setFormData({
                    name: disease.name || '',
                    overviewText: disease.overviewText || '',
                    description: disease.description || '',
                    symptoms: normalizeArray(disease.symptoms).join('\n'),
                    treatment: normalizeArray(disease.treatment).join('\n'),
                    images: disease.images ? [disease.images] : [],
                });
    
                // Set initial image preview if there's an existing image
                if (disease.images) {
                    setImagePreview(disease.images);
                }
            } else {
                console.log('No Disease found with the given ID.');
            }
        }
    }, [id, diseasesData]);
    
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

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        const loadingToastId = toast.loading("Updating Disease ...", { autoClose: false, toastId: 'loading-toast' });

        try {
            const token = localStorage.getItem('bearer_token');
            if (!token) throw new Error('No token found. Please log in.');

            // Prepare FormData
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

            // Make the API request
            const response = await fetch(`https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/update-disease/${id}`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formDataToSend
            });

            const result = await response.json();
            if (response.ok) {
                toast.update(loadingToastId, { render: 'Disease updated successfully!', type: 'success', autoClose: 2500, isLoading: false });
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

       

    if (!diseasesData || diseasesData.length === 0) {
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
                    <Link to="/admin/diseases">
                        Back
                    </Link>
                </div>
                <div className="admin-pages-caption">
                    <h2>Update "{formData.name}" Disease</h2>
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
                        <h4>Disease's Image <br /> <span className="image-spec">(237 x 300px)</span> <br />
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

export default AdminDiseasesUpdate;