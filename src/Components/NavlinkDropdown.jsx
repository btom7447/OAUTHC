import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const NavbarDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {title}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index}>
              <NavLink to={item.url} className="dropdown-item">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavbarDropdown;