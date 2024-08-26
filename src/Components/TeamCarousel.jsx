import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


const formatNameForUrl = (name) => {
  return name.toLowerCase().split(' ').join('-');
};

const TeamCarousel = ({ teamMembersData }) => {
  if (!teamMembersData || teamMembersData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="teams-carousel">
      <Splide
        options={{
          type: 'slide',
          autoplay: true,
          loop: true,
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
        {teamMembersData.map((member, index) => (
          <SplideSlide key={index}>
            <Link to={`management/${formatNameForUrl(member.name)}`}>
              <div className="professionals-box">
                <div className="professionals-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="professionals-caption">
                  <h6>{member.name}</h6>
                  <h5>{member.position}</h5>
                </div>
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default TeamCarousel;