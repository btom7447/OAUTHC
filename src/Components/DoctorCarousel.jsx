import React from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { useDoctors } from './DepartmentProvider';
import { ClipLoader } from 'react-spinners';

const DoctorsCarousel = () => {
  const doctors = useDoctors();

  if (!doctors || doctors.length === 0) {
    return (
      <div className="loading-spinner loading">
        <ClipLoader color="#005046" size={100} />
      </div>
    );
  }

  return (
    <div className="doctors-carousel">
      <Splide
        options={{
          type: 'loop',
          autoplay: true,
          interval: 4000,
          pauseOnHover: true,
          arrows: false,
          pagination: false,
          gap: '20px',
          perPage: 3,
          breakpoints: {
            1024: { perPage: 3 },
            768: { perPage: 2 },
            576: { perPage: 1 },
          },
        }}
      >
        {doctors.map((doctor, index) => (
          <SplideSlide key={doctor.id || index}>
            <Link
              to={`/about/find-doctor/${doctor.doctorName.replace(/\s+/g, '-')}`}
            >
              <div className="professionals-box">
                <div className="professionals-image">
                  <img src={doctor.doctorImage} alt={doctor.doctorName} />
                </div>
                <div className="professionals-caption">
                  <h6>{doctor.doctorName}</h6>
                  <h5>
                    {Array.isArray(doctor.specialty)
                      ? doctor.specialty.join(', ')
                      : ''}
                  </h5>
                </div>
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default DoctorsCarousel;