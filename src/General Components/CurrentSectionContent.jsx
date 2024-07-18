import React, { createContext, useContext, useState } from 'react';

const CurrentSectionContext = createContext();

export const CurrentSectionProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState('Default Section');

  return (
    <CurrentSectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </CurrentSectionContext.Provider>
  );
};

export const useCurrentSection = () => useContext(CurrentSectionContext);
