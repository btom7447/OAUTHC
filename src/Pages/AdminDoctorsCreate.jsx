import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUser } from '../Components/UserContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDoctorsCreate = () => {
    const { doctorId } = useParams();  
    const { doctorsData, departmentsData, unitsData } = useUser();
    const token = localStorage.getItem('bearer_token');

    const [departments, setDepartments] = useState([]);
    const [units, setUnits] = useState([]);
    const [specialties, setSpecialties] = useState([]);
    const [qualifications, setQualifications] = useState([]);
    const [selectedDepartments, setSelectedDepartments] = useState([]);
    const [selectedUnits, setSelectedUnits] = useState([]);
    const [doctorDetails, setDoctorDetails] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(true);
    const [genderOptions] = useState([
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
    ]);

    const navigate = useNavigate();

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

    useEffect(() => {
        if (departmentsData && unitsData) {
            setDepartments(departmentsData.map(dep => ({ value: dep.id, label: dep.name })));
            setUnits(unitsData.map(unit => ({ value: unit.id, label: unit.name })));
        }
        if (doctorId && doctorsData) {
            const doctor = doctorsData.find(doc => doc.id === parseInt(doctorId, 10));
            if (doctor) {
                setDoctorDetails(doctor);
                setSpecialties(doctor.specialties || []);
                setQualifications(doctor.qualifications || []);
                setSelectedDepartments(doctor.departments.map(dep => ({ value: dep.id, label: dep.name })) || []);
                setSelectedUnits(doctor.units.map(unit => ({ value: unit.id, label: unit.name })) || []);
            }
        }
        setLoading(false);
    }, [doctorId, departmentsData, unitsData, doctorsData]);

    const handleSpecialtyChange = (newSpecialties) => {
        setSpecialties(newSpecialties || []);
    };

    const handleQualificationChange = (newQualifications) => {
        setQualifications(newQualifications || []);
    };

    const handleDepartmentChange = (selectedOptions) => {
        setSelectedDepartments(selectedOptions || []); 
    };

    const handleUnitChange = (selectedOptions) => {
        setSelectedUnits(selectedOptions || []); 
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        // Append specialties individually
        specialties.forEach((specialty, index) => {
            formData.append(`specialty[${index}]`, specialty.value);
        });
    
        // Append qualifications individually
        qualifications.forEach((qualification, index) => {
            formData.append(`qualification[${index}]`, qualification.value);
        });
    
        // Append departments individually
        selectedDepartments.forEach((department, index) => {
            formData.append(`department[${index}]`, department.value);
        });
    
       // Append departments individually
        selectedUnits.forEach((unit, index) => {
            formData.append(`unit[${index}]`, unit.value);
        });

        const imageInput = event.target.querySelector('input[name="image"]');
            if (imageInput && imageInput.files[0]) {
                formData.append('image', imageInput.files[0]);
            }

            // Show loading toast
        const toastId = toast.loading("Creating Doctor Profile...");
    
        // Make a POST request to create a new doctor profile
        fetch('https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/create/doctor', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    toast.update(toastId, {
                        render: "Doctor profile created successfully!",
                        type: "success",
                        isLoading: false,
                        autoClose: 3000,
                    });

                    setTimeout(() => {
                        navigate('/admin/doctors', { replace: true });
                        window.location.reload();
                    }, 2500);

                } else {
                    toast.update(toastId, {
                        render: `Error: ${data.message}`,
                        type: "error",
                        isLoading: false,
                        autoClose: 3000,
                    });
                }
            })
            .catch((error) => {
                toast.update(toastId, {
                    render: 'An error occurred while creating the doctor profile.',
                    type: "error",
                    isLoading: false,
                    autoClose: 3000,
                });
                console.error('Error:', error);
            });
    };
    
    
    

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className=''>
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
                    <h2>Create New Doctor Profile</h2>
                </div>
            </div>
            <form onSubmit={handleSubmit} className='details-page-form'>
                <div className="details-inputs">
                    <label htmlFor="name">
                        Name:
                        <input
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={doctorDetails?.name || ''}
                            required
                            placeholder="Dr. John Doe"
                        />
                    </label>
                    <label htmlFor="gender">
                        Gender:
                        <Select
                            id="gender"
                            name="gender"
                            options={genderOptions}
                            defaultValue={genderOptions.find(option => option.value === doctorDetails?.gender)}
                            required
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
                    
                    <label htmlFor="department">
                        Departments:
                        <Select
                            id="department"
                            name="department"
                            options={departments}
                            isMulti
                            value={selectedDepartments}
                            onChange={handleDepartmentChange}
                            required
                            placeholder="Select Doctor's Department"
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
                    <label htmlFor="unit">
                        Hospital Units:
                        <Select
                            id="unit"
                            name="unit"
                            options={units}
                            isMulti
                            value={selectedUnits}
                            onChange={handleUnitChange}
                            required
                            placeholder="Select Doctor's Unit"
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
                    <label htmlFor="specialty">
                        Specialties:
                        <CreatableSelect
                            id="specialty"
                            name="specialty"
                            isMulti
                            value={specialties}
                            options={defaultSpecialtiesOptions}
                            onChange={handleSpecialtyChange}
                            required
                            placeholder="Create or Select Doctor's Speciality"
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
                    
                    <label htmlFor="qualification">
                        Qualifications:
                        <CreatableSelect
                            id="qualification"
                            name="qualification"
                            isMulti
                            value={qualifications}
                            options={defaultQualificationsOptions}
                            onChange={handleQualificationChange}
                            required
                            placeholder="Create or Select Doctor's Qualification"
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
                    <label htmlFor="clinic_day">
                        Clinic Day:
                        <input
                            type="text"
                            id="clinic_day"
                            name="clinic_day"
                            defaultValue={doctorDetails?.clinic_day || ''}
                            required
                            placeholder="Doctor's Clinic days"
                        />
                    </label>
                    <label htmlFor="text_desc">
                        Profile:
                        <textarea
                            name="text_desc"
                            defaultValue={doctorDetails?.text_desc || ''}
                            required
                            placeholder="Dr. John Doe's Profile ..."
                        />
                    </label>

                    <label htmlFor="accomplishment">
                        Accomplishment:
                        <textarea
                            name="accomplishment"
                            defaultValue={doctorDetails?.accomplishment || ''}
                            required
                            placeholder="Dr. John Doe's Accomplishments ..."
                        />
                    </label>
                    <label htmlFor="email">
                        Email:
                        <input
                            type="email"
                            id="email"
                            name="email"
                            defaultValue={doctorDetails?.email || ''}
                            required
                            placeholder="john.doe@oauthc.com"
                        />
                    </label>

                    <p>Social links</p>
                    <div className="social-links">
                        <label htmlFor="linkdin">
                            LinkedIn:
                            <input
                                type="url"
                                id="linkdin"
                                name="linkdin"
                                defaultValue={doctorDetails?.linkdin || ''}
                            />
                        </label>
                        <label htmlFor="instagram">
                            Instagram:
                            <input
                                type="url"
                                id="instagram"
                                name="instagram"
                                defaultValue={doctorDetails?.instagram || ''}
                            />
                        </label>
                        <label htmlFor="facebook">
                            Facebook:
                            <input
                                type="url"
                                id="facebook"
                                name="facebook"
                                defaultValue={doctorDetails?.facebook || ''}
                            />
                        </label>
                        <label htmlFor="twitter">
                            Twitter:
                            <input
                                type="url"
                                id="twitter"
                                name="twitter"
                                defaultValue={doctorDetails?.twitter || ''}
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
                                    <img src={imagePreview} alt="Preview" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                </div>
                            )}
                        </label>
                   </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Creating ...' : 'Create Profile'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminDoctorsCreate;
