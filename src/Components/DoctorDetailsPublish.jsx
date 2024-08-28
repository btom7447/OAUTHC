import React from "react";
import Select from 'react-select';

const DoctorsDetailsPublish = ({
    doctorImage,
    formData, 
    handleSave, 
    handleDrop, 
    getRootProps, 
    getInputProps, 
    handleRemoveImage, 
    statusOptions, 
    handleSelectChange 
}) => {
    const imageToDisplay = doctorImage;

    return (
        <div className="details-publish">
            {/* PUBLISH */}
            <div className="publish-box">
                <h4>Publish</h4>
                <div>
                    <button onClick={handleSave} className="save-btn">
                        Save
                    </button>
                    <button onClick={handleSave} className="save-exit-btn">
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
                        <img src={doctorImage} alt="Doctor" style={{ display: doctorImage ? 'block' : 'none' }} />
                        {doctorImage && (
                            <button onClick={() => handleRemoveImage(0)} className="remove-image-btn">
                                Remove Image
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsDetailsPublish;
