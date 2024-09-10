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
        image: [], 
    });

    const [imagePreview, setImagePreview] = useState('');
    const [selectedRuralPosting, setSelectedRuralPosting] = useState([]);
    const [selectedClinicalPosting, setSelectedClinicalPosting] = useState([]);
    const [selectedSpecialTraining, setSelectedSpecialTraining] = useState([]);
    
    // Extract options from schoolsData
    const clinicalPostingFromSchoolsData = schoolsData.flatMap(school => school.clinicalPosting || []);
    const ruralPostingFromSchoolsData = schoolsData.flatMap(school => school.ruralPosting || []);
    const specialTrainingFromSchoolsData = schoolsData.flatMap(school => school.specialTraining || []);

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

    useEffect(() => {
        if (schoolsData.length > 0 && id) {
            const schoolId = parseInt(id, 10);
            const school = schoolsData.find(school => school.id === schoolId);
    
            if (school) {
                // Ensure `services` is an array
                const normalizeArray = (field) => Array.isArray(field) ? field : Object.values(field || {});
    
                setFormData({
                    name: school.name || '',
                    overviewText: school.overviewText || '',
                    vision: school.vision || '',
                    mission: school.mission || '',
                    location: school.location || '',
                    function: normalizeArray(school.function).join('\n'),
                    services: normalizeArray(school.services).join('\n'),
                    ruralPosting: normalizeArray(school.ruralPosting).join('\n'),
                    clinicalPosting: normalizeArray(school.clinicalPosting).join('\n'),
                    specialTraining: normalizeArray(school.specialTraining).join('\n'),
                    image: school.schoolImage ? [school.schoolImage] : [],
                });
    
                // Set the initial selected options for Creatable components
                setSelectedRuralPosting(normalizeArray(school.ruralPosting).map(posting => ({
                    value: posting,
                    label: posting
                })));
    
                setSelectedClinicalPosting(normalizeArray(school.clinicalPosting).map(posting => ({
                    value: posting,
                    label: posting
                })));
    
                setSelectedSpecialTraining(normalizeArray(school.specialTraining).map(training => ({
                    value: training,
                    label: training
                })));
    
                // Set initial image preview if there's an existing image
                if (school.schoolImage) {
                    setImagePreview(school.schoolImage);
                }
            } else {
                console.log('No Schools found with the given ID.');
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
            // Handle file input
            if (files && files[0]) {
                setFormData(prevData => ({
                    ...prevData,
                    [name]: files[0]
                }));
                const previewUrl = URL.createObjectURL(files[0]);
                setImagePreview(previewUrl);
            } else {
                setImagePreview('');
            }
        } else if (type === 'textarea' || type === 'text') {
            // Handle text input
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };
    
    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        const loadingToastId = toast.loading("Updating School...", { autoClose: false, toastId: 'loading-toast' });
    
        try {
            const token = localStorage.getItem('bearer_token');
            if (!token) throw new Error('No token found. Please log in.');
    
            // Prepare FormData
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
    
            // Append array fields
            const appendArrayField = (fieldName, string) => {
                const array = string.split('\n').map(item => item.trim()).filter(item => item);
                array.forEach((item, index) => {
                    formDataToSend.append(`${fieldName}[${index}]`, item);
                });
            };
    
            appendArrayField('function', formData.function);
            appendArrayField('services', formData.services);
    
            // Append selected options for Creatable components
            selectedRuralPosting.forEach((posting, index) => {
                formDataToSend.append(`ruralPosting[${index}]`, posting.value);
            });
    
            selectedClinicalPosting.forEach((posting, index) => {
                formDataToSend.append(`clinicalPosting[${index}]`, posting.value);
            });
    
            selectedSpecialTraining.forEach((training, index) => {
                formDataToSend.append(`specialTraining[${index}]`, training.value);
            });
    
            // Make the API request
            const response = await fetch(`https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/update-school/${id}`, {
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
                        Function of School/Programme:
                        <textarea
                            name="function"
                            value={formData.function}
                            onChange={handleInputChange}
                            placeholder="Function of School/Programme ..."
                        />
                    </label>
                    <label>
                        Services Rendered
                        <textarea
                            name="services"
                            value={formData.services}
                            onChange={handleInputChange}
                            placeholder="Services Rendered by School ..."
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

export default AdminSchoolsUpdate;