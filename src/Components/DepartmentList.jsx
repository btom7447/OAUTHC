import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ClipLoader } from "react-spinners";

const DepartmentList = ({ departments }) => {
    const itemsPerPage = 9; // Number of departments to display per page
    const [currentPage, setCurrentPage] = useState(1);
    const [fade, setFade] = useState(false);

    // Check if departments are still loading
    if (!departments || departments.length === 0) {
        return (
            <div className="loading-spinner loading">
                <ClipLoader color="#005046" size={100} />
            </div>
        );
    }

    // Sort departments alphabetically by departmentName
    const sortedDepartments = [...departments].sort((a, b) => {
        return a.departmentName.localeCompare(b.departmentName);
    });

    const totalPages = Math.ceil(sortedDepartments.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedDepartments = sortedDepartments.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setFade(true);
            setTimeout(() => {
                setCurrentPage(pageNumber);
                setFade(false);
            }, 500);
        }
    };

    return (
        <div className="departments-log">
            <div className={`departments-container ${fade ? 'fade-enter' : 'fade-enter-active'}`}>
                {displayedDepartments.map(({ departmentImage, departmentName }, index) => (
                    <div key={index} className="department">
                        <Link to={`/Department-Details/${departmentName.replace(/\s+/g, '-').toLowerCase()}`}>
                            <img src={departmentImage} alt={departmentName} />
                            <div className="department-caption">
                                <h5>{departmentName}</h5>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="departments-pagination">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                >
                <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>{`Page ${currentPage} of ${totalPages}`}</span>
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

export default DepartmentList;
