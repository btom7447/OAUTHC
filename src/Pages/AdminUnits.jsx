import React, { useState, useEffect } from "react";
import { useUser } from "../Components/UserContext";
import AdminDataDisplay from "../Components/AdminDataDisplay";
import AdminDataTable from "../Components/AdminDataTable"; 

const AdminUnits = () => {
    const { unitsData } = useUser();
    const [data, setData] = useState(unitsData);

    useEffect(() => {
        setData(unitsData);
    }, [unitsData]);

    const handleDeleteSuccess = (id) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
    };

    return (
        <div className="admin-doctors-section">
            <div className="pages-caption">
                <h1>Pages</h1>
            </div>
            <div className="admin-pages-caption">
                <h2>Edit "Locations"</h2>
            </div>
            <AdminDataDisplay
                data={unitsData}
                TableComponent={AdminDataTable}
                itemName="units"
                basePath="/admin/units"
                newItemPath="new"
                entityType="unit"
                setData={handleDeleteSuccess}
            />
        </div>
    );
};

export default AdminUnits;
