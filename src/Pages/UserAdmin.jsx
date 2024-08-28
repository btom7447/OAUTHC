import React from "react";
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
import AdminDoctorsDetail from "./AdminDoctorsDetails";
import AdminDepartmentDetails from "./AdminDepartmentDetails";

const UserAdmin = () => {
    return (
        <UserProvider>
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
                        <Route path="/departments/:departmentTitle" element={<AdminDepartmentDetails />} />
                        <Route path="/doctors/:doctorName" element={<AdminDoctorsDetail />} />
                        <Route path="/doctors" element={<AdminDoctors />} />
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