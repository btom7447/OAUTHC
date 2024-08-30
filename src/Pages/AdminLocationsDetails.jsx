import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from 'react-dropzone'; 
import LocationsDetailsInputs from "../Components/LocationsDetailsInputs";
import LocationsDetailsPublish from "../Components/LocationsDetailsPublish";

const AdminLocationsDetails = () => {
    const { name } = useParams();
    const { unitsData, updateUnit } = useUser(); // Use unitsData and updateUnit
    const navigate = useNavigate();

    const isCreating = !name;
    
    // Find the specific location (unit) to edit based on the name parameter
    const location = !isCreating && unitsData.length > 0 
        ? unitsData.find(unit => unit.name.toLowerCase().replace(/\s+/g, '-') === name) 
        : null;

    const [formData, setFormData] = useState({
        name: location?.name || '',
        address: location?.address || '',
        state: location?.state || '',
        phone: location?.phone || '',
        status: location?.status ? { value: location.status, label: location.status.charAt(0).toUpperCase() + location.status.slice(1) } : null,
        unitImage: location?.unitImage || '',
        images: location?.images || [],
    });

    useEffect(() => {
        if (location) {
            setFormData({
                name: location.name || '',
                address: location.address || '',
                state: location.state || '',
                phone: location.phone || '',
                status: location.status ? { value: location.status, label: location.status.charAt(0).toUpperCase() + location.status.slice(1) } : null,
                unitImage: location.unitImage || '',
                images: location.images || [],
            });
        }
    }, [location, name]);

    const statusOptions = [
        { value: 'publish', label: 'Publish' },
        { value: 'draft', label: 'Draft' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSelectChange = (newValue, category) => {
        setFormData(prevData => ({
            ...prevData,
            [category]: newValue
        }));
    };

    const handleSave = async () => {
        try {
            const method = isCreating ? 'POST' : 'PUT';
            const url = isCreating
                ? 'https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/unit'
                : `https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/unit/${location.id}`;
    
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('address', formData.address);
            formDataToSend.append('state', formData.state);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('status', formData.status?.value || '');
    
            if (formData.images.length > 0) {
                formData.images.forEach((image, index) => {
                    formDataToSend.append(`images[${index}]`, image);
                });
            }
            if (formData.unitImage) {
                formDataToSend.append('unitImage', formData.unitImage);
            }
    
            const response = await fetch(url, {
                method,
                body: formDataToSend,
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            console.log('Save successful:', result);
    
            if (!isCreating) {
                updateUnit(location.id, result); // Assuming result contains the updated location data
            }
    
            navigate('/admin/locations');
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    const handleDrop = (acceptedFiles) => {
        if (acceptedFiles.length + formData.images.length <= 2) {
            setFormData(prevData => {
                const newImages = [
                    ...prevData.images,
                    ...acceptedFiles.map(file => Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    }))
                ];
                return {
                    ...prevData,
                    images: newImages,
                    unitImage: newImages[0] ? newImages[0].preview : prevData.unitImage
                };
            });
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleDrop,
        maxFiles: 2
    });

    const handleRemoveImage = (index) => {
        setFormData(prevData => {
            const newImages = prevData.images.filter((_, i) => i !== index);
            return {
                ...prevData,
                images: newImages,
                unitImage: newImages.length > 0 ? newImages[0].preview : ''
            };
        });
    };

    if (!unitsData || unitsData.length === 0) {
        return <div className="loading">Loading...</div>; 
    }

    return (
        <>
            <div className="pages-caption">
                <h1>Pages</h1>
            </div>
            <div className="back">
                <FontAwesomeIcon icon={faChevronLeft} />
                <Link to="/admin/units">
                    Back
                </Link>
            </div>
            <div className="admin-pages-caption">
                <h2>{isCreating ? 'Create New Location' : `Edit "${location.name}"`}</h2>
            </div>
            <div className="location-details-page">
                <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                    <div className="details-page-section">
                        <LocationsDetailsInputs
                            formData={formData}
                            handleInputChange={handleInputChange}
                            handleSelectChange={handleSelectChange}
                        />
                        <LocationsDetailsPublish
                            unitImage={formData.unitImage}
                            formData={formData}
                            handleSave={handleSave}
                            handleDrop={handleDrop}
                            getRootProps={getRootProps}
                            getInputProps={getInputProps}
                            handleRemoveImage={handleRemoveImage}
                            statusOptions={statusOptions}
                            handleSelectChange={handleSelectChange}
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default AdminLocationsDetails;
