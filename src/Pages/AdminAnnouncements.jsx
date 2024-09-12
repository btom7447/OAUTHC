import React, { useState, useEffect } from "react";
import { useUser } from "../Components/UserContext";
import AdminDataDisplay from "../Components/AdminDataDisplay";
import AdminDataTable from "../Components/AdminDataTable"; 

const AdminAnnouncements = () => {
    const { announcementsData } = useUser();
    const [data, setData] = useState(announcementsData);
    
    useEffect(() => {
        setData(announcementsData);
    }, [announcementsData]);

    const handleDeleteSuccess = (id) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
    };

    return (
        <div className="admin-doctors-section">
            <div className="pages-caption">
                <h1>Sections</h1>
            </div>
            <div className="admin-pages-caption">
                <h2>Announcement Section</h2>
            </div>
            <AdminDataDisplay
                data={announcementsData}
                TableComponent={AdminDataTable} 
                itemName="tests"
                basePath="/admin/announcements" 
                newItemPath="new"
                entityType="testimonial"
                setData={handleDeleteSuccess}
            />
        </div>
    );
};

export default AdminAnnouncements;