import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarDropdown from './NavlinkDropdown';

const Navbar = () => {
  return (
    <nav>
      <ul className='navlinks'>
        <li>
          <NavLink exact to="/" activeClassName="active" className="navLink">
            Home
          </NavLink>
        </li>
        <li>
          <NavbarDropdown
            title="About Us"
            items={[
              { label: "Departments & Centers", url: "/about/DepartmentsCenters" },
              { label: "Find a Doctor", url: "/about/FindDoctor" },
              { label: "Locations", url: "/about/Locations"}, 
              { label: "Patient & Visitor Guide", url: "/about/PatientVisitorGuide"}
            ]}
          />
        </li>
        <li>
          <NavbarDropdown
            title="Services"
            items={[
              { label: "Research & Ethics", url: "/services/service-1" },
              { label: "Diseases & Symptoms", url: "/services/service-2" },
              { label: "Tests & Procedures", url: "/services/service-3"}, 
              { label: "Healthy Lifestyle", url: "/services/service-4"}, 
              { label: "Drugs & Supplements", url: "/services/service-5"}
              // Add more dropdown items as needed
            ]}
          />
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active" className="navLink">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;