import React from 'react';
import { Link } from 'react-router-dom';
import CaptionUnderline from './CaptionUnderline';
import { useCurrentSection } from './CurrentSectionContent';

const PageCaption = () => {
  const { currentSection } = useCurrentSection();

  return (
    <div className="page-caption">
      <div className="page-caption-text">
        <Link to="/">Home</Link> <span>/</span> {currentSection}
        <h5>{currentSection}</h5>
      </div>
      <CaptionUnderline />
    </div>
  );
};

export default PageCaption;
