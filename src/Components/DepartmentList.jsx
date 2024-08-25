import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const DepartmentList = ({ departments }) => {
    const itemsPerPage = 6; // Number of departments to display per page
    const [currentPage, setCurrentPage] = useState(1);
    const [fade, setFade] = useState(false);

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