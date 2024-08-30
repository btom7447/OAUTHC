import React, { createContext, useContext, useState, useEffect } from 'react';

const DepartmentContext = createContext();

export const DepartmentProvider = ({ children }) => {
    const [departments, setDepartments] = useState([]);
    const [doctors, setDoctors] = useState([]);
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

    const [units] = useState([
        {
            unitImage: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/ife-unit.png?raw=true",
            unitName: "Ife Hospital Unit",
            unitLocation: "Ile-Ife, Osun State",
            unitAddress: "Ilesa Road, Ile-Ife."
        },
        {
            unitImage: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/locationsPicture%201.png?raw=true",
            unitName: "Ijeshaland Geriatric Centre",
            unitLocation: "Ilesa, Osun State",
            unitAddress: "Ijebu-Jesa Road, Ilesa."
        },
        // Add other units here...
    ]);

    const fetchData = async () => {
        // Fetch departments
        const departmentUrl = 'https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/department';
        const doctorUrl = 'https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/doctors';

        try {
            // Fetch departments
            const departmentResponse = await fetch(departmentUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
                }
            });

            const doctorResponse = await fetch(doctorUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
                }
            });

            if (!departmentResponse.ok || !doctorResponse.ok) {
                throw new Error(`HTTP error! Department status: ${departmentResponse.status}, Doctor status: ${doctorResponse.status}`);
            }

            const departmentData = await departmentResponse.json();
            const doctorData = await doctorResponse.json();

            if (departmentData && departmentData.data) {
                const transformedDepartments = departmentData.data.map(department => ({
                    id: department.id,
                    title: department.name,
                    status: department.status,
                    dateCreated: department.created_at,
                    overviewText: department.over_view_text,
                    departmentImage: department.image_url || '',
                    departmentName: department.name,
                    text: department.text,
                    facilities: department.facilities,
                    services: department.services,
                    phone: department.phone
                }));
                setDepartments(transformedDepartments);
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
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, []);

    const contextValue = {
        departments,
        schools,
        doctors,
        units
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
