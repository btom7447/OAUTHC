import React, { createContext, useContext, useState, useEffect } from 'react';

const DepartmentContext = createContext();
const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/home';

export const DepartmentProvider = ({ children }) => {
    const [departments, setDepartments] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [units, setUnits] = useState([]);
    const [schools, setSchools] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [announcements, setAnnouncements] = useState([]);

    const fetchData = async () => {
        const departmentUrl = `${BASE_URL}/department`;
        const doctorUrl = `${BASE_URL}/doctors`;
        const unitUrl = `${BASE_URL}/unit`;
        const schoolsUrl = `${BASE_URL}/schools`;
        const testimonialsUrl = `${BASE_URL}/testimonials`;
        const announcementsUrl = `${BASE_URL}/announcement`;


        const token = localStorage.getItem('bearer_token');

        // Check localStorage first
        const cachedDepartments = JSON.parse(localStorage.getItem('departments'));
        const cachedDoctors = JSON.parse(localStorage.getItem('doctors'));
        const cachedUnits = JSON.parse(localStorage.getItem('units'));
        const cachedSchools = JSON.parse(localStorage.getItem('schools'));
        const cachedTestimonials = JSON.parse(localStorage.getItem('testimonials'));
        const cachedAnnouncements = JSON.parse(localStorage.getItem('announcements'));

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
        if (cachedTestimonials) {
            setTestimonials(cachedTestimonials);  
        }
        if (cachedAnnouncements) {
            setAnnouncements(cachedAnnouncements)
        }

        if (cachedDepartments && cachedDoctors && cachedUnits && cachedSchools && cachedTestimonials && cachedAnnouncements) {
            return; // Data already cached, no need to fetch
        }

        try {
            const [departmentResponse, doctorResponse, unitResponse, schoolsResponse, testimonialsResponse, announcementsResponse] = await Promise.all([
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
                fetch(testimonialsUrl, {
                    method: 'GET', 
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                }),
                fetch(announcementsUrl, {
                    method: 'GET', 
                    headers: {
                        'Content-Type': 'application/json', 
                        'Authorization': `Bearer ${token}`,
                    }
                }),
            ]);

            if (!departmentResponse.ok || !doctorResponse.ok || !unitResponse.ok || !schoolsResponse.ok || !testimonialsResponse || !announcementsResponse) {
                throw new Error(`HTTP error! Department status: ${departmentResponse.status}, Doctor status: ${doctorResponse.status}, Unit status: ${unitResponse.status}, Schools status: ${schoolsResponse.status}, Testimonials status: ${testimonialsResponse.status}, Announcement status: ${announcementsResponse.status}`);
            }

            const departmentData = await departmentResponse.json();
            const doctorData = await doctorResponse.json();
            const unitData = await unitResponse.json();
            const schoolsData = await schoolsResponse.json(); 
            const testimonialsData = await testimonialsResponse.json();
            const announcementsData = await announcementsResponse.json();

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

            if (testimonialsData && testimonialsData.data) {
                const transformedTestimonials = testimonialsData.data.map(testimony => ({
                    id: testimony.id,
                    name: testimony.name,
                    message: testimony.message, 
                    starRatings: testimony.star_ratings,
                }));
                setTestimonials(transformedTestimonials); 
                localStorage.setItem('testimonials', JSON.stringify(transformedTestimonials));  // Cache the data
            }

            if (announcementsData && announcementsData.data) {
                const transformedAnnouncements = announcementsData.data.map(announce => ({
                    id: announce.id, 
                    name: announce.name, 
                    content: announce.content,
                    published: announce.published,
                }));
                setAnnouncements(transformedAnnouncements); 
                localStorage.setItem('announcements', JSON.stringify(transformedAnnouncements));  // Cache the data
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
        testimonials,
        announcements,
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
export const useTestimonials = () => useContext(DepartmentContext).testimonials;
export const useAnnouncements = () => useContext(DepartmentContext).announcements;

export { DepartmentContext };
