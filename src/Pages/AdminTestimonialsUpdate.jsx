import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners';

const AdminTestimonialsUpdate = () => {
    const { id } = useParams();
    const { testimonialsData } = useUser();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        message: '', 
        starRatings: '',
    });

    useEffect(() => {
        if (testimonialsData.length > 0 && id) {
            const testimonyId = parseInt(id, 10);
            const testimony = testimonialsData.find(testimony => testimony.id === testimonyId);
    
            if (testimony) {
                setFormData({
                    name: testimony.name || '',
                    message: testimony.message || '',
                    starRatings: testimony.starRatings || '',
                });
    
            } else {
                console.log('No testimony found with the given ID.');
            }
        }
    }, [id, testimonialsData]);

    const handleSave = async (e) => {
        e.preventDefault();
    
        setLoading(true);
        const loadingToastId = toast.loading("Updating Testimonial ...", {
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
    
            const response = await fetch(`https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/testimonial/${id}`, {
                method: 'PUT', // Use PUT for updates
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formDataToSend
            });
    
            const result = await response.json();
    
            if (response.ok) {
                toast.update(loadingToastId, {
                    render: 'Testimonial updated successfully!',
                    type: 'success',
                    autoClose: 2500,
                    isLoading: false
                });
                setTimeout(() => {
                    navigate('/admin/testimonials', { replace: true });
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
     
    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
    
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value 
        }));
    };

    if (!testimonialsData || testimonialsData.length === 0) {
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
                    <Link to="/admin/testimonials">
                        Back
                    </Link>
                </div>
                <div className="admin-pages-caption">
                    <h2>Update Testimonial</h2>
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
                            placeholder="5"
                            min="1"
                            max="5"
                        />
                    </label>

                    <button type="submit" disabled={loading}>
                        {loading ? 'Updating ...' : 'Update Testimonial'}
                    </button>
                </div>
            </form>
        </>
    )
};

export default AdminTestimonialsUpdate;