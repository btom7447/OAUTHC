import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../Components/UserContext';
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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [genderOptions] = useState([
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
    ]);

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

        // Append units individually
        selectedUnits.forEach((unit, index) => {
            formData.append(`unit[${index}]`, unit.value);
        });

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
                } else {
                    toast.update(toastId, {
                        render: `Error: ${data.message}`,
                        type: "error",
                        isLoading: false,
                        autoClose: 3000,
                    });
                    setError(data.message);
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
                setError('An error occurred while creating the doctor profile.');
            });
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <ToastContainer />
            <form onSubmit={handleSubmit} className='doctor-create'>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={doctorDetails?.name || ''}
                    required
                /><br />

                <label htmlFor="gender">Gender:</label>
                <Select
                    id="gender"
                    name="gender"
                    options={genderOptions}
                    defaultValue={genderOptions.find(option => option.value === doctorDetails?.gender)}
                    required
                /><br />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={doctorDetails?.email || ''}
                    required
                /><br />

                <label htmlFor="department">Department:</label>
                <Select
                    id="department"
                    name="department"
                    options={departments}
                    isMulti
                    value={selectedDepartments}
                    onChange={handleDepartmentChange}
                    required
                /><br />

                <label htmlFor="specialty">Specialty:</label>
                <CreatableSelect
                    id="specialty"
                    name="specialty"
                    isMulti
                    value={specialties}
                    onChange={handleSpecialtyChange}
                    required
                /><br />

                <label htmlFor="unit">Unit:</label>
                <Select
                    id="unit"
                    name="unit"
                    options={units}
                    isMulti
                    value={selectedUnits}
                    onChange={handleUnitChange}
                    required
                /><br />

                <label htmlFor="qualification">Qualification:</label>
                <CreatableSelect
                    id="qualification"
                    name="qualification"
                    isMulti
                    value={qualifications}
                    onChange={handleQualificationChange}
                    required
                /><br />

                <label htmlFor="clinic_day">Clinic Day:</label>
                <input
                    type="text"
                    id="clinic_day"
                    name="clinic_day"
                    defaultValue={doctorDetails?.clinic_day || ''}
                    required
                /><br />

                <label htmlFor="text_desc">Text Description:</label>
                <input
                    type="text"
                    id="text_desc"
                    name="text_desc"
                    defaultValue={doctorDetails?.text_desc || ''}
                    required
                /><br />

                <label htmlFor="accomplishment">Accomplishment:</label>
                <input
                    type="text"
                    id="accomplishment"
                    name="accomplishment"
                    defaultValue={doctorDetails?.accomplishment || ''}
                    required
                /><br />

                <label htmlFor="linkdin">LinkedIn:</label>
                <input
                    type="url"
                    id="linkdin"
                    name="linkdin"
                    defaultValue={doctorDetails?.linkdin || ''}
                /><br />

                <label htmlFor="images">Images:</label>
                <input
                    type="file"
                    id="images"
                    name="images"
                    multiple
                /><br />

                <button type="submit">Create Doctor</button>
            </form>
        </>
    );
};

export default AdminDoctorsCreate;




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