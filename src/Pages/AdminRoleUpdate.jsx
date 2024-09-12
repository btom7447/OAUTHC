import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select';import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners";

const AdminRoleUpdate = () => {
    const { id } = useParams();
    const { adminsData } = useUser();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/admin';

    const [formData, setFormData] = useState({
        name: '',
        email: '', 
        role: [], 
        image: [], 
        currentPassword: '', 
        newPassword: ''
    });

    const [imagePreview, setImagePreview] = useState('');
    const [selectedRoles, setSelectedRoles] = useState([]);


    // Default role options
    const defaultRoleOptions = [
        { value: 'super admin', label: 'Super Admin' },
        { value: 'admin', label: 'Admin' },
    ];

    useEffect(() => {
        if (adminsData && adminsData.length > 0 && id) {
            const adminId = parseInt(id, 10);
            const admin = adminsData.find(dep => dep.id === adminId);
    
            if (admin) {
                setFormData({
                    name: admin.name || '',
                    email: admin.email || '',
                    image: admin.image ? [admin.image] : [],
                });
    
                // Set the initial image preview
                setImagePreview(admin.image || '');
    
                // Ensure `admin.role` is an array before calling `.map`
                const roles = Array.isArray(admin.role) ? admin.role : [];
                const initialRoles = roles.map(role => ({ value: role, label: role }));
                setSelectedRoles(initialRoles);
            } else {
                console.log('No admin found with the given ID.');
            }
        }
    }, [id, adminsData]);
    

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
        const loadingToastId = toast.loading("Updating admin ...", {
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

            if (formData.image && formData.image instanceof File) {
                formDataToSend.append('image', formData.image);
            }

            selectedRoles.forEach((role, index) => {
                formDataToSend.append(`role[${index}]`, role.value);
            });

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
                    render: 'Admin updated successfully!',
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
            toast.dismiss('loading-toast');
        }
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
        
            const passwordData = {
                current_password: formData.currentPassword,
                new_password: formData.newPassword
            };
        
            const response = await fetch(`${BASE_URL}/update-password/${id}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(passwordData)
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

    if (!adminsData || adminsData.length === 0) {
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
                    <h1>Role Manage</h1>
                </div>
                <div className="back">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <Link to="/admin/all-admins">
                        Back
                    </Link>
                </div>
                <div className="admin-pages-caption">
                    <h2>Update Admin Profile</h2>
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
                        {loading ? 'Updating ...' : 'Update Profile'}
                    </button>
                </div>
            </form>
            <form onSubmit={handlePasswordSave} className='details-page-form'>
                <div className="details-inputs">
                    <label>
                        Current Password: 
                            <input
                                type="password"
                                name="currentPassword"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Current password"
                            />
                    </label>
                    <label>
                            New Password: 
                        <input
                            type="password"
                            name="newPassword"
                            placeholder="New Password"
                        />
                    </label>
                    <div className="details-publish">
                        <button type="submit" disabled={loading}>
                            {loading ? 'Updating ...' : 'Update Password'}
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default AdminRoleUpdate;