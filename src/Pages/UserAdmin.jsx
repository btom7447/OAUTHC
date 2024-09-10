import React from "react";
import { ToastContainer } from 'react-toastify';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminSidebar from "../Components/AdminSidebar";
import AdminDashboard from "./AdminDashboard";
import AdminSections from "./AdminSections";
import AdminAppointments from "./AdminAppointments";
import AdminServices from "./AdminServices";
import AdminPatients from "./AdminPatients";
import AdminSettings from "./AdminSettings";
import AdminHeader from "../Components/AdminHeader";
import { UserProvider } from "../Components/UserContext";
import AllAdmins from "./AllAdmins";
import AddAdmin from "./AddAdmin";
import AdminDoctors from "./AdminDoctors";
import AdminDepartments from "./AdminDepartments"; 
import AdminUnits from "./AdminUnits";
import AdminSchools from "./AdminSchools";
import AdminHealthServices from "./AdminHealthServices";
import AdminDoctorsCreate from "./AdminDoctorsCreate";
import AdminDoctorsUpdate from "./AdminDoctorsUpdate";
import AdminDepartmentUpdate from "./AdminDepartmentUpdate";
import AdminDepartmentCreate from "./AdminDepartmentCreate";
import AdminUnitsUpdate from "./AdminUnitsUpdate";
import AdminUnitsCreate from "./AdminUnitsCreate";
import AdminSchoolsUpdate from "./AdminSchoolsUpdate";
import AdminSchoolsCreate from "./AdminSchoolsCreate";
import AdminHealthServicesUpdate from "./AdminHealthServicesUpdate";
import AdminHealthServicesCreate from "./AdminHealthServicesCreate";
import AdminTests from "./AdminTests";
import AdminTestsUpdate from "./AdminTestsUpdate";
import AdminTestsCreate from "./AdminTestsCreate";
import AdminDiseases from "./AdminDiseases";
import AdminDiseasesUpdate from "./AdminDiseasesUpdate";
import AdminDiseasesCreate from "./AdminDiseasesCreate";

const UserAdmin = () => {
    return (
        <UserProvider>
            <ToastContainer />
            <div className="user-admin">
                <AdminHeader />
                <AdminSidebar />
                <div className="admin-content">
                    <Routes>
                        <Route path="/" element={<Navigate to="/dashboard" />} />
                        <Route path="/dashboard" element={<AdminDashboard />} />
                        <Route path="/all-admins" element={<AllAdmins />} />
                        <Route path="/add-admin" element={<AddAdmin />} />
                        <Route path="/sections" element={<AdminSections />} />
                        <Route path="/departments" element={<AdminDepartments />} />
                        <Route path="/departments/:id" element={<AdminDepartmentUpdate />} />
                        <Route path="/departments/new" element={<AdminDepartmentCreate />} />
                        <Route path="/diseases" element={<AdminDiseases />} />
                        <Route path="/diseases/:id" element={<AdminDiseasesUpdate />} />
                        <Route path="/diseases/new" element={<AdminDiseasesCreate />} />
                        <Route path="/doctors" element={<AdminDoctors />} />
                        <Route path="/doctors/:id" element={<AdminDoctorsUpdate />} />
                        <Route path="/doctors/new" element={<AdminDoctorsCreate />} />
                        <Route path="/schools" element={<AdminSchools />} />
                        <Route path="/schools/:id" element={<AdminSchoolsUpdate />} />
                        <Route path="/schools/new" element={<AdminSchoolsCreate />} />
                        <Route path="/tests" element={<AdminTests />} />
                        <Route path="/tests/:id" element={<AdminTestsUpdate />} />
                        <Route path="/tests/new" element={<AdminTestsCreate />} />
                        <Route path="/units" element={<AdminUnits />} />
                        <Route path="/units/:id" element={<AdminUnitsUpdate />} />
                        <Route path="/units/new" element={<AdminUnitsCreate />} />
                        <Route path="/health-services" element={<AdminHealthServices />} />
                        <Route path="/health-services/:id" element={<AdminHealthServicesUpdate />} />
                        <Route path="/health-services/new" element={<AdminHealthServicesCreate />} />
                        <Route path="/appointments" element={<AdminAppointments />} />
                        <Route path="/services" element={<AdminServices />} />
                        <Route path="/patients" element={<AdminPatients />} />
                        <Route path="/settings" element={<AdminSettings />} />
                        
                    </Routes>
                </div>
            </div>
        </UserProvider>
    )
};

export default UserAdmin;