import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const AdminPassword = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/admin';

    const [formData, setFormData] = useState({
        currentPassword: '', 
        newPassword: ''
    });

    const [adminId, setAdminId] = useState(null);

    useEffect(() => {
        // Get user data from localStorage
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData && userData.id) {
            setAdminId(userData.id);
        } else {
            console.error("Admin ID not found in localStorage.");
            navigate('/admin/all-admins'); 
        }
    }, [navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handlePasswordSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        const loadingToastId = toast.loading("Updating password...", {
            autoClose: false,
            toastId: 'loading-toast-password'
        });
        
        try {
            const token = localStorage.getItem('bearer_token');
            if (!token) {
                throw new Error('No token found. Please log in.');
            }

            // Prepare raw JSON body as required by the API
            const raw = JSON.stringify({
                current_password: formData.currentPassword,
                new_password: formData.newPassword
            });

            const response = await fetch(`${BASE_URL}/update-password/${adminId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: raw
            });

            const result = await response.json();

            if (response.ok) {
                toast.update(loadingToastId, {
                    render: 'Password updated successfully!',
                    type: 'success',
                    autoClose: 2500,
                    isLoading: false
                });

                setTimeout(() => {
                    navigate('/admin/all-admins', { replace: true });
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
            toast.dismiss('loading-toast-password');
        }
    };

    const toggleCurrentPasswordVisibility = () => {
        setShowCurrentPassword(!showCurrentPassword);
    };

    const toggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
    };

    return (
        <>
            <div className="pages-caption">
                <h1>Password</h1>
            </div>
            <div className="back">
                <FontAwesomeIcon icon={faChevronLeft} />
                <Link to="/admin/announcements">
                    Back
                </Link>
            </div>
            <div className="admin-pages-caption">
                <h2>Change Password</h2>
            </div>
            <div className="admin-password">
                <form onSubmit={handlePasswordSave} className='password-form'>
                    <div className="details-inputs">
                        <label>
                            Current Password: 
                            <div className="password-input">
                                <input
                                    type={showCurrentPassword ? "text" : "password"}
                                    name="currentPassword"
                                    value={formData.currentPassword}
                                    onChange={handleInputChange}
                                    placeholder="Current password"
                                />
                                <FontAwesomeIcon 
                                    icon={showCurrentPassword ? faEyeSlash : faEye}
                                    onClick={toggleCurrentPasswordVisibility}
                                    className="password-icon"
                                />
                            </div>
                        </label>
                        <label>
                            New Password: 
                            <div className="password-input">
                                <input
                                    type={showNewPassword ? "text" : "password"}
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleInputChange}
                                    placeholder="New Password"
                                />
                                <FontAwesomeIcon 
                                    icon={showNewPassword ? faEyeSlash : faEye}
                                    onClick={toggleNewPasswordVisibility}
                                    className="password-icon"
                                />
                            </div>
                        </label>
                        <div className="details-publish">
                            <button type="submit" disabled={loading}>
                                {loading ? 'Updating ...' : 'Update Password'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    );
};

export default AdminPassword;