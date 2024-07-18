// eslint-disable-next-line
import React, { createContext, useState, useEffect, useContext } from 'react';

const doctorsData = [
    { 
      id: 1, 
      doctorName: 'Dr. John Doe', 
      gender: 'Male',
      specialty: ['Cardiology', 'Dermatology'], 
      experience: '10',  
      qualification: ['MD', 'FACC'],
      location: 'Urban Comprehensive Health Center',
      languages: ['English', 'Yoruba'],
      doctorImage: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1719220401~exp=1719224001~hmac=1fc1cada4b937eff6cd4363a985fa9cbd84c3569410f978bc1405c98ac671432&w=1380' 
    },
    { 
      id: 2, 
      doctorName: 'Dr. Jane Smith', 
      gender: 'Female',
      specialty: ['Pediatrics', 'Opthalmology'], 
      experience: '8', 
      qualification: ['MD', 'FACC'],
      location: 'Ijeshaland geriatric Center',
      languages: ['English', 'Yoruba'],
      doctorImage: 'https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?t=st=1719218887~exp=1719222487~hmac=033708b0c73d77e4ea65ddea772507ec267d33ccee4cbdbdec07935f5e0c9347&w=1380' 
    },
    { 
      id: 3, 
      doctorName: 'Dr. Michael Brown', 
      gender: 'Male',
      specialty: ['Orthopedics'], 
      experience: '12', 
      qualification: ['MD', 'FACC'],
      location: 'Ife Hospital Unit',
      languages: ['Ibibio'],
      doctorImage: 'https://img.freepik.com/free-photo/confident-attractive-male-doctor-wearing-white-lab-coat-while-standing-with-arms-crossed-against-turquoise-background_662251-1654.jpg?t=st=1719220736~exp=1719224336~hmac=3659fc16dd388e676a7b94baea44b0435b8c170fcbca2bf71c84991492a93462&w=1380' 
    },
    { 
      id: 4, 
      doctorName: 'Dr. Emily Wilson', 
      gender: 'Female',
      specialty: ['Dermatology'], 
      experience: '9', 
      qualification: ['MD', 'FACC'],
      location: 'Wesley Guild Hopsital Unit',
      languages: ['Igbo'],
      doctorImage: 'https://img.freepik.com/free-photo/doctor-white-coat-using-digital-tablet-reading-medical-data-gadget-working-hospital-standin_1258-88112.jpg?t=st=1719220474~exp=1719224074~hmac=19cc44dc4ef14ffb9b4224e8fa0a46351985395e55b694d1478dffdb741f3c07&w=1380' 
    },
    { 
      id: 5, 
      doctorName: 'Dr. David Lee', 
      gender: 'Male',
      specialty: ['Ophthalmology'], 
      experience: '11', 
      qualification: ['MD', 'FAAOS'],
      location: 'Ife Hospital Unit',
      languages: ['English', 'Yoruba'],
      doctorImage: 'https://img.freepik.com/free-photo/smiling-touching-arms-crossed-room-hospital_1134-799.jpg?t=st=1719220764~exp=1719224364~hmac=a59b0987540520499cb0d3b83fdda32a880022488956be212371f7210999d21b&w=1060' 
    },
    { 
      id: 6, 
      doctorName: 'Dr. Sarah Adams', 
      gender: 'Female',
      specialty: ['Gynecology'], 
      experience: '7', 
      qualification: ['MD', 'FAAP'],
      location: 'Wesley Guild Hospital Unit',
      languages: ['English', 'Igbo', 'Ibibio'],
      doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380' 
    },
    { 
      id: 7, 
      doctorName: 'Dr. Robert Garcia', 
      gender: 'Male',
      specialty: ['Neurology'], 
      experience: '13', 
      qualification: ['MD', 'FACC'],
      location: 'Ijeshaland geriatric Center',
      languages: ['English', 'Igbo'],
      doctorImage: 'https://img.freepik.com/free-photo/cheerful-doctor-making-notes-looking-away_23-2147896151.jpg?t=st=1719220409~exp=1719224009~hmac=31424f526954a965e065d04e7207a50db209c69030768ef764976f3de03690d5&w=826' 
    },
    { 
      id: 8, 
      doctorName: 'Dr. Laura Taylor', 
      gender: 'Female',
      specialty: ['Psychiatry'], 
      experience: '6', 
      qualification: ['MD', 'FACS'],
      location: 'Rural Comprehensive Health Center',
      languages: ['English', 'Ibibio'],
      doctorImage: 'https://img.freepik.com/free-photo/healthcare-workers-medicine-insurance-covid-19-pandemic-concept-serious-determined-professional-female-nurse-doctor-blue-scrubs-holding-stethoscope-wear-glasses-look-confident_1258-57384.jpg?t=st=1719220586~exp=1719224186~hmac=851678b328224cae4d774d7cd8533843677a2107500d362b94638064a7c67f8d&w=1380' 
    },
    { 
      id: 9, 
      doctorName: 'Dr. William Clark', 
      gender: 'Male',
      specialty: ['Urology'], 
      experience: '10', 
      qualification: ['MD', 'DFAPA'],
      location: 'Urban Comprehensive Health Center',
      languages: ['Yoruba'],
      doctorImage: 'https://img.freepik.com/free-photo/portrait-successful-young-doctor-with-folder-stethoscope_1262-12410.jpg?t=st=1719220800~exp=1719224400~hmac=e1d1f745b7fb83b1b2efbdf833474cf5862fac5e6efdbcbade28f0d06d3166d7&w=1380' 
    },
    { 
      id: 10, 
      doctorName: 'Dr. Jennifer Martinez', 
      gender: 'Female',
      specialty: ['Oncology'], 
      experience: '8', 
      qualification: ['MD', 'FAAN'],
      languages: ['English', 'Yoruba', 'Ibibio'],
      location: 'Ife Hospital Unit',
      doctorImage: 'https://img.freepik.com/free-psd/doctor-preparing-routine-medical-check_23-2150493308.jpg?t=st=1719220706~exp=1719224306~hmac=98bd7aecade63b2f8d531f6417f67408d48a145d233f93a4a7e716a4bfaad242&w=1380' 
    },
    { 
      id: 11, 
      doctorName: 'Dr. Gomez Stone', 
      gender: 'Male',
      specialty: ['Dermatology', 'Oncology'], 
      experience: '8', 
      qualification: ['MD', 'FAAN'],
      languages: ['English', 'Yoruba', 'Ibibio'],
      location: 'Ife Hospital Unit',
      doctorImage: 'https://img.freepik.com/free-psd/doctor-preparing-routine-medical-check_23-2150493308.jpg?t=st=1719220706~exp=1719224306~hmac=98bd7aecade63b2f8d531f6417f67408d48a145d233f93a4a7e716a4bfaad242&w=1380' 
    },

    // Add more doctor data as needed
  ];

export const DoctorContext = createContext();

export const useDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API or database
    setTimeout(() => {
      setDoctors(doctorsData);
    }, 1000); // Simulating a delay of 1 second
  }, []);

  return doctors;
};

export const DoctorProvider = ({ children }) => {
  const doctors = useDoctors();

  return (
    <DoctorContext.Provider value={{ doctors }}>
      {children}
    </DoctorContext.Provider>
  );
};