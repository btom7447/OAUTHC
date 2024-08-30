import React from "react";
import { useUser } from "../Components/UserContext";
import AdminDataDisplay from "../Components/AdminDataDisplay";
import AdminDataTable from "../Components/AdminDataTable"; 

const AdminLocations = () => {
    const { unitsData } = useUser();

    return (
        <div className="admin-doctors-section">
            <div className="pages-caption">
                <h1>Pages</h1>
            </div>
            <div className="admin-pages-caption">
                <h2>Edit "Location"</h2>
            </div>
            <AdminDataDisplay
                data={unitsData}
                TableComponent={AdminDataTable} 
                itemName="units"
                basePath="/admin/units" 
                newItemPath="new"
            />
        </div>
    );
};

export default AdminLocations;
