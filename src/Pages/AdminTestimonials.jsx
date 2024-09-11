import React, { useState, useEffect } from "react";
import { useUser } from "../Components/UserContext";
import AdminDataDisplay from "../Components/AdminDataDisplay";
import AdminDataTable from "../Components/AdminDataTable"; 

const AdminTestimonials = () => {
    const { testimonialsData } = useUser();
    const [data, setData] = useState(testimonialsData);

    useEffect(() => {
        setData(testimonialsData);
    }, [testimonialsData]);

    const handleDeleteSuccess = (id) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
    };

    return (
        <div className="admin-doctors-section">
            <div className="pages-caption">
                <h1>Sections</h1>
            </div>
            <div className="admin-pages-caption">
                <h2>Testimonial Section</h2>
            </div>
            <AdminDataDisplay
                data={testimonialsData}
                TableComponent={AdminDataTable} 
                itemName="tests"
                basePath="/admin/testimonials" 
                newItemPath="new"
                entityType="testimonial"
                setData={handleDeleteSuccess}
            />
        </div>
    );
};

export default AdminTestimonials;