import React from "react";
import AdminDashboardOverview from "../Components/AdminDashboardOverview";
import AdminDashboardStats from "../Components/AdminDashboardStats";

const AdminDashboard = () => {
    return (
        <div className="dashboard">
            <AdminDashboardOverview />
            <AdminDashboardStats />
        </div>
    )
};

export default AdminDashboard;