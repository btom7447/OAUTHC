import React from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { useDoctors } from './DepartmentProvider';

const FilterCarousel = ({ departmentName }) => {
  const doctors = useDoctors();

  if (!doctors || doctors.length === 0) {
    return <div>Loading...</div>;
  }

  // Filter doctors by department
  const filteredDoctors = doctors.filter(doctor =>
    doctor.department.includes(departmentName)
  );

  return (
    <div className="doctors-carousel">
      <Splide
        options={{
          type: 'loop',
          autoplay: true,
          interval: 4000,
          pauseOnHover: true,
          arrows: false,
          pagination: true,
          gap: '20px',
          perPage: 3,
          breakpoints: {
              1024: { perPage: 3 },
              768: { perPage: 2 },
              576: { perPage: 1 },
          },
        }}
      >
      {filteredDoctors.map((doctor) => (
        <SplideSlide key={doctor.id}>
          <Link to={`/About/Find-Doctor/${encodeURIComponent(doctor.doctorName)}`}>
            <div className="professionals-box">
              <div className="professionals-image">
                <img src={doctor.doctorImage} alt={doctor.doctorName} />
              </div>
              <div className="professionals-caption">
                <h6>{doctor.doctorName}</h6>
              </div>
            </div>
          </Link>
        </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default FilterCarousel;