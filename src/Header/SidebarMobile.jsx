import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import AccordionItem from "./AccordionItem";

function SidebarMobile() {
    const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

    function handleAccordionClick(index) {
        setOpenAccordionIndex(prevIndex => (prevIndex === index ? null : index));
    }

    return (
        <div className="side-bar-mobile" id="sidebarMobile">
            <div className="sidebar-items">
                <ul className="sidebar-navlinks">
                    <li><Link to="/">Home</Link></li>
                    <AccordionItem
                        title="About"
                        items={["Departments & Centers", "Find a Doctor", "Locations", "Patient & Visitor Guide"]}
                        isOpen={openAccordionIndex === 0}
                        onClick={() => handleAccordionClick(0)}
                    />
                    <AccordionItem
                        title="Services"
                        items={["Research & Ethics", "Diseases & Symptoms", "Tests & Procedures", "Healthy Lifestyle", "Drugs & Supplements"]}
                        isOpen={openAccordionIndex === 1}
                        onClick={() => handleAccordionClick(1)}
                    />
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                <div className="sidebar-buttons">
                    <Link to="/book-appointment">
                        <button type="button" className="book-appointment-button">
                            Book an Appointment
                        </button>  
                    </Link> 
                    <button type="button" className="student-portal-button">
                       <a href="#" target="_blank">
                            Log in to Student Portal
                       </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SidebarMobile;
