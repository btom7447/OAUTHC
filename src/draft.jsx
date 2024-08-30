// USE USER CONTEXT
import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [departmentsData, setDepartmentsData] = useState([]);

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

        adminData: [

        ], 

        departmentsData,

        doctorsData: [
            { 
                id: 1,
                title: "Prof. Josephine Adetinuola Eniola Eziyi",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Josephine Adetinuola Eniola Eziyi', 
                gender: 'Female',
                department: ["Otorhinolaryngology - Head & Neck Surgery"],
                qualification: ['M.B.Ch.B(Ogun)', 'MS.C (imm)', 'LiMH', 'Cert (ME)', 'FWACS (ORL)', 'FMCORL', 'FICS', 'PGF (aud)'],
                specialty: ['Rhinology & Allergy', 'Paediatric ORL', 'Audiology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Wednesday: 8am - 2pm', 'Friday: 10am - 2pm'],
                doctorImage: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1719220401~exp=1719224001~hmac=1fc1cada4b937eff6cd4363a985fa9cbd84c3569410f978bc1405c98ac671432&w=1380',
                overviewText: "Dr. John Doe is a highly experienced cardiologist, pediatrician, and dermatologist with over 10 years of experience. He is dedicated to providing compassionate and personalized care to his patients.",
                accomplishments: "Dr. Doe is a exceptional physician who possesses a unique blend of medical expertise and interpersonal skills. He is renowned for his ability to distill complex medical concepts into understandable terms, making him an invaluable resource for his patients. His empathetic nature and warm bedside manner have earned him a reputation as a trusted and caring doctor. Throughout his career, Dr. Doe has demonstrated a commitment to staying abreast of the latest medical advancements, ensuring that his patients receive the most up-to-date care available.",
                email: "jeziyi@oauthc.gov.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: ""
            },
            { 
              id: 2,
                title: "Prof. Oluwadare Ogunlade",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Oluwadare Ogunlade', 
                gender: 'Male',
                department: ["Internal Medicine"],
                qualification: ['MBChBl.', 'M.Sc.', 'PhD.', 'FWACP'],
                specialty: ['Preventive Cardiology', 'Cardiovascular Physiology'], 
                unit: 'Wesley Guild Hospital, Ilesha',
                clinicDay: ['Monday: 8am - 4pm'],
                overviewText: "Dr. Jane Smith is a dedicated pediatrician and ophthalmologist with a passion for providing quality care to her patients. She has over 8 years of experience and is committed to staying up-to-date with the latest medical advancements.",
                accomplishments: "Dr. Smith is a highly respected physician known for her tireless work ethic and dedication to her patients. Her exceptional clinical skills are complemented by her ability to connect with patients and families on a personal level, making her a beloved figure in the medical community. Dr. Smith's passion for pediatrics and ophthalmology is evident in everything she does, from conducting thorough exams to developing personalized treatment plans. Her commitment to excellence has earned her a reputation as one of the top pediatricians and ophthalmologists in her field.",
                doctorImage: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1719220401~exp=1719224001~hmac=1fc1cada4b937eff6cd4363a985fa9cbd84c3569410f978bc1405c98ac671432&w=1380', 
                email: "oogunlade@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: ""
            },
            { 
              id: 3,
                title: "Prof. Boladale Mapayi",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Boladale Mapayi', 
                gender: 'Female',
                department: ["Mental Health"],
                qualification: ['MBChB (2001)', 'M Clin Psychol (2012)', 'FWACPsych (2010)', 'PhD (2017)', 'REBT Cert', 'BA Cert'],
                specialty: ['General Adult Psychiatry', 'Medical Psycholtherapy', 'CAMH'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Wednesday: 9am - 4pm'],
                overviewText: "Dr. Michael Brown is a skilled orthopedic surgeon with over 12 years of experience. He is dedicated to providing personalized care and treatment plans to his patients.",
                accomplishments: "Dr. Brown is a gifted surgeon and a compassionate physician who has dedicated his career to helping patients overcome orthopedic injuries and conditions. His exceptional surgical skills are matched only by his ability to communicate complex information in a clear and concise manner. Dr. Brown's patients appreciate his warm and caring demeanor, which puts them at ease even in the most challenging situations. Throughout his career, Dr. Brown has demonstrated a commitment to staying at the forefront of orthopedic surgery, ensuring that his patients receive the most advanced care available.",
                doctorImage: 'https://img.freepik.com/free-photo/confident-attractive-male-doctor-wearing-white-lab-coat-while-standing-with-arms-crossed-against-turquoise-background_662251-1654.jpg?t=st=1719220736~exp=1719224336~hmac=3659fc16dd388e676a7b94baea44b0435b8c170fcbca2bf71c84991492a93462&w=1380', 
                email: "daledosu@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: ""
            },
            { 
              id: 4,
                title: "Dr. Oyetola Elijah Olufemi",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Oyetola Elijah Olufemi', 
                gender: 'Male',
                department: ["Oral Medicine", "Oral Pathology"],
                qualification: ['BchD', 'FMCDS'],
                specialty: ['Oral Medicine'], 
                unit: 'Dental Hospital',
                clinicDay: ['Tuesday: 8am - 4pm', 'Thursday: 8am - 4pm', 'Friday: 8am - 4pm'],
                overviewText: "Dr. Emily Wilson is a compassionate dermatologist with over 9 years of experience. She is committed to providing high-quality care and treatment plans to her patients.",
                accomplishment: "Dr. Wilson is a highly respected dermatologist known for her expertise and empathy. She possesses a unique ability to understand the emotional impact of skin conditions on her patients, and she works tirelessly to develop personalized treatment plans that address both the physical and emotional aspects of their care. Dr. Wilson's commitment to excellence has earned her a reputation as one of the top dermatologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/doctor-white-coat-using-digital-tablet-reading-medical-data-gadget-working-hospital-standin_1258-88112.jpg?t=st=1719220474~exp=1719224074~hmac=19cc44dc4ef14ffb9b4224e8fa0a46351985395e55b694d1478dffdb741f3c07&w=1380', 
                email: "eoyetola@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: ""
            },
            { 
              id: 5,
                title: "Dr. Olaejirinde Olaniyi Olaofe",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Olaejirinde Olaniyi Olaofe', 
                gender: 'Male',
                department: ["Morbid Anatomy",],
                qualification: ['MBBS', 'MWACP', 'FMCPath'],
                specialty: ['Histopathology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Monday - Friday: 8am - 4pm'],
                overviewText: "Dr. David Lee is a highly experienced ophthalmologist with over 11 years of experience. He is dedicated to providing personalized care and treatment plans to his patients.",
                accomplishments: " Dr. Lee is a gifted ophthalmologist and a compassionate physician who has dedicated his career to helping patients achieve optimal vision and eye health. His exceptional clinical skills are complemented by his ability to communicate complex information in a clear and concise manner. Dr. Lee's patients appreciate his warm and caring demeanor, which puts them at ease even in the most challenging situations. Throughout his career, Dr. Lee has demonstrated a commitment to staying at the forefront of ophthalmology, ensuring that his patients receive the most advanced care available",
                doctorImage: 'https://img.freepik.com/free-photo/smiling-touching-arms-crossed-room-hospital_1134-799.jpg?t=st=1719220764~exp=1719224364~hmac=a59b0987540520499cb0d3b83fdda32a880022488956be212371f7210999d21b&w=1060',
                email: "oolaofe@oauie.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: ""
            },
            { 
              id: 6,
                title: "Prof. Kolawole Samuel Mosaku",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Kolawole Samuel Mosaku', 
                gender: 'Male',
                department: ["Mental Health"],
                qualification: ['MBBS', 'MPH', 'MD', 'FMCPsych'],
                specialty: ['Psychosomatic Medicine'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Friday: 8am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "kmosaku@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 7,
                title: "Prof. Adewale Adisa",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Adewale Adisa', 
                gender: 'Male',
                department: ["Surgery"],
                qualification: ['MBChB', 'FWACS', 'FMSC', 'MD', 'FACS'],
                specialty: ['General Surgery', 'Minimal Access Surgery'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Tuesday: 8am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "ao.adisa@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 8,
                title: "Prof. Salawu Lateef",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Salawu Lateef', 
                gender: 'Male',
                department: ["Haematology & Blood Transfusion"],
                qualification: ['BSc (Hons)', 'MBChB (Ife)', 'MSc(Ibadan)', 'FWACP (Lab. Med)', 'FMCPath', 'MD (npmcn)'],
                specialty: ['Haematology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Thursday (Noon)'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "lateef.salawu@npmcn.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 9,
                title: "Dr. Oke Oluwasola Julius",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Oke Oluwasola Julius', 
                gender: 'Male',
                department: ["Paediatrics"],
                qualification: ['MBBS', 'FMCPead'],
                specialty: ['Pediatric', 'Neurology'], 
                unit: 'Wesley Guild Hospital, Ilesha',
                clinicDay: ['Thursday: 10am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "okeolusola@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 10,
                title: "Dr. Oladosu Musiliu Atanda",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Oladosu Musiliu Atanda', 
                gender: 'Male',
                department: ["Orthopaedic & Traumatology"],
                qualification: ['M.B.Ch.B', 'FWACS'],
                specialty: ['Orthopaedic Oncology', 'Joint Replacement'], 
                unit: 'Wesley guild Hospital, Ilesha',
                clinicDay: ['Tuesday: 8am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "oladosuadeniyi@gmail.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 11,
                title: "Idowu Ahmed O.",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Idowu Ahmed O.', 
                gender: 'Male',
                department: ["Internal Medicine"],
                qualification: ['MBChB (Ogun)', 'FWACP', 'MAAN', 'MRCP (UK)'],
                specialty: ['Neurology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Friday: 7:30am - 1pm'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "medolacious@yahoo.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 12,
                title: "Prof. Dennis A. Ndububa",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Dennis A. Ndububa', 
                gender: 'Male',
                department: ["Internal Medicine"],
                qualification: ['MBBS', 'FWACP', 'AGAF'],
                specialty: ['Gastroenterology', 'Hepatology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Monday & Wednesday: 8am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "dndububa@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 13,
                title: "Prof. Olusegun Ojo",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Olusegun Ojo', 
                gender: 'Male',
                department: ["Morbid Anatomy",],
                qualification: ['MBBS', 'MD', 'FMCPath'],
                specialty: ['Hepatogastroenterology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Always at my desk in the laboratory'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "segun.ojo@gmail.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 14,
                title: "Dr. Ibigbami Olanrewaju Ibikunle",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Ibigbami Olanrewaju Ibikunle', 
                gender: 'Male',
                department: ["Mental Health"],
                qualification: ['MBCHB', 'M.Clin.Psychol.', 'MSc CAMH', 'FWACP (Psychiatry)'],
                specialty: ['Psychiatry', 'Child & Adolescent Psychiatry'], 
                unit: 'Wesley Guild Hospital, Ilesha',
                clinicDay: ['Tuesday & Thursdays: 8am - 4pm'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "oibigbami@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 15,
                title: "Prof. Wasiu Adekunle Olowu",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Wasiu Adekunle Olowu', 
                gender: 'Male',
                department: ["Paediatrics"],
                qualification: ['MBBS', 'FMCPaed'],
                specialty: ['Nephrology', 'Hypertension'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Tuesday 12pm'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "waolowu1@yahoo.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 16,
                title: "Dr. Bello Ibrahim Sebutu",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Bello Ibrahim Sebutu', 
                gender: 'Male',
                department: ["Family Medicine"],
                qualification: ['MBBS', 'MpH', 'FMCGP', 'MD'],
                specialty: ['Family Medicine'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Monday - Friday 8am - 4pm'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "ibrahim.bello@npmcn.edu.org",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 17,
                title: "Prof. .Komolafe Edward Oluwole",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Komolafe Edward Oluwole', 
                gender: 'Male',
                department: ["Surgery"],
                qualification: ['MBBS (Ib)', 'FWACS', 'FACS', 'FICS', 'FAANS', 'FNAMed', 'ArabDiploma Sine'],
                specialty: ['Neurosurgery', 'Spine Surgery'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Monday: 8am - 1pm'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 18,
                title: "Prof. Oyedeji Olusola Adetunji",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Oyedeji Olusola Adetunji', 
                gender: 'Male',
                department: ["Paediatrics", "Child Health"],
                qualification: ['MBChB', 'FWACP (Paed)', 'MSc', 'Trop Paed'],
                specialty: ['Infectious Diseases'], 
                unit: 'Wesley Guild Hospital, Ilesha',
                clinicDay: ['Friday 10am - 12:30pm'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "soltomoyedeji@yahoo.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 19,
                title: "Dr. Oldipupo Fakoya",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Oladipupo Fakoya', 
                gender: 'Male',
                department: ["Family Medicine"],
                qualification: ['MBChB', 'FWACP', 'FMCFM', 'MPH'],
                specialty: ['Geriatrics'], 
                unit: 'Ijesa Geriatric Centre',
                clinicDay: ['Monday - Friday'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "ladifakoya @ yahoo.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 20,
                title: "Dr. Solomon O Nwhator",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Solomon O Nwhator', 
                gender: 'Male',
                department: ["Preventive & Community Dentistry"],
                qualification: ['BDS', 'PhD', 'FMCDS', 'FWACS', 'Cert. LMiH', 'MPA'],
                specialty: ['Periodontology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Mondays & Thursday: 9am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "sonwhator@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 21,
                title: "Dr. Familusi Akintayo Olayinka",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Familusi Akintayo Olayinka', 
                gender: 'Male',
                department: ["Family Medicine"],
                qualification: ['MB', 'ChB', 'FM', 'CFM'],
                specialty: ['Family Medicine', 'Care of the elderly'], 
                unit: 'Ijesa Geriatric Centre',
                clinicDay: ['Monday - Friday 8am - 4pm'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "akintayo.familusi@npmcn.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 22,
                title: "Dr. Oluwatosin Mobolanle Femi-Adeoye",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Oluwatosin Mobolanle Femi-Adeoye', 
                gender: 'Female',
                department: ["Family Medicine"],
                qualification: ['MBCh', 'FMCFM'],
                specialty: ['Lifestyle Medicine'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Monday: 9am - 2pm', 'Tuesday: 9am - 2pm', 'Wednesday: 9am - 2pm'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "femot.2013@gmail.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 23,
                title: "Dr. Oso Bolanle Idowu",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Oso Bolanle Idowu', 
                gender: 'Male',
                department: ["Paediatrics"],
                qualification: ['MBBS', 'FMC Paed'],
                specialty: ['Nephrology'], 
                unit: 'Wesley Guild Hospital, Ilesha',
                clinicDay: ['Fridays 10am - 12 Noon'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "bolanle.oso@npmcn.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 24,
                title: "Dr. Atinuke Arinola Ajani",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Atinuke Arinola Ajani', 
                gender: 'Female',
                department: ["Dermatology & Venereology"],
                qualification: ['MBCHB', 'FWACP', 'MPH'],
                specialty: ['Dermatology & Venereology', 'Genitourinary Medicine'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Wednesday Thursday'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "akinjideogundokun@gmail.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 25,
                title: "Prof. Rahman Ayodele Bolarinwa",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Rahman Ayodele Bolarinwa', 
                gender: 'Male',
                department: ["Haematology", "Blood Transfusion"],
                qualification: ['MBChB', 'MSc', 'MD', 'FMCPath'],
                specialty: ['General Haematology', 'Haemato-oncology', 'Molecular Diagnostics'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Tuesday & Thursday: 10am - 4pm'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "rbolarin@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 26,
                title: "Dr. Fadeju Adeyemi Dada",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Fadeju Adeyemi Dada', 
                gender: 'Male',
                department: ["Child Dental Health"],
                qualification: ['BChD', 'FWACS'],
                specialty: ['Orthodontics'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Tuesday & Thursday 8am - 4pm'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "afadeju@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 27,
                title: "Dr. Olurotimi Komolafe",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Olurotimi Komolafe', 
                gender: 'Male',
                department: ["Radiology"],
                qualification: ['BSc', 'MBBS', 'FWACS'],
                specialty: ['Radiology', 'Pediatric Radiology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['All Week'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "rkomolafe@hotmail.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 28,
                title: "Dr. Adetoye Adedapo Omowonuola",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Adetoye Adedapo Omowonuola', 
                gender: 'Male',
                department: ["Anaesthesia", "Intensive Care"],
                qualification: ['MBBS', 'DA', 'Cert IPP', 'FWACS'],
                specialty: ['Anaesthesia', 'Regional', 'Pain & Palliative Care'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Wednesday: 10am - 2pm'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "aoadetoye@gmail.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 29,
                title: "Dr. Olowookere Akintunde Julius",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Olowookere Akintunde Julius', 
                gender: 'Male',
                department: ["Emergency Medicine"],
                qualification: ['MBChB', 'FWACP (Family Medicine)'],
                specialty: ['Acute Care'], 
                unit: 'Wesley Guild Hospital, Ilesha',
                clinicDay: ['Monday: 8am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "olowojao@yahoo.co.uk",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 30,
                title: "Dr. Anjorin Oluwafunmibi",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Anjorin Oluwafunmibi', 
                gender: 'Female',
                department: ["Emergency Medicine"],
                qualification: ['MBChB', 'Msc', 'FMCP'],
                specialty: ['Internal Medicine', 'Clinical Pharmacology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Monday & Wednesday: 9am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "oluwafunmibi.anjorin@npmcn.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 31,
                title: "Prof. Bolanle Olubnmi Ibitoye",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Bolanle Olubnmi Ibitoye', 
                gender: 'Female',
                department: ["Emergency Medicine"],
                qualification: ['FWACS'],
                specialty: ['Chest & Women Imaging'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Monday & Wednesday: 10am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "bobitoye@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 32,
                title: "Dr. Ademola O. Enitan",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Ademola O. Enitan', 
                gender: 'Female',
                department: ["Radiology"],
                qualification: ['MBBS', 'FWACP', 'MRCP-UK'],
                specialty: ['Dermatology & Venereology',], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Monday & Thursday: 8am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "demoshie2007@oauthc.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 33,
                title: "Dr. Adeleye Omisore",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Adeleye Omisore', 
                gender: 'Female',
                department: ["Family Medicine"],
                qualification: ['MBBS', 'FWACS', 'FMCR', 'M.Sc'],
                specialty: ['Brest and Interventional Radiology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Monday: 9am - 4pm', 'Wednesday: 9am - 4pm'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "leyeomisore@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 34,
                title: "Dr. Samuel Titilola Oladejo",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Samuel titilola Oladejo', 
                gender: 'Male',
                department: ["Radiology"],
                qualification: ['MBBS', 'FWACS (Orthopedics)', 'ACSCoT ATLS Provider'],
                specialty: ['Orthopedic & Traumatology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Tuesday: 8am', 'Thursdays: 8am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "olatipsalm09@gmail.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 35,
                title: "Dr. Olariwaju Olusola Joseph",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Olariwaju Olusola Joseph', 
                gender: 'Male',
                department: ["Emergency Medicine"],
                qualification: ['FMCPath'],
                specialty: ['Haemato-Oncology', 'Haemoglobinopathies', 'Bone Marrow Transplant'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Monday: 8am', 'Tuesday: 8am', 'Thursday: 8am' ],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "olusola.olarewaju@npmcn.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            }
            ,{ 
                id: 36,
                title: "Dr. Olumide Akinyele",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Olumide Akinyele', 
                gender: 'Male',
                department: ["Haematology", "Blood Transfusion"],
                qualification: ['MBChB', 'FWACP'],
                specialty: ['Cardiology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Monday: 8am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "mideakinyele@gmail.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 37,
                title: "Prof. Samuel Anu Olowookere",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Samuel Anu Olowookere', 
                gender: 'Male',
                department: ["Internal Medicine"],
                qualification: ['MBChB', 'MSc.', 'FWACP'],
                specialty: ['Honorary Consultant', 'Family Medicine'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Friday: 10am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "sanuolowookere@yahoo.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 38,
                title: "Dr. Sharif A. Folorunso",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Sharif A. Folorunso', 
                gender: 'Male',
                department: ["Family Medicine"],
                qualification: ['MBChB', 'MSc', 'FFWACS', 'FMCR'],
                specialty: ['Clinical & Radiation Oncology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Monday', 'Thursday'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380',  
                email: "folad09@gmiail.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 39,
                title: "Dr. Ahmed Ayanleye Abdulaeem",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Ahmed Ayanleye Abdulaeem', 
                gender: 'Male',
                department: ["Radiology"],
                qualification: ['MBChB', 'FWACP', 'FMCFM'],
                specialty: ['Family Care', 'Communicable and Non-communicable Disease',], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Wednesday', 'Thursday', 'Friday'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "ahmediganna@gmail.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 40,
                title: "Dr. Temilola O. Owujuyibe",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Temilola O. Owujuyibe', 
                gender: 'Female',
                department: ["Family Medicine"],
                qualification: ['MBBS', 'FMCPath'],
                specialty: ['Haematology Oncology', 'Blood transfussion', 'Immunology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Monday: 9am (virology Research Clinic)', 'Tuesday: 10am (Haem-Oncology)', 'Thursday: 9am (Haematology'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "mkadewumi01@gmail.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 41,
                title: "Dr. Samuel Oluyomi Ayodele",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Samuel Oluyomi Ayodele', 
                gender: 'Male',
                department: ["Haematology", "Blood Tranfusion"],
                qualification: ['MBBS', 'FWACS', 'FMCORLHNS'],
                specialty: ['Rhinology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Tuesday: 8am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "oluyomi.ayodele@npmcn.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 42,
                title: "Dr. Adeumi Kolawole M.",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Adewumi Kolawole M.', 
                gender: 'Male',
                department: ["Neurosurgery"],
                qualification: ['MBChB, FWACP'],
                specialty: ['Geriatric'], 
                unit: 'Ijesa Geriatric Centre',
                clinicDay: ['Monday: 9am - 1pm', 'Tuesday: 9am - 1pm', 'Friday: 9am - 1pm'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "mkadewumi01@gmail.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 43,
                title: "Prof. Bernice O. Adegbehingbe",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Bernice O. Adegbehingbe', 
                gender: 'Female',
                department: ["Family Medicine"],
                qualification: ['BSc.', 'Hind', 'MBChB.', 'MSc', 'DRCS (Ir.)', 'MD', 'FWACS', 'FMCOph', 'FICS', 'FICO', 'FNAMED'],
                specialty: ['Glaucoma Services'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Monday'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "bernice.adegbehingbe@npmcn.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            {
                id: 44,
                title: "Dr. Adefidipe Adeyemi Abiola",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Adefidipe Adeyemi Abiola', 
                gender: 'Male',
                department: ["Ophthamology"],
                qualification: ['MBChB', 'FMCPATH', 'MWACP', 'FISN'],
                specialty: ['Histopathology', 'Nephropathology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Everyday'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "adeyemiabaiola87@gmail.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 45,
                title: "Dr. Adeniyi Sunday Aderibidbe",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Adeniyi Sunday Aderibidbe', 
                gender: 'Male',
                department: ["Morbid Anatomy"],
                qualification: ['MBBS', 'FWACS', 'FMCR',],
                specialty: ['General Radiology', 'MSK Radiology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Tuesday:', 'Thursday'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "adeniyiriibigbe@gmail.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 46,
                title: "Dr. Babalola Olajide Emmanuel",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Babalola Olajide Emmanuel', 
                gender: 'Male',
                department: ["Radiology"],
                qualification: ['MBBS', 'FMCOG', 'FMAS', 'DMAS', 'FART (IVF) India', 'Cert. Robotics'],
                specialty: ['Obstertician','Gynecologist', 'Minimal Access Surgeon'], 
                unit: 'Wesley Guild Hospital, Ilesha',
                clinicDay: ['ANC Mondays: 10am', 'Gynaecology Thursday: 10am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "drjide360@gmail.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 47,
                title: "Dr. Dauda Saheed Olaide",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Dauda Saheed Olaide', 
                gender: 'Male',
                department: ["Family Medicine"],
                qualification: ['MBBS', 'MPH', 'FWACP'],
                specialty: ['Reproductive Health & Epidemiology'], 
                unit: 'UCHC Eleyele',
                clinicDay: ['Tuesday', 'Wednesday', 'Thursday'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "saheeddaud@yahoo.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 48,
                title: "Prof. Orimolade Elkanah Ayodele",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Orimolade Elkanah Ayodele', 
                gender: 'Male',
                department: ["Obstetrics", "Gynaecology", "Perinatology"],
                qualification: ['MBBS', 'FMCS', 'FMCOrtho'],
                specialty: ['General Orthopaedics', 'Complex Trauma'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Friday'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "orismajor@gmail.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 49,
                title: "Dr. Bolajoko Abidemi Adewara",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Bolajoko Abidemi Adewara ', 
                gender: 'Female',
                department: ["Community Medicine"],
                qualification: ['MBBS', 'FMCOph', 'FICO', 'FLVP Cert.', 'Oculoplasty'],
                specialty: ['Ophthalmology', 'Oculoplasty'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Monday: 8am', 'Thursday: 8am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "bolajokoadewara@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 50,
                title: "Dr. Akinwumi Oluwole Komolafe",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Akinwumi Oluwole Komolafe', 
                gender: 'Male',
                department: ["Orthopaedics", "Trauma"],
                qualification: ['MBChB', 'FMCPath', 'Cert (FSHR)', 'LLM (Medical Law and Ethics'],
                specialty: ['Anatomical Pathology/Legal Medicine'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Monday', 'Sunday', 'Hospital & Remote'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "akinkomolage@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 51,
                title: "Dr. Adedeji Tweogbade Adeoye",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Adedeji Tweogbade Adeoye', 
                gender: 'Male',
                department: ["Ophthalmology"],
                qualification: ['MBBS', 'MPH', 'MD', 'FMCPath', 'FWACP(Lab. Medicine)'],
                specialty: ['Nephrology, Endocrinology', 'Micronutrients', 'Therapeutic drug monitoring'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Tuesday: 2pm Metabolic clininc'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "tadedeji@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 52,
                title: "Dr. Adeyefa Babajide Samson",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Adeyefa Babajide Samson', 
                gender: 'Male',
                department: ["Morbid Anatomy",],
                qualification: ['MBBS', 'FWACP', 'FMCPaed'],
                specialty: ['Cardiology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Wednesday: 9am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "bjyde04@gmail.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 53,
                title: "Prof. Olusola Comfort Famurewa",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Olusola Comfort Famurewa', 
                gender: 'Female',
                department: ["Chemical Pathology"],
                qualification: ['MBCHB', 'FWACS (Radiology)'],
                specialty: ['General Radiology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Monday', 'Thursday'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "amurede@gmail.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 54,
                title: "Prof. Samuel Ademola Adegoke",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Samuel Ademola Adegoke', 
                gender: 'Male',
                department: ["Paediatrics"],
                qualification: ['MBChB', 'MPH', 'MD', 'PhD', 'FWACP'],
                specialty: ['Paediatric haemato-oncology'], 
                unit: 'Wesley Guild Hospital, Ilesha',
                clinicDay: ['Wednesday: 9am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "samueladegoke@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 55,
                title: "Dr. Celestine Okorome Mume",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Celestine Okorome Mume', 
                gender: 'Male',
                department: ["Radiology"],
                qualification: ['Bsc', 'MBChB', 'MSc', 'MD', 'FMCPsych', 'PhD'],
                specialty: ['Psychiatry'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Wednesday: 9am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "celemume2000@yahoo.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 56,
                title: "Prof. Fasubaa Olusola Benjamin",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Fasubaa Olusola Benjamin', 
                gender: 'Male',
                department: ["Paediatrics"],
                qualification: ['B.Sc. (Hon) 1978', 'MBCH.B (1981)', 'FWACS (1994)', 'FNAMed (2021)'],
                specialty: ['Obstetrics and Gynaecology', 'Infertility and reproductive Endorcrinology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['(Gynaecology) Thursday: 10am - 3pm', '(Obstetrics) Wednesday: 10am - 1pm'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "lusolafasubaa@gmail.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 57,
                title: "Dr. Omolade Betiku",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Omolade Betiku', 
                gender: 'Female',
                department: ["Mental Helath"],
                qualification: ['MBBS', 'FMCPath'],
                specialty: ['Histopatholog/GIT', 'Liver and Breast'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Monday', 'Friday'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "omolade.betiku@npmcn.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 58,
                title: "Dr. Olajubu Temitope Oluwafemi",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Olajubu Temitope Oluwafemi', 
                gender: 'Male',
                department: ["Obstetrics", "Gynaecology", "Perinatology"],
                qualification: ['MB.ChB', 'FWACP', 'FMCFM'],
                specialty: ['Family Medicine'], 
                unit: 'Ife Housing Unit',
                clinicDay: ['Monday: 8am - 4pm', 'Wednesday: 8am - 4pm', 'Friday: 8am - 4pm'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "temitope.olajubu@npmcn.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 59,
                title: "Dr. Linda Chizoba Umeh",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Linda Chizoba Umeh', 
                gender: 'Female',
                department: ["Morbid Anatomy", "Forensic Medicine"],
                qualification: ['MBChB', 'FMCOph'],
                specialty: ['Uveitis/Immunology'], 
                unit: 'Ijesa Geriatric Centre',
                clinicDay: ['Monday: 8am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "drumehlinda@gmail.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 60,
                title: "Dr. Perpetua Okwuchi Obiajunwa",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Perpetua Okwuchi Obiajunwa', 
                gender: 'Female',
                department: ["Family Medicine"],
                qualification: ['BSc', 'MBChB', 'FWACP (PAED)'],
                specialty: ['Pulmonology'], 
                unit: 'Ife Housing Unit',
                clinicDay: ['Monday: 9am - 1pm'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "poobiajunwa@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 61,
                title: "Prof. Ernest Okechukwu Orji",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Ernest Okechukwu Orji', 
                gender: 'Male',
                department: ["Opthalmology"],
                qualification: ['MBBS', 'FWACS', 'FMCOG', 'MD', 'PHD'],
                specialty: ['Fertility', 'Family Planning & Reproductive Health'], 
                unit: 'Ife Housing Unit',
                clinicDay: ['Monday: 8am', 'Tuesday: 8am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "eoorji@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 62,
                title: "Dr. Adeleke Akeem Aderogba",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Adeleke Akeem Aderogba', 
                gender: 'Male',
                department: ["Paediatrics"],
                qualification: ['MBBS', 'FMCS', 'FWACS'],
                specialty: ['Surgery/General Surgery'], 
                unit: 'Wesley Guild Hospital, Ilesha',
                clinicDay: ['(Ijesa Geriatric Centre, Ilesa) Tuesday: 8am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "akeem.adeleke@npmcn.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 63,
                title: "Dr. Adewale Alex Amupitan",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Adewale Alex Amupitan', 
                gender: 'Male',
                department: ["Obstetrics", "Gynaecology", "Perinatology"],
                qualification: ['BSc', 'MBBS', 'MWACP', 'FMCPath', 'DIPC'],
                specialty: ['Infection prevention and Control'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Tuesday: 8am', 'Friday: 8am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "adewale.amupitan@npmcn.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 64,
                title: "Prof. Bamise Cornelius Tokunbo",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Bamise Cornelius Tokunbo', 
                gender: 'Male',
                department: ["Emergency Medicine"],
                qualification: ['B.Ch', 'DMa.Ed', 'FMCDS', 'Md'],
                specialty: ['Conservative Dentistry'], 
                unit: 'Dental Hospital',
                clinicDay: ['Thursday', 'Friday'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "bamisect@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 65,
                title: "Dr. Obadare Temitope Oyewole",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Obadare Temitope Oyewole', 
                gender: 'Male',
                department: ["Microbiology & Parasitology"],
                qualification: ['MBBS', 'MPH', 'MWACP', 'FMCPath'],
                specialty: ['Bacteriology'], 
                unit: 'Ife Housing Unit',
                clinicDay: ['Tuesday: 8am - 2pm', 'Friday: 8am - 2pm'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "gratus09@yahoo.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 66,
                title: "Dr. Adeyemi Temitayo Adeyemo",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Adeyemi Temitayo Adeyemo', 
                gender: 'Male',
                department: ["Restorative Dentistry"],
                qualification: ['MBBS', 'FMCPath'],
                specialty: ['Medical Microbiology'], 
                unit: 'Ife Hospital Unit',
                clinicDay: ['Tuesday: 8am', 'Friday: 8am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "adeyemi.adeyemo@npmcn.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 67,
                title: "Prof. Olayinka Donald Otuyemi",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Olayinka Donald Otuyemi', 
                gender: 'Male',
                department: ["Microbiology & Parasitology"],
                qualification: ['BDS', 'MPh', 'MSc', 'D.Orth.RCSEd', 'MD', 'FMCDS', 'FWACS', 'FICD', 'FNAMed', 'FAMeds'],
                specialty: ['Orthodontics'], 
                unit: 'Dental Hospital',
                clinicDay: ['Tuesday', 'Thursday'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "ootuyemi@yahoo.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 68,
                title: "Prof. John A. O. Okeniyi",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. John A. O. Okeniyi', 
                gender: 'Male',
                department: ["Microbiology & Parasitology"],
                qualification: ['BSc', 'MBChB', 'FWACP', 'FACC', 'FNCS', 'FIPMA', 'Diploma (Echocardiography)', 'Certificate (Leadership and Management in Health'],
                specialty: ['Paediatrics/Paediatric Cardiology'], 
                unit: 'Ife Housing Unit',
                clinicDay: ['Wednesday'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "jaookeniyi@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 69,
                title: "Dr. Simeon Olugbade Adegbola Olateju",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Simeon Olugbade Adegbola Olateju', 
                gender: 'Male',
                department: ["Child Dental Health"],
                qualification: ['MBCHB (Ago-Iwoye)', 'PgDA (WACS)', 'MPH (Ago-Iwoye)', 'FMCA', 'FICS'],
                specialty: ['Obstetric Anaesthesia', 'Regional Anaesthesia & Pain Management'], 
                unit: 'Ife Housing Unit',
                clinicDay: ['Tuesday: 8am - 2pm', 'Thursday: 8am - 2pm', 'Friday: 8am - 2pm'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "olatejusoa@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 70,
                title: "Prof. Comfort Ayodele Adekoya-Sofowora",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Prof. Comfort Ayodele Adekoya-Sofowora', 
                gender: 'Female',
                department: ["Paediatrics"],
                qualification: ['BDS', 'MDSc', 'FWACS', 'MD', 'FMCDS'],
                specialty: ['Paediatric Dentistry'], 
                unit: 'Dental Hospital',
                clinicDay: ['Monday: 9am - 1pm', 'Wednesday: 9am - 1pm'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "comfort.adekoya-sofowora@npmcn.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 71,
                title: "Dr. Oyegbade Olanrewaju",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Oyegbade Olanrewaju', 
                gender: 'Male',
                department: ["Anaesthesia & Intensive Care"],
                qualification: ['M.B.Ch.B.', 'FWACP (Family Medicine'],
                specialty: ['Family Medicine'], 
                unit: 'Wesley Guild Hospital, Ilesha',
                clinicDay: ['Thursday: 9am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "lanreoyegbade@oauthc.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 72,
                title: "Dr. Titilope Adesola Adeyanju",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. Titilope Adesola Adeyanju', 
                gender: 'Female',
                department: ["Child Dental Health"],
                qualification: ['MBBS', 'MPH', 'FWACP (Comm. Health'],
                specialty: ['Child Health/Public Health Nutrition'], 
                unit: 'UCHC Eleyele',
                clinicDay: ['Monday', 'Tuesday', 'Friday'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "ttyanju@yahoo.com",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            },
            { 
                id: 73,
                title: "Dr. David O. Soyeye",
                status: "Published",
                dateCreated: "2024-01-15",
                doctorName: 'Dr. David O. Soyeye', 
                gender: 'Male',
                department: ["Family Medicine"],
                qualification: ['MBChB', 'MPH', 'MD', 'FMCP', 'FACE', 'FACP'],
                specialty: ['Child Health/Public Health Nutrition'], 
                unit: 'UCHC Eleyele',
                clinicDay: ['Mondays 12 noon', 'Thursdays: 8am'],
                overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
                accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
                doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
                email: "dosoyoye@oauife.edu.ng",
                linkedIn: "", 
                facebook: "",
                instagram: "", 
                twitter: "" 
            }
    
        ]

        // Add more user data here if needed
    };

    // Function to fetch departments from the API
    const fetchDepartments = async () => {
        const url = 'https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/department';
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Include the authorization header if required
                    // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
                }
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const responseData = await response.json(); // Parse the JSON from the response
    
            // Check if the response has the expected "data" structure
            if (responseData && responseData.data) {
                // Transform the data to match the expected format
                const transformedData = responseData.data.map(department => ({
                    id: department.id,
                    title: department.name,
                    status: department.status,
                    dateCreated: department.created_at,
                    overviewText: department.over_view_text, 
                    departmentImage: '', // Add the logic to handle the department image if available
                    departmentName: department.name,
                    text: department.text,
                    facilities: department.facilities,
                    services: department.services,
                    phone: department.phone
                }));
    
                setDepartmentsData(transformedData); // Set only the transformed "data" to the departmentsData state
            } else {
                console.error('Failed to retrieve departments:', responseData.message || 'Unexpected response structure');
            }
        } catch (error) {
            console.error('Error fetching departments:', error);
        }
    };

    // Fetch departments when the component mounts
    useEffect(() => {
        fetchDepartments();
    }, []);

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);

// DEPARTMENT PROVIDER
import React, { createContext, useContext, useState, useEffect } from 'react';

const DepartmentContext = createContext();

export const DepartmentProvider = ({ children }) => {
    const [departments, setDepartments] = useState([]);
    const [schools] = useState([
        {
            overviewText: "The School of Nursing Ife, dedicated to educating students to become compassionate and skilled nurses, equipped to provide exceptional patient care in a variety of settings", 
            schoolImage: "https://img.freepik.com/free-photo/group-african-medical-students-posed-outdoor_627829-380.jpg?t=st=1719490292~exp=1719493892~hmac=5275ddb66ebf23cb36174e8c484c3e88b622c0bda49e0caa3b5c663a681ce6d1&w=1380",
            schoolName: "School of Nursing, Ife",
            description: "The school's comprehensive curriculum emphasizes evidence-based practice, critical thinking, and effective communication...",
            facilities: "Equipped with state of the art facilities to support student learning and success...",
            services: ["Simulation labs with high-fidelity mannequins", "Skills labs for hands-on practice", "Advanced audiovisual equipment for interactive learning"],
            facultiesNames: ["Faculty of a", "Faculty of b", "Faculty of c"]
        },
    ]);
    const [doctorsData] = useState([
        { 
            doctorName: 'Prof. Josephine Adetinuola Eniola Eziyi', 
            gender: 'Female',
            department: ["Otorhinolaryngology - Head & Neck Surgery"],
            qualification: ['M.B.Ch.B(Ogun)', 'MS.C (imm)', 'LiMH', 'Cert (ME)', 'FWACS (ORL)', 'FMCORL', 'FICS', 'PGF (aud)'],
            specialty: ['Rhinology & Allergy', 'Paediatric ORL', 'Audiology'], 
            unit: 'Ife Hospital Unit',
            clinicDay: ['Wednesday: 8am - 2pm', 'Friday: 10am - 2pm'],
            doctorImage: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg...',
            overviewText: "Dr. John Doe is a highly experienced cardiologist, pediatrician, and dermatologist with over 10 years of experience...",
            accomplishments: "Dr. Doe is an exceptional physician who possesses a unique blend of medical expertise and interpersonal skills...",
            email: "jeziyi@oauthc.gov.ng",
            linkedIn: "", 
            facebook: "",
            instagram: "", 
            twitter: ""
        },
    ]);

    // Function to fetch departments from the API
    const fetchDepartments = async () => {
        const url = 'https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/department';
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Include the authorization header if required
                    // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
                }
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const responseData = await response.json(); // Parse the JSON from the response
    
            // Check if the response has the expected "data" structure
            if (responseData && responseData.data) {
                // Transform the data to match the expected format
                const transformedData = responseData.data.map(department => ({
                    id: department.id,
                    title: department.name,
                    status: department.status,
                    dateCreated: department.created_at,
                    overviewText: department.over_view_text, 
                    departmentImage: '', // Add the logic to handle the department image if available
                    departmentName: department.name,
                    text: department.text,
                    facilities: department.facilities,
                    services: department.services,
                    phone: department.phone
                }));
    
                setDepartments(transformedData); // Set only the transformed "data" to the departments state
            } else {
                console.error('Failed to retrieve departments:', responseData.message || 'Unexpected response structure');
            }
        } catch (error) {
            console.error('Error fetching departments:', error);
        }
    };

    // Fetch departments when the component mounts
    useEffect(() => {
        fetchDepartments();
    }, []);

    const contextValue = {
        departments,
        schools,
        doctorsData
    };

    return (
        <DepartmentContext.Provider value={contextValue}>
            {children}
        </DepartmentContext.Provider>
    );
};

// Custom hook to access departments data
export const useDepartments = () => {
    const context = useContext(DepartmentContext);
    if (!context) {
        throw new Error("useDepartments must be used within a DepartmentProvider");
    }
    return context.departments;
};

// Custom hook to access schools data
export const useSchools = () => {
    const context = useContext(DepartmentContext);
    if (!context) {
        throw new Error("useSchools must be used within a DepartmentProvider");
    }
    return context.schools;
};

// Custom hook to access doctors data
export const useDoctors = () => {
    const context = useContext(DepartmentContext);
    if (!context) {
        throw new Error("useDoctors must be used within a DepartmentProvider");
    }
    return context.doctorsData;
};




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
