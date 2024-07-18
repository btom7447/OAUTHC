// SectionWrapper.js
import React, { useEffect } from 'react';
import { useCurrentSection } from './CurrentSectionContent';

const SectionWrapper = ({ sectionName, children }) => {
  const { setCurrentSection } = useCurrentSection();

  useEffect(() => {
    if (setCurrentSection) {
      setCurrentSection(sectionName);
    }
  }, [sectionName, setCurrentSection]);

  return <div>{children}</div>;
};

export default SectionWrapper;
