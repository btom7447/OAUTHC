import React from "react";
import { useUser } from "../Components/UserContext";
import AdminDataDisplay from "../Components/AdminDataDisplay";
import DepartmentTable from "../Components/AdminDataTable";

const AdminSchools = () => {
    const { schoolsData } = useUser();

    return (
        <div className="admin-departments-section">
            <div className="pages-caption">
                <h1>Pages</h1>
            </div>
            <div className="admin-pages-caption">
                <h2>Edit "Departments & Centers"</h2>
            </div>
            <AdminDataDisplay
                data={schoolsData}
                TableComponent={DepartmentTable}
                itemName="schools"
                basePath="/admin/schools"
                newItemPath="new"
            />
        </div>
    );
};

export default AdminSchools;
