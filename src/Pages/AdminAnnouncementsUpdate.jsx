import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners';

const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/admin';

const AdminAnnouncementsUpdate = () => {
    const { id } = useParams();
    const { announcementsData } = useUser();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        content: '', 
        publish: false,
    });

    useEffect(() => {
        if (announcementsData.length > 0 && id) {
            const announceId = parseInt(id, 10);
            const announce = announcementsData.find(announce => announce.id === announceId);

            if (announce) {
                setFormData({
                    name: announce.name || '',
                    content: announce.content || '',
                    publish: announce.published || false, 
                });
            } else {
                console.log('No announcement found with the given ID.');
            }
        }
    }, [id, announcementsData]);

    const handleSave = async (e) => {
        e.preventDefault();

        setLoading(true);
        const loadingToastId = toast.loading("Creating Announcement ...", {
            autoClose: false,
            toastId: 'loading-toast'
        });

        try {
            const token = localStorage.getItem('bearer_token');
            if (!token) {
                throw new Error('No token found. Please log in.');
            }

            const response = await fetch(`${BASE_URL}/update-announcement/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({
                    name: formData.name,
                    content: formData.content,
                    published: formData.publish, 
                }),
            });

            const result = await response.json();

            if (response.ok) {
                toast.update(loadingToastId, {
                    render: 'Announcement created successfully!',
                    type: 'success',
                    autoClose: 2500,
                    isLoading: false
                });
                setTimeout(() => {
                    navigate('/admin/announcements', { replace: true });
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
        const { name, value, type, checked } = e.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value 
        }));
    };

    if (!announcementsData || announcementsData.length === 0) {
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
                    <Link to="/admin/announcements">
                        Back
                    </Link>
                </div>
                <div className="admin-pages-caption">
                    <h2>Update Announcement</h2>
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
                        Announcement Message:
                        <textarea
                            name="content"
                            value={formData.content}
                            onChange={handleInputChange}
                            placeholder="Announcement message ..."
                        />
                    </label>
                    <h6>Publish Status: </h6>
                    <label className="switch">
                        <input 
                            className="publish-toggle"
                            type="checkbox" 
                            name="publish" 
                            checked={formData.publish} 
                            onChange={handleInputChange} 
                        />
                        <span className="slider"></span>
                    </label>
                    <br />
                    <br />

                    <button type="submit" disabled={loading}>
                        {loading ? 'Creating ...' : 'Create Announcement'}
                    </button>
                </div>
            </form>
        </>
    )
};

export default AdminAnnouncementsUpdate;