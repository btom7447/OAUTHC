import React from 'react';
import { useDepartments, useSchools, useDoctors, useLoading, useError } from './DepartmentProvider';

const TestComponent = () => {
    const departments = useDepartments();
    const schools = useSchools();
    const doctors = useDoctors();
    const loading = useLoading();
    const error = useError();

    console.log('Departments:', departments);
    console.log('Schools:', schools);
    console.log('Doctors:', doctors);
    console.log('Loading:', loading);
    console.log('Error:', error);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Departments</h1>
            <pre>{JSON.stringify(departments, null, 2)}</pre>
            <h1>Schools</h1>
            <pre>{JSON.stringify(schools, null, 2)}</pre>
            <h1>Doctors</h1>
            <pre>{JSON.stringify(doctors, null, 2)}</pre>
        </div>
    );
};

export default TestComponent;
