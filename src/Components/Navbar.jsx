import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarDropdown from './NavlinkDropdown';

const Navbar = () => {
  return (
    <nav>
      <ul className='navlinks'>
        <li>
          <NavLink to="/Home" activeclassname="active" className="navLink">
            Home
          </NavLink>
        </li>
        <li>
          <NavbarDropdown
            title="About Us"
            items={[
              { label: "About OAUTHC", url: "/About/About-OAUTHC" },
              { label: "Departments & Centers", url: "/About/Departments-Centers" },
              { label: "Find a Doctor", url: "/About/Find-Doctor" },
              { label: "Locations", url: "/About/locations" },
              { label: "Our Schools", url: "/About/our-schools"},
            ]}
          />
        </li>
        <li>
          <NavbarDropdown
            title="Services"
            items={[
              { label: "Our Services", url: "/Services/Health-Services" },
              { label: "Research and Ethics", url: "/Services/Research-Ethics" },
              { label: "Diseases & Symptoms", url: "/Services/Diseases-Symptoms" },
              { label: "Tests & Imaging", url: "/Services/Tests-Procedures" },
            ]}
          />
        </li>
        <li className='navLink'><a href="https://www.theoauthcblog.online/" target="_blank" rel="noreferrer">Blog</a></li>
        <li>
          <NavLink to="/Contact" className="navLink">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
