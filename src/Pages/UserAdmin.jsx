import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminSidebar from "../Components/AdminSidebar";
import AdminDashboard from "./AdminDashboard";
import AdminRoleManage from "./AdminRoleManage";
import AdminSections from "./AdminSections";
import AdminPages from "./AdminPages";
import AdminAppointments from "./AdminAppointments";
import AdminServices from "./AdminServices";
import AdminPatients from "./AdminPatients";
import AdminSettings from "./AdminSettings";
import AdminHeader from "../Components/AdminHeader";
import { UserProvider } from "../Components/UserContext";

const UserAdmin = () => {
    return (
        <UserProvider>
            <div className="user-admin">
                <AdminHeader />
                <AdminSidebar />
                <div className="admin-content">
                    <Routes>
                        <Route path="/" element={<Navigate to="/admin/dashboard" />} />
                        <Route path="/dashboard" element={<AdminDashboard />} />
                        <Route path="/role-manage" element={<AdminRoleManage />} />
                        <Route path="/sections" element={<AdminSections />} />
                        <Route path="/pages" element={<AdminPages />} />
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
