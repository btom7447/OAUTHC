import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const AccordionItem = ({ title, items, isOpen, onClick }) => {
    return (
        <li className="accordion-item">
            <button className="accordion-title" onClick={onClick}>
                {title} <FontAwesomeIcon icon={isOpen ? faAngleDown : faAngleRight} className="accordion-icon" />
            </button>
            {isOpen && (
                <ul className="accordion-content">
                    {items.map((item, index) => (
                        <li key={index}>
                            <Link to={item.url}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default AccordionItem;
