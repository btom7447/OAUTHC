import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const AdminDataDisplay = ({ data, TableComponent, itemName = "items", basePath, newItemPath, entityType, setData }) => {
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    if (!data) return <div className="loading">Loading...</div>;

    // Sort data alphabetically by title or name (adjust the key if necessary)
    const sortedData = [...data].sort((a, b) => {
        const aName = a.name || ""; 
        const bName = b.name || "";
        return aName.localeCompare(bName);
    });

    const totalPages = Math.ceil(sortedData.length / itemsPerPage);
    const totalItems = sortedData.length;
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    const itemsToDisplay = sortedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Define options for react-select
    const options = [
        { value: 5, label: '5' },
        { value: 10, label: '10' },
        { value: 20, label: '20' },
        { value: 30, label: '30' }
    ];

    // Handle change in items per page
    const handleItemsPerPageChange = (selectedOption) => {
        setItemsPerPage(selectedOption.value);
        setCurrentPage(1); // Reset to first page when changing items per page
    };

    return (
        <div className="admin-data-display">
            <div className="data-table-functions">
                <label>
                    Show
                    <Select
                        value={options.find(option => option.value === itemsPerPage)}
                        onChange={handleItemsPerPageChange}
                        options={options}
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
                </label>
                <button type="button" className="add-new-button">
                    <Link to={`${basePath}/${newItemPath}`}>
                        Add New
                    </Link>
                </button>
            </div>
            <TableComponent
                data={itemsToDisplay}
                basePath={basePath}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                entityType={entityType}
                setData={setData}
            />
            <div className="admin-data-pagination">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>{`Showing ${startItem}-${endItem} of ${totalItems} ${itemName}`}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
};

export default AdminDataDisplay;