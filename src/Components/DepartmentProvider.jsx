import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const DepartmentContext = createContext();

export const DepartmentProvider = ({ children }) => {
    const [departments, setDepartments] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [units, setUnits] = useState([]);
    const [schools, setSchools] = useState([]);
    const cache = useRef({});  // Ref to store cached data

    const fetchData = async () => {
        const departmentUrl = 'https://oauthc.iccflifeskills.com.ng/v0.1/api/home/department';
        const doctorUrl = 'https://oauthc.iccflifeskills.com.ng/v0.1/api/home/doctors';
        const unitUrl = 'https://oauthc.iccflifeskills.com.ng/v0.1/api/home/unit';
        const schoolsUrl = 'https://oauthc.iccflifeskills.com.ng/v0.1/api/home/schools'; 

        const token = localStorage.getItem('bearer_token');

        // Check localStorage first
        const cachedDepartments = JSON.parse(localStorage.getItem('departments'));
        const cachedDoctors = JSON.parse(localStorage.getItem('doctors'));
        const cachedUnits = JSON.parse(localStorage.getItem('units'));
        const cachedSchools = JSON.parse(localStorage.getItem('schools'));

        if (cachedDepartments) {
            setDepartments(cachedDepartments);
        }
        if (cachedDoctors) {
            setDoctors(cachedDoctors);
        }
        if (cachedUnits) {
            setUnits(cachedUnits);
        }
        if (cachedSchools) {
            setSchools(cachedSchools);
        }

        if (cachedDepartments && cachedDoctors && cachedUnits && cachedSchools) {
            return; // Data already cached, no need to fetch
        }

        try {
            const [departmentResponse, doctorResponse, unitResponse, schoolsResponse] = await Promise.all([
                fetch(departmentUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, 
                    }
                }),
                fetch(doctorUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }),
                fetch(unitUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                }),
                fetch(schoolsUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                }),
            ]);

            if (!departmentResponse.ok || !doctorResponse.ok || !unitResponse.ok || !schoolsResponse.ok) {
                throw new Error(`HTTP error! Department status: ${departmentResponse.status}, Doctor status: ${doctorResponse.status}, Unit status: ${unitResponse.status}, Schools status: ${schoolsResponse.status}`);
            }

            const departmentData = await departmentResponse.json();
            const doctorData = await doctorResponse.json();
            const unitData = await unitResponse.json();
            const schoolsData = await schoolsResponse.json(); 

            if (departmentData && departmentData.data) {
                const transformedDepartments = departmentData.data.map(department => ({
                    id: department.id,
                    title: department.name,
                    status: department.status,
                    dateCreated: department.created_at,
                    overviewText: department.over_view_text,
                    departmentImage: department.image,
                    departmentName: department.name,
                    text: department.text,
                    services: department.services,
                    facilities: department.facilities,
                    phone: department.phone
                }));
                setDepartments(transformedDepartments);
                localStorage.setItem('departments', JSON.stringify(transformedDepartments));  // Cache the data
            }

            if (doctorData && doctorData.data) {
                const transformedDoctors = doctorData.data.map(doctor => ({
                    id: doctor.id,
                    doctorName: doctor.name,
                    dateCreated: doctor.created_at,
                    gender: doctor.gender,
                    department: doctor.departments.map(dep => dep.name),
                    qualification: doctor.qualifications,
                    specialty: doctor.specialties,
                    unit: doctor.units,
                    clinicDay: doctor.clinic_day,
                    doctorImage: doctor.image_url,
                    overviewText: doctor.text_desc,
                    accomplishments: doctor.accomplishment,
                    email: doctor.email,
                    linkedIn: doctor.social_links[0],
                    facebook: doctor.social_links[1],
                    instagram: doctor.social_links[2],
                    twitter: doctor.social_links[3]
                }));
                setDoctors(transformedDoctors);
                localStorage.setItem('doctors', JSON.stringify(transformedDoctors));  // Cache the data
            }

            if (unitData && unitData.data) {
                const transformedUnits = unitData.data.map(unit => ({
                    id: unit.id,
                    unitName: unit.name,
                    unitAddress: unit.address,
                    unitLocation: unit.state,
                    unitImage: unit.unitImage,
                }));
                setUnits(transformedUnits);
                localStorage.setItem('units', JSON.stringify(transformedUnits));  // Cache the data
            }

            if (schoolsData && schoolsData.data) {
                const transformedSchools = schoolsData.data.map(school => ({
                    id: school.id,
                    dateCreated: school.created_at,
                    schoolName: school.schoolName,
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
                setSchools(transformedSchools);
                localStorage.setItem('schools', JSON.stringify(transformedSchools));  // Cache the data
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const contextValue = {
        departments,
        schools,
        doctors,
        units,
    };

    return (
        <DepartmentContext.Provider value={contextValue}>
            {children}
        </DepartmentContext.Provider>
    );
};

// Custom hooks for context
export const useDepartments = () => useContext(DepartmentContext).departments;
export const useSchools = () => useContext(DepartmentContext).schools;
export const useDoctors = () => useContext(DepartmentContext).doctors;
export const useUnits = () => useContext(DepartmentContext).units;

export { DepartmentContext };
