import React, { createContext, useContext, useState } from 'react';

const SectionContext = createContext();

export const SectionProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState('Default Section');

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => useContext(SectionContext);