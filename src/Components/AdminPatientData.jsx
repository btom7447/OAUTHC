import React from "react";
import { useUser } from "../Components/UserContext";

const AdminPatientData = () => {
    const { appointmentsData } = useUser(); 

    const today = new Date().toISOString().split("T")[0];

    const filteredAppointments = appointmentsData
        .filter(appointment => 
            appointment.status.toLowerCase() === 'pending' && 
            appointment.patientDate >= today 
        )
        .sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="admin-patient-data">
            <h4>Upcoming Appointments</h4>
            {filteredAppointments.length > 0 ? (
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Patient Name</th>
                            <th>Date in</th>
                            <th>Patient Type</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAppointments.map((appointment) => (
                            <tr key={appointment.id}>
                                <td>
                                    <div className="patient-profile">
                                        <div className="patient-gender">
                                            <img
                                                src={
                                                    appointment.gender === "male"
                                                        ? "https://img.icons8.com/?size=100&id=7822&format=png&color=000000"
                                                        : "https://img.icons8.com/?size=100&id=7818&format=png&color=000000"
                                                }
                                                alt={appointment.gender}
                                            />
                                        </div>
                                        {appointment.name}
                                    </div>
                                </td>
                                <td>{appointment.patientDate}</td>
                                <td>{appointment.patientType}</td>
                                <td className="pending">
                                    {appointment.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="loading">No Upcoming Appointments.</div>
            )}
        </div>
    );
};

export default AdminPatientData;