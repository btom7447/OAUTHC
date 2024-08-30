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

        unitsData: [
            {
                id: 1,
                unitImage: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/ife-unit.png?raw=true",
                name: "Ife Hospital Unit",
                state: "Ile-Ife, Osun State",
                address: "Ilesa Road, Ile-Ife.", 
                dateCreated: "Aug 30, 2024",
            },
            {
                id: 2,
                unitImage: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/locationsPicture%201.png?raw=true",
                name: "Ijeshaland Geriatric Centre",
                state: "Ilesa, Osun State",
                address: "Ijebu-Jesa Road, Ilesa.",
                dateCreated: "Aug 30, 2024",
            },
            {
                id: 3,
                unitImage: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/locationsPicture%204.jpg?raw=true",
                name: "Rural Comprehensive Health Centre",
                state: "Imesi-Ile, Osun State",
                address: "Imesi-Ile",
                dateCreated: "Aug 30, 2024",
            },
            {
                id: 4,
                unitImage: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/locationsPicture%205.jpg?raw=true",
                name: "urban Comprehensive Health Centre",
                state: "Ile-Ife, Osun State",
                address: "Eleyele Street, Ile-Ife.",
                dateCreated: "Aug 30, 2024",
            },
            {
                id: 5,
                unitImage: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/wesley-guild-unit.png?raw=true",
                name: "Wesley Guild Hospital Unit",
                state: "Ilsea, Osun State",
                address: "Ijofi Road, Ilesa.",
                dateCreated: "Aug 30, 2024",
            },
        ],

        schoolsData: [
            {
                id: 1, 
                dateCreated: "Aug 30, 2024", 
                overviewText: "The School of Nursing Ife, dedicated to educating students to become compassionate and skilled nurses, equipped to provide exceptional patient care in a variety of settings", 
                schoolImage: "https://img.freepik.com/free-photo/group-african-medical-students-posed-outdoor_627829-380.jpg?t=st=1719490292~exp=1719493892~hmac=5275ddb66ebf23cb36174e8c484c3e88b622c0bda49e0caa3b5c663a681ce6d1&w=1380",
                name: "School of Nursing, Ife",
                description: "The school's comprehensive curriculum emphasizes evidence-based practice, critical thinking, and effective communication. Students gain hands-on experience in state-of-the-art simulation labs and clinical settings, preparing them for a successful nursing career. Graduates of the School of Nursing are highly sought after for their expertise and commitment to delivering high-quality patient care. They go on to work in hospitals, clinics, and communities, making a positive impact on the healthcare landscape.",
                facilitiesText: "Equipped with state of the art facilities to suppport student learning and success. Our simulation labs, skills labs and classrooms are equipped with the latest technology and equipment, simulating real-world healthcare settings.",
                facilities: ["Simulation labs with high-fidelity mannequins", "Skills labs for hands-on practice", "Advanced audiovisual equipment for interactive learning"],
                faculties: ["Faculty of a", "Faculty of b", "Faculty of c"]
            },
            {
                id: 2, 
                dateCreated: "Aug 30, 2024",                
                overviewText: "School of Nursing Ilesa, is renowned for its nurturing environment, dedicated faculty, and rigorous academic programs, producing nursing professionals who excel in their field. ", 
                schoolImage: 'https://img.freepik.com/free-photo/group-african-paramedic-crew-doctors_627829-4957.jpg?t=st=1719490334~exp=1719493934~hmac=e28f16210e8aa5e82aa71d9249e8d687d62926432cb3439209d766defdc599f3&w=1380',
                name: "School of Nursing, Ilesa",
                description: "Students at Ife School of Nursing benefit from small class sizes, personalized attention, and a curriculum that emphasizes both theoretical foundations and practical skills. The school's strong network of healthcare partners provides students with diverse clinical experiences, preparing them for a wide range of nursing careers. Ife School of Nursing graduates are highly respected for their compassion, critical thinking, and exceptional patient care skills, making them valuable assets to healthcare teams worldwide.",
                facilitiesText: "This school offers modern facilities designed to enhance student learning and comfort. Our campus features spacious classrooms, well-equipped skills labs, and a comprehensive library. ",
                facilities: ["Spacious classrooms with multimedia resources", "Well-equipped skills labs for practical training", "Comprehensive library with e-learning resources"],
                faculties: ["Faculty of d", "Faculty of e", "Faculty of f", "Faculty of g"]
            },
            {
                id: 3, 
                dateCreated: "Aug 30, 2024",
                overviewText: "The School of Midwifery at OAUTHC is committed to educating midwives who deliver safe, personalized, and evidence-based care to women and their families.", 
                schoolImage: "https://img.freepik.com/free-photo/general-practitioner-attending-consultation-taking-notes_482257-40874.jpg?w=1380&t=st=1719490493~exp=1719491093~hmac=ca47750a3301e877042060803180658f1265ef1fad6a100a30b6a137d05ca183",
                name: "School of Midwifery",
                description: "The school's midwifery program focuses on the art and science of midwifery, emphasizing normal pregnancy, childbirth, and postpartum care. Students learn to manage complications and provide supportive care, developing the skills and confidence to practice midwifery with excellence. Graduates of the School of Midwifery are highly skilled and compassionate professionals, equipped to provide exceptional care to women and their families in a variety of settings. ",
                facilitiesText: "The School of Midwifery at OAUTHC provides specialized facilities to support midwifery education. Our birth simulation lab, skills labs, and classrooms are designed to replicate real-world midwifery settings.",
                facilities: ["Birth simulation lab with advanced mannequins", "Skills labs for hands-on midwifery training", "Classrooms with multimedia resources"],
                faculties: ["Faculty of h", "Faculty of i", "Faculty of j"]
            },
            {
                id: 4, 
                dateCreated: "Aug 30, 2024",
                overviewText: "The School of Perioperative Nursing at OAUTHC prepares nurses for the specialized care of surgical patients, emphasizing precision, safety, and compassionate care.", 
                schoolImage: "https://img.freepik.com/free-psd/interior-view-operating-room-generative-ai_587448-2215.jpg?t=st=1719492207~exp=1719495807~hmac=faabe366aa11831217d2d847756af1d9eee5d1512079adddbe271a8332e44d30&w=1380",
                name: "School of Perioperative Nursing",
                description: "The school's perioperative nursing program covers all aspects of surgical care, from preoperative assessment to postoperative recovery. Students gain expertise in anesthesia, surgical techniques, and patient management, developing the skills to work effectively in fast-paced surgical settings. Graduates of the School of Perioperative Nursing are highly sought after for their expertise and ability to provide high-quality care to surgical patients. ",
                facilitiesText: "The School of Perioperative Nursing offers cutting-edge facilities to prepare students for the operating room. Our simulation labs, skills labs, and classrooms are equipped with the latest surgical equipment and technology.",
                facilities: ["Simulation labs with virtual reality technology", "Skills labs for hands-on surgical training", "Classrooms with advanced audiovisual equipment"],
                faculties: ["Faculty of k", "Faculty of l", "Faculty of m"]
            },
            {
                id: 5, 
                dateCreated: "Aug 30, 2024",
                overviewText: "The School of Health Information Management at OAUTHC educates students to manage health data with accuracy, integrity, and confidentiality, supporting informed healthcare decisions. ", 
                schoolImage: 'https://img.freepik.com/free-psd/mock-up-design-with-smiley-doctor-holding-clipboard_23-2147659937.jpg?t=st=1719493460~exp=1719497060~hmac=254359817a41e603e44ba3de0ca5623ff4fbcfb87f73dff404d27ee6faad557b&w=900',
                name: "School of Health Information Management",
                description: "The school's HIM program covers health information systems, data analysis, and privacy and security regulations. Students learn to design and implement health information systems, preparing them for careers in healthcare data management. Graduates of the School of Health Information Management are highly skilled professionals, equipped to manage health data and support quality patient care. ",
                facilitiesText: "The School of Health Information Management at OAUTHC provides modern facilities to support HIM education. Our computer labs, classrooms, and library offer the latest technology and resources. ",
                facilities: ["Computer labs with specialized software", "classrooms with multimedia resources", "Comprehensive library with e-learning resources"],
                faculties: ["Faculty of n", "Faculty of o", "Faculty of p"]
            },
            {
                id: 6, 
                dateCreated: "Aug 30, 2024",
                overviewText: "The Community Health Officers Training Program at OAUTHC develops healthcare leaders who promote community-focused care, addressing health disparities and improving population health. ", 
                schoolImage: 'https://img.freepik.com/free-photo/africa-humanitarian-aid-doctor-taking-care-patient_23-2149117846.jpg?t=st=1719493664~exp=1719497264~hmac=8a1fc6d9568b0aba0be65a30aebc90349ce15eac9ab9d25e363afc127c84bbe1&w=1380',
                name: "Community Health Officers Program",
                description: "The program emphasizes community health assessment, program planning, and health education, preparing students to work effectively in diverse community settings. Students gain practical experience in community health projects, developing the skills to design and implement successful health initiatives. Graduates of the Community Health Officers Training Program are highly respected for their ability to lead community health efforts, promoting health equity and social justice.",
                facilitiesText: "The Community Health Officers Training Program at OAUTHC offers facilities that support community-focused learning. Our classrooms, skills labs, and community health centers provide students with practical experience. ",
                facilities: ["Classrooms with multimedia resources", "Skills lab for community health training", "Community health centers for practical experience"],
                faculties: ["Faculty of q", "Faculty of r", "Faculty of s"]
            }
        ],
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