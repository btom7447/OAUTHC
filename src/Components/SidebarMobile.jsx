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
                            { label: "About OAUTHC", url: "/about/about-oauthc" },
                            { label: "Departments & Centers", url: "/about/departments-centers" },
                            { label: "Find a Doctor", url: "/about/find-doctor" },
                            { label: "Locations", url: "/about/locations" },
                            { label: "Our Schools", url: "/about/our-schools"},
                        ]}
                        isOpen={openAccordionIndex === 0}
                        onClick={() => handleAccordionClick(0)}
                    />
                    <AccordionItem
                        title="Services"
                        items={[
                            { label: "Our Services", url: "/services/health-services" },
                            { label: "Research and Ethics", url: "/services/research-ethics" },
                            { label: "Diseases & Symptoms", url: "/services/diseases-symptoms" },
                            { label: "Tests & Imaging", url: "/services/tests-procedures" },
                        ]}
                        isOpen={openAccordionIndex === 1}
                        onClick={() => handleAccordionClick(1)}
                    />
                    <li><a href="https://www.theoauthcblog.online/" target="_blank" rel="noreferrer">Blog</a></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                <div className="sidebar-buttons">
                    <Link href="/home#bookAppointmentSection">
                        <button type="button" className="book-appointment-button">
                            Book an Appointment
                        </button>
                    </Link>

                    <button type="button" className="student-portal-button">
                        <Link to="/student-portal">Log in to Student Portal</Link>
                    </button>

                </div>
            </div>
        </div>
    );
}

export default SidebarMobile;