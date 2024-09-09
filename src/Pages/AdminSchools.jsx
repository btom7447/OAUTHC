import React, { useState, useEffect } from "react";
import { useUser } from "../Components/UserContext";
import AdminDataDisplay from "../Components/AdminDataDisplay";
import AdminDataTable from "../Components/AdminDataTable";

const AdminSchools = () => {
    const { schoolsData } = useUser();
    const [data, setData] = useState(schoolsData);

    useEffect(() => {
        setData(schoolsData);
    }, [schoolsData]);

    const handleDeleteSuccess = (id) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
    };

    return (
        <div className="admin-departments-section">
            <div className="pages-caption">
                <h1>Pages</h1>
            </div>
            <div className="admin-pages-caption">
                <h2>Edit "Our Schools"</h2>
            </div>
            <AdminDataDisplay
                data={schoolsData}
                TableComponent={AdminDataTable}
                itemName="schools"
                basePath="/admin/schools"
                newItemPath="new"
                entityType="schools"
                setData={handleDeleteSuccess}
            />
        </div>
    );
};

export default AdminSchools;
