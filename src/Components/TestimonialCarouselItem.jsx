import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as farStar } from '@fortawesome/free-solid-svg-icons';

function TestimonialCarouselItem({ text, name, rating }) {
  function renderRatingStars() {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    }
    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key={stars.length} icon={faStarHalfAlt} />);
    }
    const totalStars = Math.ceil(rating); 
    const emptyStars = 5 - totalStars; 
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FontAwesomeIcon key={stars.length} icon={farStar} />);
    }
  
    return stars;
  }

  return (
    <div className="splide__slide testimonial-splide">
        <p>"{text}"</p>
        <div className="ratings">{renderRatingStars()}</div>
        <h5>{name}</h5>
    </div>
  );
}

export default TestimonialCarouselItem;
