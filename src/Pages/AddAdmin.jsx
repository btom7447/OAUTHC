import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const AddAdmin = () => {
    const navigate = useNavigate();

    const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/admin';

    const [formData, setFormData] = useState({
        name: '',
        email: '', 
        password: '',
        role: [], 
        image: [], 
    });

    const [imagePreview, setImagePreview] = useState('');
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const defaultRoleOptions = [
        { value: 'super admin', label: 'Super Admin' },
        { value: 'admin', label: 'Admin' },
    ];

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
            setImagePreview(formData.image[0] ? formData.image[0] : '');
        }
    };

    const handleSelectChange = (newValue, category) => {
        if (category === 'role') {
            setSelectedRoles(newValue);
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
        const loadingToastId = toast.loading("Creating admin ...", {
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
            formDataToSend.append('email', formData.email);
            formDataToSend.append('password', formData.password);
    
            if (formData.image && formData.image instanceof File) {
                formDataToSend.append('profile_image', formData.image);
            }
    
            const rolesString = selectedRoles.map(role => role.value).join(',');
            formDataToSend.append('role', rolesString);
    
            const response = await fetch(`${BASE_URL}/create-admin`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formDataToSend
            });
    
            const result = await response.json();
    
            if (response.ok) {
                toast.update(loadingToastId, {
                    render: 'Admin created successfully!',
                    type: 'success',
                    autoClose: 2500,
                    isLoading: false
                });
    
                setTimeout(() => {
                    navigate('/admin/all-admins', { replace: true });
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

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <ToastContainer />
            <div>
                <div className="pages-caption">
                    <h1>Role Manage</h1>
                </div>
                <div className="admin-pages-caption">
                    <h2>Add New Admin</h2>
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
                            placeholder="Admin Name"
                        />
                    </label>
                    <label>
                        Email: 
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Admin email"
                        />
                    </label>
                    <label>
                        Role:
                        <Select
                            isMulti
                            options={defaultRoleOptions}
                            value={selectedRoles}
                            onChange={(options) => handleSelectChange(options, 'role')}
                            placeholder="Add Admin Role"
                            className="admin-select"
                        />
                    </label>
                    <label>
                        Create Password: 
                        <div className="password-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Create password"
                            />
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                onClick={togglePasswordVisibility}
                                className="password-toggle-icon"
                            />
                        </div>
                    </label>
                    {!showPassword && (
                        <label>
                            Confirm Password: 
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                            />
                        </label>
                    )}
                </div>
                <div className="details-publish">
                    <div className="image-box">
                        <h4>Admin's Image <br /> <span className="image-spec">(237 x 300px)</span> <br />
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
    );
};

export default AddAdmin;