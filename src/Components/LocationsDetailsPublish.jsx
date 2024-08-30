import React from "react";

const LocationsDetailsPublish = ({
    unitImage,  
    formData, 
    handleSave, 
    handleDrop, 
    getRootProps, 
    getInputProps, 
    handleRemoveImage
}) => {

    // Determine which image to display
    const imageToDisplay = unitImage || ''; 

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
                                <img src={imageToDisplay} alt="Location" className="units-image-preview"/>
                                <button onClick={handleRemoveImage} className="remove-image-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 22 26" fill="none">
                                        <path d="M7.33301 9.16663H9.16634V20.1666H7.33301V9.16663ZM12.833 9.16663H14.6663V20.1666H12.833V9.16663Z" fill="#D34A4A"/>
                                        <path d="M0 3.66667V5.5H1.83333V23.8333C1.83333 24.3196 2.02649 24.7859 2.3703 25.1297C2.71412 25.4735 3.18044 25.6667 3.66667 25.6667H18.3333C18.8196 25.6667 19.2859 25.4735 19.6297 25.1297C19.9735 24.7859 20.1667 24.3196 20.1667 23.8333V5.5H22V3.66667H0ZM3.66667 23.8333V5.5H18.3333V23.8333H3.66667ZM7.33333 0H14.6667V1.83333H7.33333V0Z" fill="#D34A4A"/>
                                    </svg>
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
