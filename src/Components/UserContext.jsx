import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [departmentsData, setDepartmentsData] = useState([]);
    const [doctorsData, setDoctorsData] = useState([]);
    const [unitsData, setUnitsData] = useState([]);
    const [schoolsData, setSchoolsData] = useState([]);
    const [healthServicesData, setHealthServicesData] = useState([]);
    const [testsData, setTestsData] = useState([]);
    const [diseasesData, setDiseasesData] = useState([]);
    const [testimonialsData, setTestimonialsData] = useState([]);
    const [announcementsData, setAnnouncementsData] = useState([]);
    const [adminsData, setAdminsData] = useState([]);
    const [appointmentsData, setAppointmentsData] = useState([]);

    const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/admin';

    // Fetch Data Function
    const fetchData = async () => {
        const departmentsUrl = `${BASE_URL}/department`;
        const doctorsUrl = `${BASE_URL}/doctors`;
        const unitsUrl = `${BASE_URL}/unit`;
        const schoolsUrl = `${BASE_URL}/schools`;
        const healthServicesUrl = `${BASE_URL}/health`;
        const testsUrl = `${BASE_URL}/tests`;
        const diseasesUrl = `${BASE_URL}/disease`;
        const testimonialsUrl = `${BASE_URL}/testimonials`;
        const announcementsUrl = `${BASE_URL}/announcement`;
        const adminsUrl = `${BASE_URL}/all-admin`;
        const appointmentsUrl = `${BASE_URL}/appointments`;

    
        const token = localStorage.getItem('bearer_token');
    
        if (!token) {
            console.error('No token found. Please log in.');
            return;
        }
    
        try {
            const [
                departmentsResponse, 
                doctorsResponse, 
                unitsResponse, 
                schoolsResponse, 
                healthServicesResponse, 
                testsResponse, 
                diseasesResponse, 
                testimonialsResponse,
                announcementsResponse,
                adminsResponse, 
                appointmentsResponse,
            ] = await Promise.all([

                fetch(departmentsUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                }),
                fetch(doctorsUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                }),
                fetch(unitsUrl, {
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
                fetch(healthServicesUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                }),
                fetch(testsUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                }),
                fetch(diseasesUrl, {
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
                fetch(adminsUrl, {
                    method: 'GET', 
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                }),
                fetch(appointmentsUrl, {
                    method: 'GET', 
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                }),
            ]);
    
            if (!departmentsResponse.ok || !doctorsResponse.ok || !unitsResponse.ok || !schoolsResponse.ok || !healthServicesResponse.ok || !testsResponse.ok || !diseasesResponse.ok || !testimonialsResponse.ok || !adminsResponse.ok || !adminsResponse.ok || !appointmentsResponse.ok) { 
                throw new Error(`HTTP error! Status: ${departmentsResponse.status} or ${doctorsResponse.status} or ${unitsResponse.status} or ${schoolsResponse.status} or ${healthServicesResponse.status} or ${testsResponse.status} or ${diseasesResponse.status} or ${testimonialsResponse.status} or ${adminsResponse.status} or ${announcementsResponse.status} or ${appointmentsResponse.status}`);
            }
            
            const [
                departmentsData, 
                doctorsData, 
                unitsData, 
                schoolsData, 
                healthServicesData, 
                testsData, 
                diseasesData, 
                testimonialsData,
                announcementsData,
                adminsData,
                appointmentsData,
            ] = await Promise.all([
                departmentsResponse.json(),
                doctorsResponse.json(),
                unitsResponse.json(),
                schoolsResponse.json(),
                healthServicesResponse.json(),
                testsResponse.json(),
                diseasesResponse.json(),
                testimonialsResponse.json(),
                announcementsResponse.json(),
                adminsResponse.json(),
                appointmentsResponse.json(),
            ]);
    
            if (departmentsData && departmentsData.data) {
                const transformedDepartments = departmentsData.data.map(department => ({
                    id: department.id,
                    name: department.name,
                    status: department.status,
                    dateCreated: department.created_at,
                    overviewText: department.over_view_text,
                    departmentImage: department.image,
                    departmentName: department.name,
                    text: department.text,
                    facilities: department.facilities,
                    services: department.services,
                    phone: department.phone
                }));
                setDepartmentsData(transformedDepartments);
            } else {
                console.error('Failed to retrieve departments:', departmentsData.message || 'Unexpected response structure');
            }
    
            if (doctorsData && doctorsData.data) {
                const transformedDoctors = doctorsData.data.map(doctor => ({
                    id: doctor.id,
                    name: doctor.name,
                    dateCreated: doctor.created_at,
                    gender: doctor.gender,
                    department: doctor.departments,
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
                setDoctorsData(transformedDoctors);
            } else {
                console.error('Failed to retrieve doctors:', doctorsData.message || 'Unexpected response structure');
            }
    
            if (unitsData && unitsData.data) {
                const transformedUnits = unitsData.data.map(unit => ({
                    id: unit.id,
                    name: unit.name,
                    dateCreated: unit.dateCreated,
                    unitImage: unit.unitImage,
                    state: unit.state, 
                    address: unit.address
                }));
                setUnitsData(transformedUnits);
            } else {
                console.error('Failed to retrieve Units:', unitsData.message || 'Unexpected response structure');
            }
            if (schoolsData && schoolsData.data) {
                const transformedSchools = schoolsData.data.map(school => ({
                    id: school.id,
                    dateCreated: school.created_at,
                    name: school.schoolName,
                    overviewText: school.overviewText,
                    schoolImage: school.schoolImage,
                    vision: school.vision,
                    mission: school.mission,
                    location: school.location,
                    function: school.function,
                    service: school.services,
                    ruralPosting: school.ruralPosting, 
                    clinicalPosting: school.clinicalPosting, 
                    specialTraining: school.specialTraining,
                }));
                setSchoolsData(transformedSchools);
            } else {
                console.error('Failed to retrieve Schools:', schoolsData.message || 'Unexpected response structure:', schoolsData);
            }            
            if (healthServicesData && Array.isArray(healthServicesData.data.data)) {
                const transformedHealthService = healthServicesData.data.data.map(healthService => ({
                    id: healthService.id,
                    dateCreated: healthService.created_at,
                    name: healthService.name,
                    servicesImage: healthService.servicesImage,
                    highlights: healthService.highlights,
                    texts: healthService.texts
                }));
                setHealthServicesData(transformedHealthService);
            } else {
                console.error('Failed to retrieve Health Services:', healthServicesData?.message || 'Unexpected response structure:', healthServicesData);
            }
            if (testsData && testsData.data) {
                const transformedTests = testsData.data.map(test => ({
                    id: test.id,
                    dateCreated: test.created_at,
                    name: test.name,
                    overview: test.overview, 
                    why: test.why,
                    preparation: test.preparation, 
                    expectation: test.expectation,
                    result: test.result,
                    limitation: test.limitation,
                }));
                setTestsData(transformedTests);
            } else {
                console.error('Failed to retrieve Tests:', testsData?.message || 'Unexpected response structure:', testsData);
            }
            if (diseasesData && diseasesData.data) {
                const transformedDiseases = diseasesData.data.map(disease => ({
                    id: disease.id,
                    dateCreated: disease.created_at,
                    name: disease.name,
                    overviewText: disease.overviewText, 
                    description: disease.description,
                    symptoms: disease.symptoms, 
                    treatment: disease.treatment,
                    images: disease.images,
                }));
                setDiseasesData(transformedDiseases);
            } else {
                console.error('Failed to retrieve Diseases:', diseasesData?.message || 'Unexpected response structure:', diseasesData);
            }
            if (testimonialsData && testimonialsData.data) {
                const transformedTestimonials = testimonialsData.data.map(testimony => ({
                    id: testimony.id,
                    dateCreated: testimony.created_at,
                    name: testimony.name,
                    message: testimony.message, 
                    starRatings: testimony.star_ratings,
                }));
                setTestimonialsData(transformedTestimonials);
            } else {
                console.error('Failed to retrieve Testimonials:', testimonialsData?.message || 'Unexpected response structure:', testimonialsData);
            }
            if (announcementsData && announcementsData.data) {
                const transforedAnnouncements = announcementsData.data.map(announce => ({
                    id: announce.id, 
                    dateCreated: announce.created_at,
                    name: announce.name, 
                    content: announce.content,
                    published: announce.published,
                }));
                setAnnouncementsData(transforedAnnouncements);
            } else {
                console.error('Failed to retrieve announcements:', announcementsData?.message || 'Unexpected response structure:', announcementsData);
            }
            if (adminsData && adminsData.data) {
                const transformedAdmins = adminsData.data.map(admin => ({
                    id: admin.user_id,
                    dateCreated: admin.created_at,
                    name: admin.name,
                    email: admin.email,
                    role: admin.role, 
                    image: admin.profile_image,
                }));
                setAdminsData(transformedAdmins);
            } else {
                console.error('Failed to retrieve Admin:', adminsData?.message || 'Unexpected response structure:', adminsData);
            }
            if (appointmentsData && appointmentsData.data) {
                const transformedAppointments = appointmentsData.data.map(patientData => ({
                    id: patientData.user.id,
                    name: patientData.user.name,
                    email: patientData.user.email,
                    phone: patientData.user.phone,
                    gender: patientData.user.gender,
                    patientType: patientData.patient_type,
                    patientDate: patientData.patient_preferred_appointment_date,
                    status: patientData.appointment_status,
                    appointmentId: patientData.id,
                    // status: patientData.user.status,
                }));
                setAppointmentsData(transformedAppointments);
            } else {
                console.error('Failed to retrieve Appointments:', appointmentsData?.message || 'Unexpected response structure:', appointmentsData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const userData = {
        name: "Travon Johnston",
        role: "Super Admin",
        image: "https://img.freepik.com/free-vector/man-red-shirt-with-white-collar_90220-2873.jpg?ga=GA1.1.859609110.1724246103&semt=ais_hybrid", 
        
        // Statistics data for the admin dashboard
        statisticsData: {
            newPatient: 120,
            newAppointments: 50,
            newEnquiries: 20,
            appointments: 120,
            enquiries: 45,
            patients: 200,
            services: 30,
            staff: 15,
            reviews: 80,
            rate: 4.8,
            // Add more statistics as needed
        },

        patientVisit: {
            monthly: [
                { month: 'Jan', visits: 120 },
                { month: 'Feb', visits: 150 },
                { month: 'Mar', visits: 170 },
                { month: 'Apr', visits: 160 },
                { month: 'May', visits: 140 },
                { month: 'Jun', visits: 180 },
                { month: 'Jul', visits: 200 },
                { month: 'Aug', visits: 210 },
                { month: 'Sep', visits: 190 },
                { month: 'Oct', visits: 220 },
                { month: 'Nov', visits: 240 },
                { month: 'Dec', visits: 230 },
            ],
            yearly: [
                { year: '2019', visits: 1500 },
                { year: '2020', visits: 1700 },
                { year: '2021', visits: 1800 },
                { year: '2022', visits: 1600 },
                { year: '2023', visits: 2000 },
            ],
        },

        patientsData: [
            { 
                id: 1, 
                name: 'Jenny Wilson', 
                dateIn: '2024-06-29', 
                patientType: 'Referred Patient', 
                status: 'Confirmed', 
                gender: 'Female'
            },
            { 
                id: 2, 
                name: 'Albert Flores', 
                dateIn: '2023-08-02', 
                patientType: 'New Patient', 
                status: 'Cancelled', 
                gender: 'Male'
            },
            { 
                id: 3, 
                name: 'Floyd Miles', 
                dateIn: '2023-08-02', 
                patientType: 'Returning Patient', 
                status: 'Incoming', 
                gender: 'Female'
            },
            { 
                id: 4, 
                name: 'Marvin McKinney', 
                dateIn: '2023-08-02', 
                patientType: 'Referred Patient', 
                status: 'Confirmed', 
                gender: 'Male'
            },
            { 
                id: 5, 
                name: 'Jane Smith', 
                dateIn: '2023-08-02', 
                patientType: 'New Patient', 
                status: 'Incoming', 
                gender: 'Female'
            },
            // Add more patient records as needed...
        ],

        patientReview: { 
            totalReviews: 45251,
            satisfactionLevels: {
                excellent: 27150,
                good: 15838, 
                poor: 2263  
            }
        },

        appointments: [
            {
                patientName: 'Jenny Wilson',
                date: '2024-08-25',
                time: '09:00 AM',
                department: 'Cardiology',
                status: 'Confirmed',
                patientType: 'Returning Patient'
            },
            {
                patientName: 'Albert Flores',
                date: '2024-08-25',
                time: '10:30 AM',
                department: 'Neurology',
                status: 'Pending',
                patientType: 'New Patient'
            },
            {
                patientName: 'Floyd Miles',
                date: '2024-08-25',
                time: '11:00 AM',
                department: 'Pediatrics',
                status: 'Confirmed',
                patientType: 'Referred Patient'
            },
            {
                patientName: 'Marvin McKinney',
                date: '2024-08-25',
                time: '01:00 PM',
                department: 'Dermatology',
                status: 'Cancelled',
                patientType: 'Returning Patient'
            },
            {
                patientName: 'Jane Smith',
                date: '2024-08-26',
                time: '02:30 PM',
                department: 'Orthopedics',
                status: 'Confirmed',
                patientType: 'Referred Patient'
            },
        ],

        departmentsData,
        doctorsData,
        unitsData,
        schoolsData,
        healthServicesData, 
        testsData, 
        diseasesData, 
        testimonialsData,
        announcementsData,
        adminsData,
        appointmentsData,

        // Add more user data here if needed
    };

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);