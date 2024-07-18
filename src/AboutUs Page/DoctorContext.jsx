import React, { createContext, useContext, useState } from 'react';

const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [doctors] = useState([
    // Array of doctor objects
  ]);

  return (
    <DoctorContext.Provider value={doctors}>
      {children}
    </DoctorContext.Provider>
  );
};

export const useDoctors = () => {
  return useContext(DoctorContext);
};
