import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditDoctor = () => {
  const { id } = useParams(); // Fetch the ID from the URL
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [formData, setFormData] = useState(new FormData());

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const token = localStorage.getItem('bearerToken');
        const response = await fetch(`https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/doctors/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setDoctor(data);
      } catch (error) {
        console.error('Error fetching doctor:', error);
      }
    };

    fetchDoctor();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      formData.append(name, files[0]);
    } else {
      formData.append(name, value);
    }
    setFormData(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('bearerToken');
      await fetch(`https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/update-doctor/${id}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });
      alert('Doctor updated successfully');
      navigate('/doctors'); // Redirect to doctors list
    } catch (error) {
      console.error('Error updating doctor:', error);
    }
  };

  if (!doctor) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" defaultValue={doctor.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="gender" defaultValue={doctor.gender} onChange={handleChange} placeholder="Gender" />
      <input type="email" name="email" defaultValue={doctor.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="department[0]" defaultValue={doctor.department[0]} onChange={handleChange} placeholder="Department" />
      <input type="text" name="specialty[0]" defaultValue={doctor.specialty[0]} onChange={handleChange} placeholder="Specialty" />
      <input type="text" name="unit[0]" defaultValue={doctor.unit[0]} onChange={handleChange} placeholder="Unit" />
      <input type="text" name="clinic_day" defaultValue={doctor.clinic_day} onChange={handleChange} placeholder="Clinic Day" />
      <input type="file" name="image" onChange={handleChange} />
      <textarea name="text_desc" defaultValue={doctor.text_desc} onChange={handleChange} placeholder="Description" />
      <textarea name="accomplishment" defaultValue={doctor.accomplishment} onChange={handleChange} placeholder="Accomplishments" />
      <input type="text" name="linkdin" defaultValue={doctor.linkdin} onChange={handleChange} placeholder="LinkedIn" />
      <input type="text" name="instagram" defaultValue={doctor.instagram} onChange={handleChange} placeholder="Instagram" />
      <input type="text" name="twitter" defaultValue={doctor.twitter} onChange={handleChange} placeholder="Twitter" />
      <input type="text" name="facebook" defaultValue={doctor.facebook} onChange={handleChange} placeholder="Facebook" />
      <input type="text" name="qualification[0]" defaultValue={doctor.qualification[0]} onChange={handleChange} placeholder="Qualification" />
      <button type="submit">Update Doctor</button>
    </form>
  );
};

export default EditDoctor;
