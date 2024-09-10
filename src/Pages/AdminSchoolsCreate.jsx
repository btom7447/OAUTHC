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
        vision: '',
        mission: '',
        location: '', 
        function: '', 
        services: '',
        ruralPosting: [], 
        clinicalPosting: [],
        specialTraining: [],
        image: null, 
    });

    const [imagePreview, setImagePreview] = useState('');
    const [selectedRuralPosting, setSelectedRuralPosting] = useState([]);
    const [selectedClinicalPosting, setSelectedClinicalPosting] = useState([]);
    const [selectedSpecialTraining, setSelectedSpecialTraining] = useState([]);
    const [loading, setLoading] = useState(false);

    const transformedSchools = schoolsData.map(school => ({
        id: school.id,
        dateCreated: school.created_at,
        name: school.schoolName,
        overviewText: school.overviewText,
        schoolImage: school.schoolImage,
        vision: school.vision,
        mission: school.mission,
        location: school.location,
        function: school.function,
        services: school.services,
        ruralPosting: school.ruralPosting, 
        clinicalPosting: school.clinicalPosting, 
        specialTraining: school.specialTraining,
    }));

    // Generate unique and sorted options for clinical postings
    const clinicalPostingFromSchoolsData = [...new Set(
        transformedSchools.flatMap(school =>
            Array.isArray(school.clinicalPosting) ? school.clinicalPosting : []
        )
    )].sort((a, b) => a.localeCompare(b));

    // Generate unique and sorted options for rural postings
    const ruralPostingFromSchoolsData = [...new Set(
        transformedSchools.flatMap(school =>
            Array.isArray(school.ruralPosting) ? school.ruralPosting : []
        )
    )].sort((a, b) => a.localeCompare(b));

    // Generate unique and sorted options for special training
    const specialTrainingFromSchoolsData = [...new Set(
        transformedSchools.flatMap(school =>
            Array.isArray(school.specialTraining) ? school.specialTraining : []
        )
    )].sort((a, b) => a.localeCompare(b));

    // Define the options for the select inputs
    const defaultClinicalPostingOptions = clinicalPostingFromSchoolsData.map(posting => ({
        value: posting,
        label: posting
    }));

    const defaultRuralPostingOptions = ruralPostingFromSchoolsData.map(posting => ({
        value: posting,
        label: posting
    }));

    const defaultSpecialTrainingOptions = specialTrainingFromSchoolsData.map(training => ({
        value: training,
        label: training
    }));

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        const loadingToastId = toast.loading("Updating School...", { autoClose: false, toastId: 'loading-toast' });
    
        try {
            const token = localStorage.getItem('bearer_token');
            if (!token) throw new Error('No token found. Please log in.');
    
            const formDataToSend = new FormData();
            formDataToSend.append('schoolName', formData.name);
            formDataToSend.append('overviewText', formData.overviewText);
            formDataToSend.append('vision', formData.vision);
            formDataToSend.append('mission', formData.mission);
            formDataToSend.append('location', formData.location);
    
            // Handle image upload
            if (formData.image && formData.image instanceof File) {
                formDataToSend.append('schoolImage', formData.image);
            }
    
            // Append each paragraph as a new string with index keys
            formData.function.split('\n').forEach((item, index) => {
                if (item.trim()) {
                    formDataToSend.append(`function[${index}]`, item.trim());
                }
            });

            formData.services.split('\n').forEach((item, index) => {
                if (item.trim()) {
                    formDataToSend.append(`services[${index}]`, item.trim());
                }
            });
    
            selectedRuralPosting.forEach((posting, index) => {
                formDataToSend.append(`ruralPosting[${index}]`, posting.value);
            });
    
            selectedClinicalPosting.forEach((posting, index) => {
                formDataToSend.append(`clinicalPosting[${index}]`, posting.value);
            });
    
            selectedSpecialTraining.forEach((training, index) => {
                formDataToSend.append(`specialTraining[${index}]`, training.value);
            });
    
            // Proceed with form submission
            const response = await fetch(`https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/create/school`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formDataToSend
            });
    
            const result = await response.json();
            if (response.ok) {
                toast.update(loadingToastId, { render: 'School updated successfully!', type: 'success', autoClose: 2500, isLoading: false });
                setTimeout(() => { 
                    navigate('/admin/schools', { replace: true }); 
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

    const handleSelectChange = (selectedOption, actionMeta) => {
        switch (actionMeta.name) {
          case 'ruralPosting':
            setSelectedRuralPosting(selectedOption);
            break;
          case 'clinicalPosting':
            setSelectedClinicalPosting(selectedOption);
            break;
          case 'specialTraining':
            setSelectedSpecialTraining(selectedOption);
            break;
          default:
            break;
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === 'file') {
            setFormData(prevData => ({
                ...prevData,
                [name]: files[0]
            }));
            const previewUrl = URL.createObjectURL(files[0]);
            setImagePreview(previewUrl);
        } else {
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
                        Vision:
                        <textarea
                            name="vision"
                            value={formData.vision}
                            onChange={handleInputChange}
                            placeholder="School Vision"
                        />
                    </label>
                    <label>
                        Mission:
                        <textarea
                            name="mission"
                            value={formData.mission}
                            onChange={handleInputChange}
                            placeholder="School Mission"
                        />
                    </label>
                    <label>
                        Location:
                        <textarea
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="School Location"
                        />
                    </label>
                    <label>
                        Function:
                        <textarea
                            name="function"
                            value={formData.function}
                            onChange={handleInputChange}
                            placeholder="School Function (separate paragraphs with Enter)"
                        />
                    </label>
                    <label>
                        Services:
                        <textarea
                            name="services"
                            value={formData.services}
                            onChange={handleInputChange}
                            placeholder="School Services (separate paragraphs with Enter)"
                        />
                    </label>
                    <label>
                        Clinical Posting:
                        <Creatable
                            isMulti
                            options={defaultClinicalPostingOptions}
                            value={selectedClinicalPosting}
                            onChange={(options) => setSelectedClinicalPosting(options)}
                            placeholder="Create or Add Clinical Posting"
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
                        Rural Posting:
                        <Creatable
                            isMulti
                            options={defaultRuralPostingOptions}
                            value={selectedRuralPosting}
                            onChange={(options) => setSelectedRuralPosting(options)}
                            placeholder="Create or Add Rural Posting"
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
                        Special Training:
                        <Creatable
                            isMulti
                            options={defaultSpecialTrainingOptions}
                            value={selectedSpecialTraining}
                            onChange={(options) => setSelectedSpecialTraining(options)}
                            placeholder="Create or Add Special Training"
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

export default AdminSchoolsCreate;