import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [departmentsData, setDepartmentsData] = useState([]);
    const [doctorsData, setDoctorsData] = useState([]);
    const [unitsData, setUnitsData] = useState([]);

    // Fetch Data Function
    const fetchData = async () => {
        const departmentsUrl = 'https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/department';
        const doctorsUrl = 'https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/doctors';
        const unitsUrl = 'https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/unit';
    
        const token = localStorage.getItem('bearer_token');
    
        if (!token) {
            console.error('No token found. Please log in.');
            return;
        }
    
        try {
            const [departmentsResponse, doctorsResponse, unitsResponse] = await Promise.all([
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
            ]);
    
            if (!departmentsResponse.ok || !doctorsResponse.ok || !unitsResponse.ok) {
                throw new Error(`HTTP error! Status: ${departmentsResponse.status} or ${doctorsResponse.status} or ${unitsResponse.status}`);
            }
    
            const [departmentsData, doctorsData, unitsData] = await Promise.all([
                departmentsResponse.json(),
                doctorsResponse.json(),
                unitsResponse.json(),
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
                    dateCreated: unit.created_at,
                    unitImage: unit.image,
                    state: unit.state, 
                    address: unit.address
                }));
                setUnitsData(transformedUnits);
            } else {
                console.error('Failed to retrieve Units:', unitsData.message || 'Unexpected response structure');
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

        adminData: [],

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

        healthServicesData: [
            {
                id: 1, 
                name: "Cardiology",
                services: [
                  "Diagnosis and treatment of heart conditions",
                  "Cardiogram and echocardiogram tests",
                  "Heart failure management",
                  "Coronary artery disease treatment",
                  "Cardiac catheterization",
                  "Heart rhythm disorder treatment"
                ],
                text: [
                  "Cardiology is the branch of medicine that deals with the diagnosis and treatment of heart conditions.",
                  "Our cardiology department offers a range of services, including cardiogram and echocardiogram tests, heart failure management, and coronary artery disease treatment.",
                  "Our team of cardiologists and cardiovascular surgeons are dedicated to providing high-quality care to patients with heart conditions.",
                  "We use the latest technology and techniques to diagnose and treat heart conditions, and our goal is to provide personalized care to each patient."
                ], 
                dateCreated: "Aug 30, 2024",
                servicesImage: "https://img.freepik.com/free-photo/doctor-showing-plastic-heart_23-2147612170.jpg?t=st=1719524525~exp=1719528125~hmac=8161df82d728f058e64e66cfb6f6fb6717e8f8c50b54d47bbb52fbaf2286348a&w=1380",
            },
            {
                id: 2, 
                name: "General Surgery",
                services: [
                  "Appendectomy and hernia repair",
                  "Gallbladder removal and other abdominal surgeries",
                  "Breast surgery and biopsies",
                  "Skin lesion removal and reconstruction",
                  "Wound care and closure",
                  "Emergency surgical services"
                ],
                text: [
                  "General surgery is a surgical specialty that focuses on the diagnosis and treatment of a wide range of conditions.",
                  "Our general surgery department offers a range of services, including appendectomy and hernia repair, gallbladder removal, and breast surgery.",
                  "Our team of surgeons and surgical nurses are dedicated to providing high-quality care to patients undergoing surgery.",
                  "We use the latest technology and techniques to ensure safe and effective surgical procedures."
                ], 
                dateCreated: "Aug 30, 2024",
                servicesImage: "https://img.freepik.com/free-photo/doctors-doing-surgical-procedure-patient_23-2148962500.jpg?t=st=1719526623~exp=1719530223~hmac=c0e1d0e93433c9db0a1166738297be1c5f913ab49a152fafcd332e5820fe058a&w=1060",
            },
            {
                id: 3, 
                name: "Health Education",
                services: [
                  "Health education classes and workshops",
                  "Disease prevention and management",
                  "Nutrition counseling and education",
                  "Fitness and exercise programs",
                  "Stress management and mental health resources",
                  "Community outreach and health fairs"
                ],
                text: [
                  "Health education is an essential part of our healthcare services.",
                  "Our health education department offers a range of services, including health education classes and workshops, disease prevention and management, and nutrition counseling.",
                  "Our team of health educators and nutritionists are dedicated to providing high-quality education and resources to patients.",
                  "We believe that education is key to empowering patients to take control of their health."
                ], 
                dateCreated: "Aug 30, 2024",
                servicesImage: "https://img.freepik.com/free-photo/side-view-woman-doctor-s-appointment_23-2149726963.jpg?t=st=1719526699~exp=1719530299~hmac=7836f878b011f5bb224ea16ecf57d243f47a3f5ac53e713218fd8b3e3906dfb3&w=740",
            },
            {
                id: 4,
                name: "Health Screenings",
                services: [
                "Blood pressure checks",
                "Cholesterol screenings",
                "Diabetes testing",
                "Body mass index (BMI) assessments",
                "Blood glucose monitoring",
                "Lipid profile testing"
                ],
                text: [
                "Health screenings are an essential part of preventive healthcare.",
                "Our health screening services include blood pressure checks, cholesterol screenings, and diabetes testing.",
                "Our team of healthcare professionals are dedicated to providing high-quality care and education to patients.",
                "We believe that early detection and prevention are key to maintaining good health."
                ], 
                dateCreated: "Aug 30, 2024",
                servicesImage: "https://img.freepik.com/free-photo/medic-holding-radiography-examination-with-patient_482257-26739.jpg?t=st=1719526924~exp=1719530524~hmac=b5aabe9459b837f93cae2b99cdcdf081b595a0df7c2bbf69d6fbdf91e6a47f82&w=1380",
            },
            {
                id: 5,
                name: "Imaging",
                services: [
                "X-rays",
                "Ultrasound",
                "Computed Tomography (CT) scans",
                "Magnetic Resonance Imaging (MRI)",
                "Mammography",
                "Fluoroscopy"
                ],
                text: [
                "Imaging services are an essential part of diagnostic healthcare.",
                "Our imaging services include X-rays, ultrasound, CT scans, MRI, mammography, and fluoroscopy.",
                "Our team of radiologists and technologists are dedicated to providing high-quality images and interpretations.",
                "We believe that accurate diagnoses are key to effective treatment and care."
                ], 
                dateCreated: "Aug 30, 2024",
                servicesImage: "https://img.freepik.com/free-photo/afro-american-young-medic-doctor-looking-x-ray-isolated-gray-background_231208-2228.jpg?t=st=1719527033~exp=1719530633~hmac=762b3120fa16c5e75f19d32205927a6ef6090b0498659418d4043b46e0ed299a&w=1380",
            },
            {
                id: 6,
                name: "Laboratory Tests",
                services: [
                "Blood work",
                "Urinalysis",
                "Cholesterol testing",
                "Glucose testing",
                "Lipid profile testing",
                "Thyroid function testing"
                ],
                text: [
                "Laboratory tests are an essential part of diagnostic healthcare.",
                "Our laboratory services include blood work, urinalysis, cholesterol testing, glucose testing, lipid profile testing, and thyroid function testing.",
                "Our team of laboratory professionals are dedicated to providing high-quality testing and results.",
                "We believe that accurate test results are key to effective treatment and care."
                ], 
                dateCreated: "Aug 30, 2024",
                servicesImage: "https://img.freepik.com/free-photo/doctor-patient-ophthalmologist-s-office_23-2150917694.jpg?t=st=1719526962~exp=1719530562~hmac=c0113f4e581dc2941a4ddebc1deba639dfae323859c7045579836730f4c2413d&w=1380",
            }, 
            {
                id: 7,
                name: "Medical Checkup",
                services: [
                "Routine physical exams",
                "Health risk assessments",
                "Vaccination and immunization",
                "Chronic disease management",
                "Medication management",
                "Referrals to specialists"
                ],
                text: [
                "Medical checkups are an essential part of preventive healthcare.",
                "Our medical checkup services include routine physical exams, health risk assessments, and vaccination and immunization.",
                "Our team of healthcare professionals are dedicated to providing high-quality care and education to patients.",
                "We believe that early detection and prevention are key to maintaining good health."
                ], 
                dateCreated: "Aug 30, 2024",
                servicesImage: "https://img.freepik.com/free-photo/africa-humanitarian-aid-doctor-taking-care-patient_23-2149117843.jpg?t=st=1719527087~exp=1719530687~hmac=58338cc16564715e8a01929e19eaada47ae9bbdfc819a4010f6141e176c68dd1&w=1380",
            },
            {
                id: 8,
                name: "Mental Health",
                services: [
                "Counseling and therapy",
                "Psychiatric evaluations",
                "Medication management",
                "Crisis intervention",
                "Support groups",
                "Referrals to specialists"
                ],
                text: [
                "Mental health services are an essential part of overall healthcare.",
                "Our mental health services include counseling and therapy, psychiatric evaluations, and medication management.",
                "Our team of mental health professionals are dedicated to providing high-quality care and support to patients.",
                "We believe that mental health is just as important as physical health."
                ], 
                dateCreated: "Aug 30, 2024",
                servicesImage: "https://img.freepik.com/free-photo/mental-health-care-sketch-diagram_53876-123900.jpg?t=st=1719527164~exp=1719530764~hmac=661a3849bfe2a0038454863ada638358f6f276b072c49e366d277f029c56fe77&w=826",
            },                   
            {
                id: 9,
                name: "Neurology",
                services: [
                "EEG (electroencephalogram)",
                "EMG (electromyogram)",
                "Neurological exams",
                "Diagnosis and treatment of neurological disorders",
                "Management of chronic neurological conditions",
                "Referrals to specialists"
                ],
                text: [
                "Neurology is the branch of medicine that deals with the diagnosis and treatment of neurological disorders.",
                "Our neurology services include EEG and EMG tests, neurological exams, and diagnosis and treatment of neurological disorders.",
                "Our team of neurologists and neurosurgeons are dedicated to providing high-quality care and treatment to patients.",
                "We believe that accurate diagnoses are key to effective treatment and care."
                ], 
                dateCreated: "Aug 30, 2024",
                servicesImage: "https://img.freepik.com/free-photo/doctor-arranging-scanning-device-head-female-patient_482257-31612.jpg?t=st=1719527226~exp=1719530826~hmac=65a69e793f697b1444c02d21d3a99f03dc6f202599c3c766b0fbfac6986a3cf5&w=1380",
            },
            {
                id: 10,
                name: "Obstetrics and Gynecology",
                services: [
                "Prenatal care",
                "Delivery",
                "Postpartum care",
                "Menstrual health management",
                "Contraception and family planning",
                "Gynecological surgery"
                ],
                text: [
                "Obstetrics and gynecology are essential branches of medicine for women's health.",
                "Our obstetrics and gynecology services include prenatal care, delivery, postpartum care, and gynecological surgery.",
                "Our team of obstetricians and gynecologists are dedicated to providing high-quality care and support to women.",
                "We believe that women's health is a priority."
                ], 
                dateCreated: "Aug 30, 2024",
                servicesImage: "https://img.freepik.com/free-photo/gynecologist-performing-ultrasound-consultation_23-2149353017.jpg?t=st=1719527280~exp=1719530880~hmac=838327fb853451cdec280cfb302f8442bcffc3b5afb9193657ee8d48d9385149&w=1380",
            },
            {
                id: 11,
                name: "Occupational Therapy",
                services: [
                "Rehabilitation after injury or illness",
                "Improving daily functioning",
                "Adaptive equipment recommendations",
                "Home and work modifications",
                "Vocational training",
                "Pain management"
                ],
                text: [
                "Occupational therapy is a vital part of rehabilitation and recovery.",
                "Our occupational therapy services include rehabilitation after injury or illness, improving daily functioning, and adaptive equipment recommendations.",
                "Our team of occupational therapists are dedicated to helping patients regain independence and quality of life.",
                "We believe that occupation is a fundamental human need."
                ], 
                dateCreated: "Aug 30, 2024",
                servicesImage: "https://img.freepik.com/free-photo/male-psychologist-taking-notes-couple-therapy-session-help-with-relationship-issues-counselor-giving-advice-explaining-marriage-problems-using-paper-psychoanalysis-close-up_482257-46129.jpg?t=st=1719527313~exp=1719530913~hmac=5ecb9afcae50502c76dd2339f079e1888ec88d6e7f1c2e784eed3b76691a2d5f&w=1380",
            },   
            {
                id: 12,
                name: "Orthopedic Surgery",
                services: [
                "Joint replacement",
                "Fracture repair",
                "Osteoporosis management",
                "Sports medicine",
                "Arthroscopy",
                "Joint reconstruction"
                ],
                text: [
                "Orthopedic surgery is a specialized branch of medicine for musculoskeletal disorders.",
                "Our orthopedic surgery services include joint replacement, fracture repair, osteoporosis management, and sports medicine.",
                "Our team of orthopedic surgeons and specialists are dedicated to providing high-quality care and treatment to patients.",
                "We believe that movement is life."
                ], 
                dateCreated: "Aug 30, 2024",
                servicesImage: "https://img.freepik.com/free-photo/physician-examining-human-skeleton-cabinet-checkup-visit-explaining-anatomy-bones-diagnosis-elderly-patient-specialist-analyzing-spinal-cord-help-with-orthopedic-treatment_482257-50443.jpg?t=st=1719527372~exp=1719530972~hmac=d4b39711e6dacd29dec6a21c78279b72e9be86876b1ed3014beb7534dfb89aa4&w=1380",
            },
            {
                id: 13,
                name: "Pediatric Care",
                services: [
                "Well-child visits",
                "Pediatric surgery",
                "Vaccinations and immunizations",
                "Childhood illness treatment",
                "Developmental assessments",
                "Nutrition counseling"
                ],
                text: [
                "Pediatric care is a specialized branch of medicine for infants, children, and adolescents.",
                "Our pediatric care services include well-child visits, pediatric surgery, vaccinations and immunizations, and childhood illness treatment.",
                "Our team of pediatricians and specialists are dedicated to providing high-quality care and support to children and their families.",
                "We believe that children's health is a top priority."
                ], 
                dateCreated: "Aug 30, 2024",
                servicesImage: "https://img.freepik.com/free-photo/toddler-getting-vaccination-by-pediatrician_53876-146586.jpg?t=st=1719527428~exp=1719531028~hmac=536ba7e69903b6042fe0c221d4ab021e478b35f8f1cd7d6ec92086b520d95378&w=1380",
            },
            {
                id: 14,
                name: "Pharmacy",
                services: [
                "Prescription filling",
                "Medication management",
                "Immunizations",
                "Health screenings",
                "Nutrition counseling",
                "Medication therapy management"
                ],
                text: [
                "Pharmacy services are an essential part of healthcare.",
                "Our pharmacy services include prescription filling, medication management, immunizations, and health screenings.",
                "Our team of pharmacists and technicians are dedicated to providing high-quality care and support to patients.",
                "We believe that medication management is key to good health."
                ], 
                dateCreated: "Aug 30, 2024",
                servicesImage: "https://img.freepik.com/free-photo/african-american-pharmacist-cashier-working-drugstore-hospital-pharmacy-african-healthcare_627829-14275.jpg?t=st=1719527507~exp=1719531107~hmac=a8537a0233e632cd32fc9d5ff23041c50cd4f13cfff4cf4801352a53709a9102&w=1380",
            },
            {
                id: 15,
                name: "Rehabilitation",
                services: [
                "Physical therapy",
                "Occupational therapy",
                "Speech therapy",
                "Rehabilitation after injury or illness",
                "Chronic disease management",
                "Functional ability assessment"
                ],
                text: [
                "Rehabilitation services are a vital part of recovery and healing.",
                "Our rehabilitation services include physical therapy, occupational therapy, and speech therapy.",
                "Our team of rehabilitation specialists are dedicated to helping patients regain independence and quality of life.",
                "We believe that rehabilitation is key to optimal health."
                ], 
                dateCreated: "Aug 30, 2024",
                servicesImage: "https://img.freepik.com/free-photo/practitioner-man-doctor-helping-retiree-senior-male-wheelchair-physiotherapy-strength-exercise_482257-12761.jpg?w=1380&t=st=1719527671~exp=1719528271~hmac=5516ebae450f6a90356e149fefb2f376ad0e6361ab3f22705c7624dbcf8740cb",
            },
            {
                id: 16,
                name: "Emergency",
                services: [
                "Stitches and wound care",
                "Casting and splinting",
                "Minor surgeries",
                "Vaccinations and immunizations",
                "Acute illness treatment",
                "Injury treatment"
                ],
                text: [
                "Urgent care is a vital part of healthcare.",
                "Our urgent care services include stitches and wound care, casting and splinting, and minor surgeries.",
                "Our team of healthcare professionals are dedicated to providing high-quality care and treatment to patients with urgent needs.",
                "We believe that timely care is essential to good health."
                ], 
                dateCreated: "Aug 30, 2024",
                servicesImage: "https://img.freepik.com/free-photo/side-view-victim-with-oxygen-mask_23-2149478551.jpg?t=st=1719527768~exp=1719531368~hmac=da300d88d6bb0c945cbf16c3b40e3459505bb01ce16c972207193b1528f3d751&w=1380",
            },   
        ], 

        departmentsData,
        doctorsData,
        unitsData,

        // Add more user data here if needed
    };

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);