import React from "react";
import { useUser } from "../Components/UserContext";
import AdminDataDisplay from "../Components/AdminDataDisplay";
import AdminDataTable from "../Components/AdminDataTable"; 

const AdminDoctors = () => {
    const { doctorsData } = useUser();

    return (
        <div className="admin-doctors-section">
            <div className="pages-caption">
                <h1>Pages</h1>
            </div>
            <div className="admin-pages-caption">
                <h2>Edit "Find a Doctor"</h2>
            </div>
            <AdminDataDisplay
                data={doctorsData}
                TableComponent={AdminDataTable} 
                itemName="doctors"
                basePath="/admin/doctors" 
                newItemPath="new"
            />
        </div>
    );
};

export default AdminDoctors;
