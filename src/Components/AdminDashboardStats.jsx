import React from "react";
import { useUser } from "./UserContext";
import AdminReviewChart from "./AdminReviewChart";
import UpcomingAppointments from "./UpcomingAppointments";

const AdminDashboardStats = () => {

    const { statisticsData } = useUser();
    const { appointments, patients, rate } = statisticsData;
    return (
        <div className="dashboard-stats">
            <div className="logo">
                <img src="https://btom7447.github.io/OAUTH/images/oauthc-logo.png" alt="OAUTHC Logo" />
                <h6>OAUTHC</h6>
            </div>
            <div className="stats-metrics">
                <div className="stats">
                    <p>Appointment</p>
                    <h6>{appointments}</h6>
                </div>
                <hr />
                <div className="stats">
                    <p>Total Patients</p>
                    <h6>{patients}</h6>
                </div>
                <hr />
                <div className="stats">
                    <p>Rate</p>
                    <h6>{rate}</h6>
                </div>
            </div>
            <UpcomingAppointments />
            <AdminReviewChart />
        </div>
    )
};

export default AdminDashboardStats;