import React from "react";
import Select from 'react-select';

const DepartmentsDetailsPublish = ({
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
    const imageToDisplay = doctorImage || ''; // Ensure a fallback value is provided

    return (
        <div className="details-publish">
            {/* PUBLISH */}
            <div className="publish-box">
                <h4>Publish</h4>
                <div>
                    <button onClick={handleSave}>
                        Save
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
                                <img src={imageToDisplay} alt="Doctor image" />
                                <button onClick={handleRemoveImage} className="remove-image-btn">
                                    Remove Image
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
