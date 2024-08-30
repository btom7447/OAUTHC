import React from "react";

const LocationsDetailsPublish = ({
    locationImage,  // Pass the location image as a prop
    formData, 
    handleSave, 
    handleDrop, 
    getRootProps, 
    getInputProps, 
    handleRemoveImage
}) => {

    // Determine which image to display
    const imageToDisplay = locationImage || ''; // Default to an empty string if no image

    return (
        <div className="details-publish">
            {/* PUBLISH */}
            <div className="publish-box">
                <h4>Publish</h4>
                <div>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleSave}>Save & Exit</button>
                </div>
            </div>
            {/* IMAGE UPLOAD */}
            <div className="image-box">
                <h4>Image <span className="image-spec">(237 x 300px)</span> </h4>
                <div {...getRootProps()} className="dropzone">
                    <input {...getInputProps()} />
                    <p>Drag and drop image here or click to upload</p>
                </div>
                <div className="image-previews">
                    <div className="image-preview">
                        {imageToDisplay && (
                            <>
                                <img src={imageToDisplay} alt="Location" />
                                <button onClick={handleRemoveImage} className="remove-image-btn">
                                    Delete 
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationsDetailsPublish;
