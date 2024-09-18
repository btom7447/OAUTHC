import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AdminTestimonialsCreate = () => {
    const navigate = useNavigate();

    const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/admin';
    
    const [formData, setFormData] = useState({
        name: '',
        message: '', 
        starRatings: '',
    });

    const [loading, setLoading] = useState(false);

    const handleSave = async (e) => {
        e.preventDefault();
    
        setLoading(true);
        const loadingToastId = toast.loading("Creating Testimonials ...", {
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
            formDataToSend.append('message', formData.message);
            formDataToSend.append('star_ratings', Number(formData.starRatings)); // Ensure it's a number
    
            const response = await fetch(`${BASE_URL}/testimonial`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formDataToSend
            });
    
            const result = await response.json();
    
            if (response.ok) {
                toast.update(loadingToastId, {
                    render: 'Testimonial created successfully!',
                    type: 'success',
                    autoClose: 2500,
                    isLoading: false
                });
                setTimeout(() => {
                    navigate('/admin/testimonials', { replace: true });
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
     
    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
    
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value 
        }));
    };

    return (
        <>
            <ToastContainer />
            <div>
                <div className="pages-caption">
                    <h1>Pages</h1>
                </div>
                <div className="admin-pages-caption">
                    <h2>Create New Testimonial</h2>
                </div>
            </div>
            <form onSubmit={handleSave} className='test-image-form details-page-form'>
                <div className="details-inputs">
                    <label>
                        Name: 
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Name"
                        />
                    </label>
                    <label>
                        Testimonial Message:
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="testimonial message ..."
                        />
                    </label>
                    <label>
                        Star Ratings (1 - 5) :
                        <input
                            type="number"
                            name="starRatings"
                            value={formData.starRatings}
                            onChange={handleInputChange}
                            placeholder="-"
                            min="1"
                            max="5"
                        />
                    </label>

                    <button type="submit" disabled={loading}>
                        {loading ? 'Creating ...' : 'Create Testimonial'}
                    </button>
                </div>
            </form>
        </>
    );
};

export default AdminTestimonialsCreate;