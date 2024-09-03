import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select';

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

    const [selectedSpeciality, setSelectedSpeciality] = useState([]);
    const [selectedQualification, setSelectedQualification] = useState([]);
    const [selectedDepartments, setSelectedDepartments] = useState([]);
    const [selectedUnits, setSelectedUnits] = useState([]);
    const [doctorName, setDoctorName] = useState('');

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
                console.log('Selected doctor data:', doctor); // Added console log
                
                setFormData({
                    name: doctor.name || '',
                    gender: doctor.gender || '',
                    departments: doctor.departments ? doctor.departments.map(dep => ({ value: dep.id, label: dep.name })) : [],
                    units: doctor.units ? doctor.units.map(unit => ({ value: unit.id, label: unit.name })) : [],
                    speciality: doctor.specialty ? doctor.specialty.map(spec => ({ value: spec, label: spec })) : [],
                    qualification: doctor.qualification ? doctor.qualification.map(qual => ({ value: qual, label: qual })) : [],
                    unit: doctor.unit ? doctor.unit.map(unit => ({ value: unit, label: unit })) : [],
                    clinicDay: doctor.clinicDay || '',
                    image: doctor.image ? [doctor.image] : [], // Assuming doctor.image is a URL or file object
                    overviewText: doctor.overviewText || '',
                    accomplishments: doctor.accomplishments || '',
                    email: doctor.email || '',
                    linkdin: doctor.linkdin || '',
                    instagram: doctor.instagram || '',
                    twitter: doctor.twitter || '',
                    facebook: doctor.facebook || ''
                });
    
                // Set selected departments and units for multi-select
                setSelectedDepartments(doctor.departments ? doctor.departments.map(dep => ({ value: dep.id, label: dep.name })) : []);
                setSelectedUnits(doctor.units ? doctor.units.map(unit => ({ value: unit.id, label: unit.name })) : []);
                setSelectedSpeciality(doctor.specialty ? doctor.specialty.map(spec => ({ value: spec, label: spec })) : []);
                setSelectedQualification(doctor.qualification ? doctor.qualification.map(qual => ({ value: qual, label: qual })) : []);
                setDoctorName(doctor.name || '');
            } else {
                console.log('No doctor found with the given ID.');
            }
        }
    }, [doctorsData, id]);
    
    const handleSelectChange = (newValue, category) => {
        setFormData(prevData => ({
            ...prevData,
            [category]: newValue // Update the appropriate field in formData
        }));
    
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
        const { files } = e.target;
        setFormData(prevData => ({
            ...prevData,
            image: files 
        }));
    };
    
    const handleSave = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.gender) {
            setError('Name and gender are required');
            return;
        }
    
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
            
            // Assuming 'image' is a file object
            if (formData.image && formData.image.length > 0) {
                formData.image.forEach((file, index) => {
                    formDataToSend.append(`image`, file);
                });
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
                    'Authorization': `Bearer ${token}`
                },
                body: formDataToSend
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to update doctor profile.');
            }
    
            alert('Doctor profile updated successfully!');
            navigate('/admin/doctors');
        } catch (error) {
            setError(`Error: ${error.message}`);
        }
    };
    

    if (loading) {
        return <div className="loading">Loading...</div>; 
    }

    return (
        <>
            <form onSubmit={handleSave} className='doctor-update'>
                <div className="pages-caption">
                    <h1>Pages</h1>
                </div>
                <div className="back">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <Link to="/admin/doctors">
                        Back
                    </Link>
                </div>
                <div className="heading">
                    <h2>Update Doctor</h2>
                </div>
                {error && <div className="error">{error}</div>}
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <Select
                        options={genderOptions}
                        value={genderOptions.find(option => option.value === formData.gender)}
                        onChange={(option) => handleSelectChange(option, 'gender')}
                    />
                </div>
                <div className="form-group">
                    <label>Departments</label>
                    <Select
                        isMulti
                        options={defaultDepartmentOptions}
                        value={selectedDepartments}
                        onChange={(options) => handleSelectChange(options, 'departments')}
                    />
                </div>
                <div className="form-group">
                    <label>Units</label>
                    <Select
                        isMulti
                        options={defaultUnitsOptions}
                        value={selectedUnits}
                        onChange={(options) => handleSelectChange(options, 'units')}
                    />
                </div>
                <div className="form-group">
                    <label>Speciality</label>
                    <Select
                        isMulti
                        options={defaultSpecialtiesOptions}
                        value={selectedSpeciality}
                        onChange={(options) => handleSelectChange(options, 'speciality')}
                    />
                </div>
                <div className="form-group">
                    <label>Qualification</label>
                    <Select
                        isMulti
                        options={defaultQualificationsOptions}
                        value={selectedQualification}
                        onChange={(options) => handleSelectChange(options, 'qualification')}
                    />
                </div>
                <div className="form-group">
                    <label>Clinic Day</label>
                    <input
                        type="text"
                        name="clinicDay"
                        value={formData.clinicDay}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                    />
                </div>
                <div className="form-group">
                    <label>Text Description</label>
                    <textarea
                        name="overviewText"
                        value={formData.overviewText}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Accomplishment</label>
                    <textarea
                        type="text"
                        name="accomplishments"
                        value={formData.accomplishments}
                        onChange={handleInputChange}
                    />
                </div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                <div className="form-group">
                    <label>Linkdin</label>
                    <input
                        type="text"
                        name="linkdin"
                        value={formData.linkdin}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Instagram</label>
                    <input
                        type="text"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Twitter</label>
                    <input
                        type="text"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Facebook</label>
                    <input
                        type="text"
                        name="facebook"
                        value={formData.facebook}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </>
    );
};

export default AdminDoctorsUpdate;



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
    const [doctorName, setDoctorName] = useState('');

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
                console.log('Selected doctor data:', doctor);
    
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
                setDoctorName(doctor.name || '');
            } else {
                console.log('No doctor found with the given ID.');
            }
        }
    }, [doctorsData, id, departmentsData, unitsData]);

    const handleSelectChange = (newValue, category) => {
        setFormData(prevData => ({
            ...prevData,
            [category]: newValue // Update the appropriate field in formData
        }));
    
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
            // Set the form data
            setFormData(prevData => ({
                ...prevData,
                image: file // Assuming single file upload
            }));
    
            // Create a preview URL and set it
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.gender) {
            setError('Name and gender are required');
            return;
        }
    
        setLoading(true);
        toast.info('Updating doctor\'s profile...', {
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
    
            // Append the single file directly
            if (formData.image) {
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
                toast.success('Doctor profile updated successfully!', {
                    autoClose: 2000
                });
    
                setTimeout(() => {
                    navigate('/admin/doctors', { replace: true });
                }, 2000); // Redirect after 2 seconds
            } else {
                throw new Error(result.message || 'Update failed');
            }
        } catch (err) {
            toast.error(`Error: ${err.message}`, {
                autoClose: 5000
            });
        } finally {
            setLoading(false);
            toast.dismiss('loading-toast');
        }
    };