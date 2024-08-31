import React from "react";
import { useUser } from "../Components/UserContext";
import AdminDataDisplay from "../Components/AdminDataDisplay";
import DepartmentTable from "../Components/AdminDataTable";

const AdminHealthServices = () => {
    const { healthServicesData } = useUser();

    return (
        <div className="admin-departments-section">
            <div className="pages-caption">
                <h1>Pages</h1>
            </div>
            <div className="admin-pages-caption">
                <h2>Edit "Health Services"</h2>
            </div>
            <AdminDataDisplay
                data={healthServicesData}
                TableComponent={DepartmentTable}
                itemName="health-services"
                basePath="/admin/health-services"
                newItemPath="new"
            />
        </div>
    );
};

export default AdminHealthServices;
