import React, { useState, useEffect } from 'react';

const DoctorsList = ({ onSelectDoctor }) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const token = localStorage.getItem('bearerToken'); // Adjust the key if different
        const response = await fetch('https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/doctors', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div>
      <h2>Doctors List</h2>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.id} onClick={() => onSelectDoctor(doctor.id)}>
            {doctor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorsList;
