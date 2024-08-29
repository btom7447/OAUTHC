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