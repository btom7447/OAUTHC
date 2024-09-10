import React, { useState, useEffect } from "react";
import { useUser } from "../Components/UserContext";
import AdminDataDisplay from "../Components/AdminDataDisplay";
import AdminDataTable from "../Components/AdminDataTable"; 

const AdminDiseases = () => {
    const { diseasesData } = useUser();
    const [data, setData] = useState(diseasesData);

    useEffect(() => {
        setData(diseasesData);
    }, [diseasesData]);

    const handleDeleteSuccess = (id) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
    };

    return (
        <div className="admin-doctors-section">
            <div className="pages-caption">
                <h1>Pages</h1>
            </div>
            <div className="admin-pages-caption">
                <h2>Edit "Diseases & Symptoms"</h2>
            </div>
            <AdminDataDisplay
                data={diseasesData}
                TableComponent={AdminDataTable} 
                itemName="diseases"
                basePath="/admin/diseases" 
                newItemPath="new"
                entityType="disease"
                setData={handleDeleteSuccess}
            />
        </div>
    );
};

export default AdminDiseases;