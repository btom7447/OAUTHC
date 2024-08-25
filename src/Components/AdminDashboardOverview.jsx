import React from "react";
import PatientVisit from "./PatientVisit";
import AdminPatientData from "./AdminPatientData";
import AdminDashboardMetrics from "./AdminDashboardMetrics";

const AdminDashboardOverview = () => {

    return (
        <div className="dashboard-overview">
            <div className="dashboard-caption">
                <h1>Overview</h1> 
            </div>
            <AdminDashboardMetrics />
            <PatientVisit />
            <AdminPatientData />
        </div>
    );
};

export default AdminDashboardOverview;