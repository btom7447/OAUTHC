import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import Creatable from 'react-select/creatable';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminSchoolsCreate = () => {
    const navigate = useNavigate();
    const { schoolsData } = useUser();

    const [formData, setFormData] = useState({
        name: '',
        overviewText: '',
        description: '',
        facilitiesText: '', 
        facilities: [],
        faculties: [],
        image: null, 
    });

    const [imagePreview, setImagePreview] = useState('');
    const [selectedFacilities, setSelectedFacilities] = useState([]);
    const [selectedFaculties, setSelectedFaculties] = useState([]);
    const [loading, setLoading] = useState(false);

    const transformedSchools = schoolsData.map(school => ({
        id: school.id,
        name: school.name,
        overviewText: school.overviewText,
        facilitiesText: school.facilitiesText,
        schoolImage: school.schoolImage,
        description: school.description,
        facilities: school.facilities,
        faculties: school.faculties,
    }));

    const facilitiesFromSchoolsData = [...new Set(
        transformedSchools.flatMap(school =>
            Array.isArray(school.facilities) ? school.facilities : []
        )
    )].sort((a, b) => a.localeCompare(b));
    
    const facultiesFromSchoolsData = [...new Set(
        transformedSchools.flatMap(school =>
            Array.isArray(school.faculties) ? school.faculties : []
        )
    )].sort((a, b) => a.localeCompare(b));
    
    const defaultFacilitiesOptions = facilitiesFromSchoolsData.map(facility => ({
        value: facility,
        label: facility
    }));
    
    const defaultFacultiesOptions = facultiesFromSchoolsData.map(faculty => ({
        value: faculty,
        label: faculty
    }));

    const handleSave = async (e) => {
        e.preventDefault();
    
        setLoading(true);
        const loadingToastId = toast.loading("Creating School ...", {
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
            formDataToSend.append('over_view_text', formData.overviewText);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('facilities_text', formData.facilitiesText);
    
            if (formData.image && formData.image instanceof File) {
                formDataToSend.append('image', formData.image);
            }
    
            selectedFacilities.forEach((facility, index) => {
                formDataToSend.append(`facilities[${index}]`, facility.value);
            });
            
            selectedFaculties.forEach((faculty, index) => {
                formDataToSend.append(`faculties[${index}]`, faculty.value);
            });
    
            const response = await fetch("https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/school", {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formDataToSend
            });
    
            const result = await response.json();
    
            if (response.ok) {
                toast.update(loadingToastId, {
                    render: 'School created successfully!',
                    type: 'success',
                    autoClose: 2500,
                    isLoading: false
                });
    
                setTimeout(() => {
                    navigate('/admin/schools', { replace: true });
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
        if (category === 'facility') {
            setSelectedFacilities(newValue);
        } else if (category === 'faculty') { 
            setSelectedFaculties(newValue);
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
                image: file
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
                    <h2>Create New School</h2>
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
                            placeholder="School Name"
                        />
                    </label>
                    <label>
                        School Overview:
                        <textarea
                            name="overviewText"
                            value={formData.overviewText}
                            onChange={handleInputChange}
                            placeholder="School Overview ..."
                        />
                    </label>
                    <label>
                        School Description:
                        <textarea
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="School Description ..."
                        />
                    </label>
                    <label>
                        Facilities:
                        <Creatable
                            isMulti
                            options={defaultFacilitiesOptions}
                            value={selectedFacilities}
                            onChange={(options) => handleSelectChange(options, 'facility')}
                            placeholder="Create or Add School Facilities"
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
                        Faculty:
                        <Creatable
                            isMulti
                            options={defaultFacultiesOptions}
                            value={selectedFaculties}
                            onChange={(options) => handleSelectChange(options, 'service')}
                            placeholder="Create or Add School Faculties"
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
                        <h4>School's Image <br /> <span className="image-spec">(237 x 300px)</span> <br />
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
                        {loading ? 'Creating ...' : 'Create School'}
                    </button>
                </div>
            </form>
        </>
    )
};

export default AdminSchoolsCreate;