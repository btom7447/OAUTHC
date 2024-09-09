import React, { useState, useEffect } from "react";
import { useUser } from "../Components/UserContext";
import AdminDataDisplay from "../Components/AdminDataDisplay";
import AdminDataTable from "../Components/AdminDataTable";

const AdminHealthServices = () => {
    const { healthServicesData } = useUser();
    const [data, setData] = useState(healthServicesData);

    useEffect(() => {
        setData(healthServicesData);
    }, [healthServicesData]);

    const handleDeleteSuccess = (id) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
    };

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
                TableComponent={AdminDataTable}
                itemName="health-services"
                basePath="/admin/health-services"
                newItemPath="new"
                entityType="health"
                setData={handleDeleteSuccess}
            />
        </div>
    );
};

export default AdminHealthServices;
