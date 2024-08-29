import React from "react";
import Select from 'react-select';

const DepartmentsDetailsPublish = ({
    departmentImage,  // Pass the department image as a prop
    formData, 
    handleSave, 
    handleDrop, 
    getRootProps, 
    getInputProps, 
    handleRemoveImage, 
    statusOptions, 
    handleSelectChange 
}) => {

    // Determine which image to display
    const imageToDisplay = departmentImage || ''; // Default to an empty string if no image

    return (
        <div className="details-publish">
            {/* PUBLISH */}
            <div className="publish-box">
                <h4>Publish</h4>
                <div>
                    <button onClick={handleSave}>
                        Save
                    </button>
                    <button onClick={handleSave}>
                        Save & Exit
                    </button>
                </div>
            </div>
            {/* STATUS */}
            <div className="status-box">
                <h4>Status</h4>
                <div>
                    <Select
                        value={formData.status}
                        onChange={(selectedOption) => handleSelectChange(selectedOption, 'status')}
                        options={statusOptions}
                        placeholder="Select status"
                    />
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
                                <img src={imageToDisplay} alt="Department" />
                                <button onClick={handleRemoveImage} className="remove-image-btn">
                                    Delete Image
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentsDetailsPublish;
