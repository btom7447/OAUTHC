import React, { createContext, useContext } from 'react';

const DepartmentContext = createContext();

export const DepartmentProvider = ({ children }) => {
    const departments = [
      {},
      {}
        
    ];

    const schools = [
       {},
       {},
       {}
    ];

    const doctorsData = [
       {},
       {},
       {}

    ];

    const contextValue = {
        departments,
        schools,
        doctorsData
    };

    return (
        <DepartmentContext.Provider value={contextValue}>
            {children}
        </DepartmentContext.Provider>
    );
};

export const useDepartments = () => {
    const context = useContext(DepartmentContext);
    if (!context) {
        throw new Error("useDepartments must be used within a DepartmentProvider");
    }
    return context.departments;
};

export const useSchools = () => {
    const context = useContext(DepartmentContext);
    if (!context) {
        throw new Error("useSchools must be used within a DepartmentProvider");
    }
    return context.schools;
};

export const useDoctors = () => {
    const context = useContext(DepartmentContext);
    if (!context) {
        throw new Error("useDoctors must be used within a DepartmentProvider");
    }
    return context.doctorsData;
};