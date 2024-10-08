import React, { useState, useEffect } from "react";
import { useUser } from "../Components/UserContext";
import AdminDataDisplay from "../Components/AdminDataDisplay";
import AdminDataTable from "../Components/AdminDataTable";

const AdminDepartments = () => {
    const { departmentsData } = useUser();
    const [data, setData] = useState(departmentsData);

    useEffect(() => {
        setData(departmentsData);
    }, [departmentsData]);

    const handleDeleteSuccess = (id) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
    };

    return (
        <div className="admin-departments-section">
            <div className="pages-caption">
                <h1>Pages</h1>
            </div>
            <div className="admin-pages-caption">
                <h2>Edit "Departments & Centers"</h2>
            </div>
            <AdminDataDisplay
                data={departmentsData}
                TableComponent={AdminDataTable}
                itemName="departments"
                basePath="/admin/departments"
                newItemPath="new"
                entityType="department"
                setData={handleDeleteSuccess}
            />
        </div>
    );
};

export default AdminDepartments;
