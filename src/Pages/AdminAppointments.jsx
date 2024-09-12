import React, { useState, useEffect } from "react";
import { useUser } from "../Components/UserContext";
import AdminAppDisplay from "../Components/AdminAppDisplay";

const AllAdmins = () => {
    const { appointmentsData } = useUser();
    const [data, setData] = useState(appointmentsData);

    useEffect(() => {
        setData(appointmentsData);
    }, [appointmentsData]);

    const handleDeleteSuccess = (id) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
    };

    return (
        <div className="admin-departments-section">
            <div className="pages-caption">
                <h1>Appointments</h1>
            </div>
            <div className="admin-pages-caption">
                  <h2>All Appointments</h2>
            </div>
            <AdminAppDisplay
                data={appointmentsData}
                itemName="admins"
                entityType="admin"
                setData={handleDeleteSuccess}
            />
        </div>
    );
};

export default AllAdmins;