import React, { useState } from "react";
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
                        items={[
                            { label: "About OAUTHC", url: "/About/About-OAUTHC" },
                            { label: "Departments & Centers", url: "/About/Departments-Centers" },
                            { label: "Find a Doctor", url: "/About/Find-Doctor" },
                            { label: "Locations", url: "/About/locations" },
                            { label: "Our Schools", url: "/About/our-schools"},
                        ]}
                        isOpen={openAccordionIndex === 0}
                        onClick={() => handleAccordionClick(0)}
                    />
                    <AccordionItem
                        title="Services"
                        items={[
                            { label: "Our Services", url: "/Services/Health-Services" },
                            { label: "Research and Ethics", url: "/Services/Research-Ethics" },
                            { label: "Diseases & Symptoms", url: "/Services/Diseases-Symptoms" },
                            { label: "Tests & Imaging", url: "/Services/Tests-Procedures" },
                        ]}
                        isOpen={openAccordionIndex === 1}
                        onClick={() => handleAccordionClick(1)}
                    />
                    <li><a href="https://www.theoauthcblog.online/" target="_blank" rel="noreferrer">Blog</a></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/contact">Sign In/Sign Up</Link></li>
                </ul>
                <div className="sidebar-buttons">
                    <Link href="/Home#bookAppointmentSection">
                        <button type="button" className="book-appointment-button">
                            Book an Appointment
                        </button>
                    </Link>

                    <button type="button" className="student-portal-button">
                        <Link to="/Student-Portal">Log in to Student Portal</Link>
                    </button>

                </div>
            </div>
        </div>
    );
}

export default SidebarMobile;