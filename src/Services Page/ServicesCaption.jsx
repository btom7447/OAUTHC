import React from 'react';
import { Link } from 'react-router-dom';
import CaptionUnderline from '../General Components/CaptionUnderline';
import { useCurrentSection } from '../General Components/CurrentSectionContent';

const ServicesCaption = () => {
  const { currentSection} = useCurrentSection();

  return (
    <div className="services-caption">
      <div className="page-caption-text">
        <Link to="/">Home</Link> <span>/</span> {currentSection}
        <h5>{currentSection}</h5>
      </div>
      <CaptionUnderline />
    </div>
  );
};

export default ServicesCaption;
