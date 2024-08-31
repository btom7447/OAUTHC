import React from "react";
import Select from 'react-select';

const HealthServiceDetailsPublish = ({
    servicesImage, 
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
    const imageToDisplay = servicesImage || ''; // Default to an empty string if no image

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
                        className="admin-select"
                        classNames={{
                            control: () => 'react-select__control',
                            option: () => 'react-select__option',
                            menu: () => 'react-select__menu',
                            menuList: () => 'react-select__menu-list',
                            multiValue: () => 'react-select__multi-value',
                            multiValueLabel: () => 'react-select__multi-value__label',
                            multiValueRemove: () => 'react-select__multi-value__remove',
                            placeholder: () => 'react-select__placeholder',
                            dropdownIndicator: () => 'react-select__dropdown-indicator',
                        }}
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
                                <img src={imageToDisplay} alt="Service" />
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

export default HealthServiceDetailsPublish;
