import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarDropdown from './NavlinkDropdown';

const Navbar = () => {
  return (
    <nav>
      <ul className='navlinks'>
        <li>
          <NavLink to="/home" activeclassname="active" className="navLink">
            Home
          </NavLink>
        </li>
        <li>
          <NavbarDropdown
            title="About Us"
            items={[
              { label: "About OAUTHC", url: "/about/about-oauthc" },
              { label: "Departments & Centers", url: "/about/departments-centers" },
              { label: "Find a Doctor", url: "/about/find-doctor" },
              { label: "Locations", url: "/about/locations" },
              { label: "Our Schools", url: "/about/our-schools"},
            ]}
          />
        </li>
        <li>
          <NavbarDropdown
            title="Services"
            items={[
              { label: "Our Services", url: "/services/health-services" },
              { label: "Research and Ethics", url: "/services/research-ethics" },
              { label: "Diseases & Symptoms", url: "/services/diseases-symptoms" },
              { label: "Tests & Imaging", url: "/services/tests-procedures" },
            ]}
          />
        </li>
        <li className='navLink'><a href="https://www.theoauthcblog.online/" target="_blank" rel="noreferrer">Blog</a></li>
        <li>
          <NavLink to="/contact" className="navLink">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
