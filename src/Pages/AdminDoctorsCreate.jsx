import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDoctorsCreate = () => {
    const { doctorId } = useParams();  
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

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await fetch('https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/department', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setDepartments(data.data.map(dep => ({ value: dep.id, label: dep.name })));
            } catch (error) {
                console.error('Error fetching departments:', error);
                setError('Error fetching departments');
            }
        };
    
        const fetchUnits = async () => {
            try {
                const response = await fetch('https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/unit', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setUnits(data.data.map(unit => ({ value: unit.id, label: unit.name })));
            } catch (error) {
                console.error('Error fetching units:', error);
                setError('Error fetching units');
            }
        };
    
        const fetchDoctorDetails = async () => {
            if (doctorId) {
                try {
                    const response = await fetch(`https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/doctor/${doctorId}`, {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    const data = await response.json();
                    setDoctorDetails(data.data);
                    setSpecialties(data.data.specialties || []);
                    setQualifications(data.data.qualifications || []);
    
                    // Pre-populate the selected departments and units
                    setSelectedDepartments(data.data.departments.map(dep => ({ value: dep.id, label: dep.name })) || []);
                    setSelectedUnits(data.data.units.map(unit => ({ value: unit.id, label: unit.name })) || []);
    
                } catch (error) {
                    console.error('Error fetching doctor details:', error);
                    setError('Error fetching doctor details');
                }
            }
        };
    
        fetchDepartments();
        fetchUnits();
        fetchDoctorDetails();
        setLoading(false);
    }, [doctorId, token]);
    

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
    
       // Append departments individually
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

                <label htmlFor="instagram">Instagram:</label>
                <input
                    type="url"
                    id="instagram"
                    name="instagram"
                    defaultValue={doctorDetails?.instagram || ''}
                /><br />

                <label htmlFor="facebook">Facebook:</label>
                <input
                    type="url"
                    id="facebook"
                    name="facebook"
                    defaultValue={doctorDetails?.facebook || ''}
                /><br />

                <label htmlFor="twitter">Twitter:</label>
                <input
                    type="url"
                    id="twitter"
                    name="twitter"
                    defaultValue={doctorDetails?.twitter || ''}
                /><br />

                <label htmlFor="image">Upload Image:</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    required
                /><br /><br />

                <button type="submit">Update Doctor</button>
            </form>
        </>
    );
};

export default AdminDoctorsCreate;
