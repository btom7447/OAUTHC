import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select';
import Creatable from 'react-select/creatable';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners';

const AdminDoctorsUpdate = () => {
    const { id } = useParams();
    const { doctorsData, departmentsData, unitsData } = useUser();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        departments: [],
        units: [], 
        speciality: [],
        qualification: [], 
        unit: [], 
        clinicDay: '',
        image: [], 
        overviewText: '', 
        accomplishments: '', 
        email: '',
        linkdin: '', 
        instagram: '', 
        twitter: '', 
        facebook: '', 
    });

    const [imagePreview, setImagePreview] = useState('');
    const [selectedSpeciality, setSelectedSpeciality] = useState([]);
    const [selectedQualification, setSelectedQualification] = useState([]);
    const [selectedDepartments, setSelectedDepartments] = useState([]);
    const [selectedUnits, setSelectedUnits] = useState([]);
    const [setDoctorName] = useState('');

    // Transform data for select options
    const specialtiesFromDoctorsData = [...new Set(
        doctorsData.flatMap(doctor => 
            Array.isArray(doctor.specialty) ? doctor.specialty : []
        )
    )].sort((a, b) => a.localeCompare(b));

    const qualificationsFromDoctorsData = [...new Set(
        doctorsData.flatMap(doctor =>
            Array.isArray(doctor.qualification) ? doctor.qualification : []
        )
    )].sort((a, b) => a.localeCompare(b));

    const defaultSpecialtiesOptions = specialtiesFromDoctorsData.map(specialty => ({
        value: specialty,
        label: specialty
    }));

    const defaultQualificationsOptions = qualificationsFromDoctorsData.map(qualification => ({
        value: qualification,
        label: qualification
    }));

    const defaultUnitsOptions = unitsData.map(unit => ({
        value: unit.id,
        label: unit.name
    }));

    const defaultDepartmentOptions = departmentsData.map(department => ({
        value: department.id,
        label: department.name
    }));

    const genderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
    ];

    useEffect(() => {
        if (doctorsData.length > 0 && id) {
            const doctorId = parseInt(id, 10);
            const doctor = doctorsData.find(doc => doc.id === doctorId);

            if (doctor) {
                // Match department names to IDs
                const transformedDepartments = doctor.department ? doctor.department.map(depName => {
                    const department = departmentsData.find(d => d.name === depName);
                    return department ? { value: department.id, label: department.name } : null;
                }).filter(dep => dep !== null) : [];

                // Match unit names to IDs
                const transformedUnits = doctor.unit ? doctor.unit.map(unitName => {
                    const unit = unitsData.find(u => u.name === unitName);
                    return unit ? { value: unit.id, label: unit.name } : null;
                }).filter(unit => unit !== null) : [];

                // Set the form data and selected states
                setFormData({
                    name: doctor.name || '',
                    gender: doctor.gender || '',
                    departments: transformedDepartments,
                    units: transformedUnits,
                    speciality: doctor.specialty ? doctor.specialty.map(spec => ({ value: spec, label: spec })) : [],
                    qualification: doctor.qualification ? doctor.qualification.map(qual => ({ value: qual, label: qual })) : [],
                    unit: doctor.unit ? doctor.unit.map(unit => ({ value: unit, label: unit })) : [],
                    clinicDay: doctor.clinicDay || '',
                    image: doctor.doctorImage ? [doctor.doctorImage] : [], // Assuming doctorImage is a URL or file object
                    overviewText: doctor.overviewText || '',
                    accomplishments: doctor.accomplishments || '',
                    email: doctor.email || '',
                    linkdin: doctor.linkdin || '',
                    instagram: doctor.instagram || '',
                    twitter: doctor.twitter || '',
                    facebook: doctor.facebook || ''
                });

                // Set image preview if available
                if (doctor.doctorImage) {
                    setImagePreview(doctor.doctorImage);
                }

                // Initialize selected states
                setSelectedDepartments(transformedDepartments);
                setSelectedUnits(transformedUnits);
                setSelectedSpeciality(doctor.specialty ? doctor.specialty.map(spec => ({ value: spec, label: spec })) : []);
                setSelectedQualification(doctor.qualification ? doctor.qualification.map(qual => ({ value: qual, label: qual })) : []);
            } else {
                console.log('No doctor found with the given ID.');
            }
        }
    }, [doctorsData, id, departmentsData, unitsData]);

    const handleSelectChange = (newValue, category) => {
        if (category === 'gender') {
            setFormData(prevData => ({
                ...prevData,
                gender: newValue ? newValue.value : '' 
            }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                [category]: newValue 
            }));
        }
    
        // Update the specific state for departments, units, specialities, and qualifications if they change
        if (category === 'departments') {
            setSelectedDepartments(newValue);
        } else if (category === 'units') {
            setSelectedUnits(newValue);
        } else if (category === 'speciality') {
            setSelectedSpeciality(newValue);
        } else if (category === 'qualification') {
            setSelectedQualification(newValue);
        }
    };
    

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
    
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'file' ? files : value
        }));
    };
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Set the form data with the new file and update the preview
            setFormData(prevData => ({
                ...prevData,
                image: file // Set the new file
            }));
            // Create a preview URL for the new file
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        } else {
            // No file selected, keep the existing image and remove preview
            setImagePreview(formData.image ? URL.createObjectURL(formData.image) : '');
        }
    };
    
    const handleSave = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.gender) {
            setError('Name and gender are required');
            return;
        }
    
        setLoading(true);
        const loadingToastId = toast.loading("Updating doctor's profile...", {
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
            formDataToSend.append('gender', formData.gender);
    
            selectedDepartments.forEach((dept, index) => {
                formDataToSend.append(`department[${index}]`, dept.value);
            });
    
            formData.speciality.forEach((specialty, index) => {
                formDataToSend.append(`specialty[${index}]`, specialty.value);
            });
    
            selectedUnits.forEach((unit, index) => {
                formDataToSend.append(`unit[${index}]`, unit.value);
            });
    
            formData.qualification.forEach((qualification, index) => {
                formDataToSend.append(`qualification[${index}]`, qualification.value);
            });
    
            formDataToSend.append('clinic_day', formData.clinicDay);
    
            // Append the image if a new one is selected
            if (formData.image && formData.image instanceof File) {
                formDataToSend.append('image', formData.image);
            }
    
            formDataToSend.append('text_desc', formData.overviewText);
            formDataToSend.append('accomplishment', formData.accomplishments);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('linkdin', formData.linkdin);
            formDataToSend.append('instagram', formData.instagram);
            formDataToSend.append('twitter', formData.twitter);
            formDataToSend.append('facebook', formData.facebook);
    
            const response = await fetch(`https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/update-doctor/${id}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formDataToSend
            });
    
            const result = await response.json();
    
            if (response.ok) {
                toast.update(loadingToastId, {
                    render: 'Doctor profile updated successfully!',
                    type: 'success',
                    autoClose: 2000,
                    isLoading: false
                });
    
                setTimeout(() => {
                    navigate('/admin/doctors', { replace: true });
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
    
    if (!doctorsData || doctorsData.length === 0) {
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
                    <Link to="/admin/doctors">
                        Back
                    </Link>
                </div>
                <div className="admin-pages-caption">
                    <h2>Update "{formData.name}" Profile</h2>
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
                            placeholder="Dr. John Doe"
                        />
                    </label>
                    <label>
                        Gender:
                        <Select
                            options={genderOptions}
                            value={genderOptions.find(option => option.value === formData.gender)}
                            onChange={(option) => handleSelectChange(option, 'gender')}
                            placeholder="Select Doctor's Gender"
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
                        Departments:
                        <Select
                            isMulti
                            options={defaultDepartmentOptions}
                            value={selectedDepartments}
                            onChange={(options) => handleSelectChange(options, 'departments')}
                            placeholder="Select Doctor's Departments"
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
                        Units:
                        <Select
                            isMulti
                            options={defaultUnitsOptions}
                            value={selectedUnits}
                            onChange={(options) => handleSelectChange(options, 'units')}
                            placeholder="Select Doctor's Units"
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
                        Specialities:
                        <Creatable
                            isMulti
                            options={defaultSpecialtiesOptions}
                            value={selectedSpeciality}
                            onChange={(options) => handleSelectChange(options, 'speciality')}
                            placeholder="Doctor's Specialities"
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
                        Qualifications:
                        <Creatable
                            isMulti
                            options={defaultQualificationsOptions}
                            value={selectedQualification}
                            onChange={(options) => handleSelectChange(options, 'qualification')}
                            placeholder="Doctor's Qualifications"
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
                        Clinic Days:
                        <input
                            type="text"
                            name="clinicDay"
                            value={formData.clinicDay}
                            onChange={handleInputChange}
                            placholder="Doctors Clinic Days"
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
                        Profile:
                        <textarea
                            name="overviewText"
                            value={formData.overviewText}
                            onChange={handleInputChange}
                            placholder="Dr. John Doe's profile ..."
                        />
                    </label>
                    <label>
                        Accomplishments:
                        <textarea
                            type="text"
                            name="accomplishments"
                            value={formData.accomplishments}
                            onChange={handleInputChange}
                            placeholder="Dr. John Doe's accomplishments ..."
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john.doe@oauthc.com"
                        />
                    </label>
                    <p>Social links</p>
                    <div className="social-links">
                        <label>
                            Linkdin
                            <input
                                type="text"
                                name="linkdin"
                                value={formData.linkdin}
                                onChange={handleInputChange}
                                placeholder="https://www.linkedin.com/john-doe"
                            />
                        </label>
                        <label>Instagram
                            <input
                                type="text"
                                name="instagram"
                                value={formData.instagram}
                                onChange={handleInputChange}
                                placeholder="https://www.instagram.com/john-doe"
                            />
                        </label>
                        <label>Twitter
                            <input
                                type="text"
                                name="twitter"
                                value={formData.twitter}
                                onChange={handleInputChange}
                                placeholder="https://www.twitter.com/john-doe"
                            />
                        </label>
                        <label>Facebook
                            <input
                                type="text"
                                name="facebook"
                                value={formData.facebook}
                                onChange={handleInputChange}
                                placeholder="https://www.facebook.com/john-doe"
                            />
                        </label>
                    </div>
                </div>
                <div className="details-publish">
                    <div className="image-box">
                        <h4>Doctor's Image <br /> <span className="image-spec">(237 x 300px)</span> <br />
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
                        {loading ? 'Saving...' : 'Save'}
                    </button>
                </div>
            </form>
        </>
    );
};

export default AdminDoctorsUpdate;
