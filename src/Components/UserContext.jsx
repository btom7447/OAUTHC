import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [departmentsData, setDepartmentsData] = useState([]);
    const [doctorsData, setDoctorsData] = useState([]);

    // Fetch Data Function
    const fetchData = async () => {
        const departmentsUrl = 'https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/department';
        const doctorsUrl = 'https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/doctors';

        try {
            const [departmentsResponse, doctorsResponse] = await Promise.all([
                fetch(departmentsUrl, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                }),
                fetch(doctorsUrl, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                })
            ]);

            if (!departmentsResponse.ok || !doctorsResponse.ok) {
                throw new Error(`HTTP error! Status: ${departmentsResponse.status} or ${doctorsResponse.status}`);
            }

            const [departmentsData, doctorsData] = await Promise.all([
                departmentsResponse.json(),
                doctorsResponse.json()
            ]);

            if (departmentsData && departmentsData.data) {
                const transformedDepartments = departmentsData.data.map(department => ({
                    id: department.id,
                    name: department.name,
                    status: department.status,
                    dateCreated: department.created_at,
                    overviewText: department.over_view_text,
                    departmentImage: '',
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
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Update Department
    const updateDepartment = async (departmentId, updatedData) => {
        const url = `https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/department/${departmentId}`;
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            fetchData(); // Refresh data after update
        } catch (error) {
            console.error('Error updating department:', error);
        }
    };

    // Update Doctor
    const updateDoctor = async (doctorId, updatedData) => {
        const url = `https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/doctor/${doctorId}`;
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            fetchData(); // Refresh data after update
        } catch (error) {
            console.error('Error updating doctor:', error);
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

        adminData: [],

        departmentsData,
        doctorsData,
        updateDepartment,
        updateDoctor,

        // Add more user data here if needed
    };

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
