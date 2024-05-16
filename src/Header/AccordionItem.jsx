import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function AccordionItem({ title, items, isOpen, onClick }) {
  return (
    <li>
      <button onClick={onClick} Name="accordion-button">
        {title} <FontAwesomeIcon icon={isOpen ? faAngleDown : faAngleRight} className="accordion-icon" />
      </button>
      {isOpen && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Link to={`/${item.toLowerCase().replace(/\s/g, '-')}`}>{item}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default AccordionItem;
