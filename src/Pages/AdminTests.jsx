import React, { useState, useEffect } from "react";
import { useUser } from "../Components/UserContext";
import AdminDataDisplay from "../Components/AdminDataDisplay";
import AdminDataTable from "../Components/AdminDataTable"; 

const AdminTests = () => {
    const { testsData } = useUser();
    const [data, setData] = useState(testsData);

    useEffect(() => {
        setData(testsData);
    }, [testsData]);

    const handleDeleteSuccess = (id) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
    };

    return (
        <div className="admin-doctors-section">
            <div className="pages-caption">
                <h1>Pages</h1>
            </div>
            <div className="admin-pages-caption">
                <h2>Edit "Tests & Imaging"</h2>
            </div>
            <AdminDataDisplay
                data={testsData}
                TableComponent={AdminDataTable} 
                itemName="tests"
                basePath="/admin/tests" 
                newItemPath="new"
                entityType="test"
                setData={handleDeleteSuccess}
            />
        </div>
    );
};

export default AdminTests;