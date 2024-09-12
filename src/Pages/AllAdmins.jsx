import React, { useState, useEffect } from "react";
import { useUser } from "../Components/UserContext";
import AdminRoleDisplay from "../Components/AdminRoleDisplay";

const AllAdmins = () => {
    const { adminsData } = useUser();
    const [data, setData] = useState(adminsData);

    useEffect(() => {
        setData(adminsData);
    }, [adminsData]);

    const handleDeleteSuccess = (id) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
    };

    return (
        <div className="admin-departments-section">
            <div className="pages-caption">
                <h1>Role Management</h1>
            </div>
            <div className="admin-pages-caption">
                <h2>All Admins</h2>
            </div>
            <AdminRoleDisplay
                data={adminsData}
                itemName="admins"
                entityType="admin"
                setData={handleDeleteSuccess}
            />
        </div>
    );
};

export default AllAdmins;