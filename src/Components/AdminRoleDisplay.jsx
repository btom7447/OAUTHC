import React, { useState } from "react";
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import AdminRoleTable from "./AdminRoleTable";

const AdminDataDisplay = ({ data, itemName = "items", entityType, setData }) => {
    // Load the initial itemsPerPage from local storage or default to 10
    const initialItemsPerPage = parseInt(localStorage.getItem("itemsPerPage")) || 10;
    const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
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
        { value: 30, label: '30' },
        { value: 40, label: '40' }, // Added option for 40
        { value: 50, label: '50' }  // Added option for 50
    ];

    // Handle change in items per page
    const handleItemsPerPageChange = (selectedOption) => {
        const newItemsPerPage = selectedOption.value;
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1); // Reset to first page when changing items per page
        localStorage.setItem("itemsPerPage", newItemsPerPage); // Save to local storage
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
            </div>
            <AdminRoleTable
                data={itemsToDisplay}
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