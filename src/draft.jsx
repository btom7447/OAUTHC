import React from 'react';

function TestimonialCarouselItem({ text, imageUrl, name, title, rating }) {
  function renderRatingStars() {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
    if (hasHalfStar) {
      stars.push(<i key={stars.length} className="fas fa-star-half-alt"></i>);
    }
    const totalStars = Math.ceil(rating); 
    const emptyStars = 5 - totalStars; 
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={stars.length} className="far fa-star"></i>);
    }
  
    return stars;
  }

  return (
    <div className="splide__slide testimonial-splide">
      <div className="ratings">{renderRatingStars()}</div>
      <p>"{text}"</p>
      <div className="user">
        <img src={imageUrl} alt={name} />
        <div className="user-caption">
          <h5>{name}</h5>
          <h6>{title}</h6>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCarouselItem;