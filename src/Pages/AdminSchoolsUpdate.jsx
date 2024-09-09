import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Creatable from 'react-select/creatable';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners";

const AdminSchoolsUpdate = () => {
    const { id } = useParams();
    const { schoolsData } = useUser();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        overviewText: '',
        description: '',
        facilitiesText: '', 
        services: [],
        faculties: [],
        image: [], 
    });

    const [imagePreview, setImagePreview] = useState('');
    const [selectedFacilities, setSelectedFacilities] = useState([]);
    const [selectedFaculties, setSelectedFaculties] = useState([]);

    const transformedSchools = schoolsData.map(school => ({
        id: school.id,
        dateCreated: school.created_at,
        name: school.schoolName,
        overviewText: school.overviewText,
        schoolImage: school.schoolImage,
        description: school.description,
        facilitiesText: school.facilities, 
        services: school.services, 
        faculties: school.faculties
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

    useEffect(() => {
        if (schoolsData.length > 0 && id) {
            const schoolId = parseInt(id, 10);
            const school = schoolsData.find(sch => sch.id === schoolId);
    
            if (school) {
                setFormData({
                    name: school.name || '',
                    overviewText: school.overviewText || '',
                    facilitiesText: school.facilitiesText || '',
                    description: school.description || '',
                    image: school.schoolImage ? [school.schoolImage] : [],
                    facilities: Array.isArray(school.facilities)
                        ? school.facilities.map(faci => ({ value: faci, label: faci }))
                        : [], // Ensure facilities is an array before mapping
                    faculties: Array.isArray(school.faculties)
                        ? school.faculties.map(facu => ({ value: facu, label: facu }))
                        : [], // Ensure faculties is an array before mapping
                });
    
                // Set the initial image preview
                setImagePreview(school.schoolImage || '');
    
                setSelectedFacilities(
                    Array.isArray(school.facilities)
                        ? school.facilities.map(faci => ({ value: faci, label: faci }))
                        : [] // Ensure facilities is an array before mapping
                );
    
                setSelectedFaculties(
                    Array.isArray(school.faculties)
                        ? school.faculties.map(facu => ({ value: facu, label: facu }))
                        : [] // Ensure faculties is an array before mapping
                );
            } else {
                console.log('No School found with the given ID.');
            }
        }
    }, [id, schoolsData]);
    
    

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

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        const loadingToastId = toast.loading("Updating School...", { autoClose: false, toastId: 'loading-toast' });
    
        try {
            const token = localStorage.getItem('bearer_token');
            if (!token) throw new Error('No token found. Please log in.');
    
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('overviewText', formData.overviewText);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('facilitiesText', formData.facilitiesText);
    
            if (formData.image && formData.image instanceof File) {
                formDataToSend.append('image', formData.image);
            }
    
            selectedFacilities.forEach((facility, index) => {
                formDataToSend.append(`facilities[${index}]`, facility.value);
            });
    
            selectedFaculties.forEach((faculty, index) => {
                formDataToSend.append(`faculties[${index}]`, faculty.value);
            });
    
            // Proceed with form submission
            const response = await fetch(`https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/update-school/${id}`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formDataToSend
            });
    
            // Handle response
            const result = await response.json();
            if (response.ok) {
                toast.update(loadingToastId, { render: 'School updated successfully!', type: 'success', autoClose: 2500, isLoading: false });
                setTimeout(() => { navigate('/admin/schools', { replace: true }); window.location.reload(); }, 2500);
            } else throw new Error(result.message || 'Update failed');
    
        } catch (err) {
            toast.update(loadingToastId, { render: `Error: ${err.message}`, type: 'error', autoClose: 5000, isLoading: false });
        } finally {
            setLoading(false);
            toast.dismiss('loading-toast');
        }
    };
    

    if (!schoolsData || schoolsData.length === 0) {
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
                    <Link to="/admin/schools">
                        Back
                    </Link>
                </div>
                <div className="admin-pages-caption">
                    <h2>Update "{formData.name}" School</h2>
                </div>
            </div>
            <form onSubmit={handleSave} className='details-page-form'>
                {error && <div className="error">{error}</div>}
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
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="School Description ..."
                    />
                </label>
                <label>
                    Facilities Text:
                    <textarea
                        name="facilitiesText"
                        value={formData.facilitiesText}
                        onChange={handleInputChange}
                        placeholder="Details about school facilities..."
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
                        Faculties:
                        <Creatable
                            isMulti
                            options={defaultFacultiesOptions}
                            value={selectedFaculties}
                            onChange={(options) => handleSelectChange(options, 'faculty')}
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
                        {loading ? 'Updating ...' : 'Update School'}
                    </button>
                </div>
            </form>
        </>
    )
};

export default AdminSchoolsUpdate;