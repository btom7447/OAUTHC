import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from "../Components/AuthContext";

const AdminSidebar = () => {
    const [openAccordion, setOpenAccordion] = useState(null);
    const [isSuperAdmin, setIsSuperAdmin] = useState(false);

    useEffect(() => {
        // Retrieve and parse userData from localStorage
        const userData = JSON.parse(localStorage.getItem('userData'));
        
        // Check if the user is a 'super-admin'
        if (userData && userData.role === 'super-admin') {
          setIsSuperAdmin(true);
        }
    }, []);

    const handleAccordionClick = (accordionName) => {
        setOpenAccordion(openAccordion === accordionName ? null : accordionName);
    };

    const { logout } = useAuth();

    return (
        <div className="admin-sidebar">
            <ul>
                <li>
                    <NavLink
                        to="/admin/dashboard"
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z" fill="#005046"/>
                            <path d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z" fill="#005046"/>
                            <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" fill="#005046"/>
                            <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" fill="#005046"/>
                        </svg>
                        Dashboard
                    </NavLink>
                </li>
                <li className="accordion">
                <div onClick={() => handleAccordionClick('roleManage')} className="accordion-header">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 3C12.7417 3 13.4667 3.21993 14.0834 3.63199C14.7001 4.04404 15.1807 4.62971 15.4645 5.31494C15.7484 6.00016 15.8226 6.75416 15.6779 7.48159C15.5333 8.20902 15.1761 8.8772 14.6517 9.40165C14.1272 9.9261 13.459 10.2833 12.7316 10.4279C12.0042 10.5726 11.2502 10.4984 10.5649 10.2145C9.87971 9.93072 9.29404 9.45007 8.88199 8.83339C8.46993 8.2167 8.25 7.49168 8.25 6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3ZM12 1.5C10.9616 1.5 9.94661 1.80791 9.08326 2.38478C8.2199 2.96166 7.54699 3.7816 7.14963 4.74091C6.75227 5.70022 6.64831 6.75582 6.85088 7.77422C7.05345 8.79262 7.55346 9.72808 8.28769 10.4623C9.02192 11.1965 9.95738 11.6966 10.9758 11.8991C11.9942 12.1017 13.0498 11.9977 14.0091 11.6004C14.9684 11.203 15.7883 10.5301 16.3652 9.66674C16.9421 8.80339 17.25 7.78835 17.25 6.75C17.25 5.35761 16.6969 4.02226 15.7123 3.03769C14.7277 2.05312 13.3924 1.5 12 1.5ZM19.5 22.5H18V18.75C18 18.2575 17.903 17.7699 17.7145 17.3149C17.5261 16.86 17.2499 16.4466 16.9017 16.0983C16.5534 15.7501 16.14 15.4739 15.6851 15.2855C15.2301 15.097 14.7425 15 14.25 15H9.75C8.75544 15 7.80161 15.3951 7.09835 16.0983C6.39509 16.8016 6 17.7554 6 18.75V22.5H4.5V18.75C4.5 17.3576 5.05312 16.0223 6.03769 15.0377C7.02226 14.0531 8.35761 13.5 9.75 13.5H14.25C15.6424 13.5 16.9777 14.0531 17.9623 15.0377C18.9469 16.0223 19.5 17.3576 19.5 18.75V22.5Z" fill="white"/>
                    </svg>
                    <span>Role Manage</span>
                    </div>
                    <FontAwesomeIcon icon={openAccordion === 'roleManage' ? faChevronDown : faChevronRight} />
                </div>
                {openAccordion === 'roleManage' && (
                    <ul className="accordion-content">
                    <li>
                        <NavLink
                        to="/admin/all-admins"
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                        All Admin
                        </NavLink>
                    </li>
                    {isSuperAdmin && (
                        <li>
                        <NavLink
                            to="/admin/add-admin"
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                            Add New Admin
                        </NavLink>
                        </li>
                    )}
                    </ul>
                )}
                </li>
                <li className="accordion">
                    <div onClick={() => handleAccordionClick('sections')} className="accordion-header">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M16 22.75H8C4.98 22.75 3.25 21.02 3.25 18V8.25C3.25 5.1 4.85 3.5 8 3.5C8.41 3.5 8.75 3.84 8.75 4.25C8.75 4.65 8.91 5.03 9.19 5.31C9.47 5.59 9.85 5.75 10.25 5.75H13.75C14.58 5.75 15.25 5.08 15.25 4.25C15.25 3.84 15.59 3.5 16 3.5C19.15 3.5 20.75 5.1 20.75 8.25V18C20.75 21.02 19.02 22.75 16 22.75ZM7.34998 5.02C5.76998 5.15 4.75 5.86 4.75 8.25V18C4.75 20.22 5.78 21.25 8 21.25H16C18.22 21.25 19.25 20.22 19.25 18V8.25C19.25 5.86 18.23 5.16 16.65 5.02C16.31 6.3 15.14 7.25 13.75 7.25H10.25C9.45 7.25 8.70001 6.94 8.13 6.37C7.75 5.99 7.48998 5.53 7.34998 5.02Z" fill="#005046"/>
                                <path d="M13.75 7.25H10.25C9.45 7.25 8.7 6.94 8.13 6.37C7.56 5.79999 7.25 5.05 7.25 4.25C7.25 2.6 8.6 1.25 10.25 1.25H13.75C14.55 1.25 15.3 1.56 15.87 2.13C16.44 2.7 16.75 3.45 16.75 4.25C16.75 5.9 15.4 7.25 13.75 7.25ZM10.25 2.75C9.42 2.75 8.75 3.42 8.75 4.25C8.75 4.65 8.91 5.03 9.19 5.31C9.47 5.59 9.85 5.75 10.25 5.75H13.75C14.58 5.75 15.25 5.08 15.25 4.25C15.25 3.85 15.09 3.47 14.81 3.19C14.53 2.91 14.15 2.75 13.75 2.75H10.25Z" fill="#005046"/>
                                <path d="M12 13.75H8C7.59 13.75 7.25 13.41 7.25 13C7.25 12.59 7.59 12.25 8 12.25H12C12.41 12.25 12.75 12.59 12.75 13C12.75 13.41 12.41 13.75 12 13.75Z" fill="#005046"/>
                                <path d="M16 17.75H8C7.59 17.75 7.25 17.41 7.25 17C7.25 16.59 7.59 16.25 8 16.25H16C16.41 16.25 16.75 16.59 16.75 17C16.75 17.41 16.41 17.75 16 17.75Z" fill="#005046"/>
                            </svg>
                            <span>Sections</span>
                        </div>
                        <FontAwesomeIcon icon={openAccordion === 'sections' ? faChevronDown : faChevronRight} />
                    </div>
                    {openAccordion === 'sections' && (
                        <ul className="accordion-content">
                            <li>
                                <NavLink
                                    to="/admin/announcements"
                                    className={({ isActive }) => (isActive ? "active-link" : "")}
                                >
                                    Announcements
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admin/history-oauthc"
                                    className={({ isActive }) => (isActive ? "active-link" : "")}
                                >
                                    History of oauthc
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admin/learn-more"
                                    className={({ isActive }) => (isActive ? "active-link" : "")}
                                >
                                    Learn More
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admin/our-culture"
                                    className={({ isActive }) => (isActive ? "active-link" : "")}
                                >
                                    Our Culture
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admin/our-values"
                                    className={({ isActive }) => (isActive ? "active-link" : "")}
                                >
                                    Our Values
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admin/testimonials"
                                    className={({ isActive }) => (isActive ? "active-link" : "")}
                                >
                                    Testimonials
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admin/welcome-section"
                                    className={({ isActive }) => (isActive ? "active-link" : "")}
                                >
                                    Welcome Section
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admin/who-we-are"
                                    className={({ isActive }) => (isActive ? "active-link" : "")}
                                >
                                    Who We Are
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admin/vision-mission-goal"
                                    className={({ isActive }) => (isActive ? "active-link" : "")}
                                >
                                    Vision Mission Goal
                                </NavLink>
                            </li>
                            
                        </ul>
                    )}
                </li>
                <li className="accordion">
                    <div onClick={() => handleAccordionClick('slides')} className="accordion-header">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M16.5 19.5H12V15H15V13.5H12V12H16.5V16.5H13.5V18H16.5V19.5Z" fill="white"/>
                                <path d="M19.275 6.97499L14.025 1.72499C13.9593 1.65139 13.8782 1.5931 13.7875 1.55423C13.6968 1.51535 13.5986 1.49684 13.5 1.49999H6C5.60254 1.50118 5.2217 1.6596 4.94065 1.94065C4.6596 2.22169 4.50119 2.60253 4.5 2.99999V21C4.50119 21.3975 4.6596 21.7783 4.94065 22.0593C5.2217 22.3404 5.60254 22.4988 6 22.5H18C18.3975 22.4988 18.7783 22.3404 19.0593 22.0593C19.3404 21.7783 19.4988 21.3975 19.5 21V7.49999C19.5032 7.40136 19.4846 7.30323 19.4458 7.21252C19.4069 7.12181 19.3486 7.04073 19.275 6.97499ZM13.5 3.29999L17.7 7.49999H13.5V3.29999ZM18 21H6V2.99999H12V7.49999C12.0012 7.89745 12.1596 8.2783 12.4407 8.55934C12.7217 8.84039 13.1025 8.99881 13.5 8.99999H18V21Z" fill="white"/>
                            </svg>
                                <span>slides</span>
                            </div>
                        <FontAwesomeIcon icon={openAccordion === 'slides' ? faChevronDown : faChevronRight} />
                    </div>
                    {openAccordion === 'slides' && (
                        <ul className="accordion-content">
                            <li>
                                <NavLink
                                    to="/admin/home-carousel"
                                    className={({ isActive }) => (isActive ? "active-link" : "")}
                                >
                                    Home Carousel
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admin/"
                                    className={({ isActive }) => (isActive ? "active-link" : "")}
                                >
                                    Research & Ethics
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="accordion">
                    <div onClick={() => handleAccordionClick('pages')} className="accordion-header">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M16.5 19.5H12V15H15V13.5H12V12H16.5V16.5H13.5V18H16.5V19.5Z" fill="white"/>
                                <path d="M19.275 6.97499L14.025 1.72499C13.9593 1.65139 13.8782 1.5931 13.7875 1.55423C13.6968 1.51535 13.5986 1.49684 13.5 1.49999H6C5.60254 1.50118 5.2217 1.6596 4.94065 1.94065C4.6596 2.22169 4.50119 2.60253 4.5 2.99999V21C4.50119 21.3975 4.6596 21.7783 4.94065 22.0593C5.2217 22.3404 5.60254 22.4988 6 22.5H18C18.3975 22.4988 18.7783 22.3404 19.0593 22.0593C19.3404 21.7783 19.4988 21.3975 19.5 21V7.49999C19.5032 7.40136 19.4846 7.30323 19.4458 7.21252C19.4069 7.12181 19.3486 7.04073 19.275 6.97499ZM13.5 3.29999L17.7 7.49999H13.5V3.29999ZM18 21H6V2.99999H12V7.49999C12.0012 7.89745 12.1596 8.2783 12.4407 8.55934C12.7217 8.84039 13.1025 8.99881 13.5 8.99999H18V21Z" fill="white"/>
                            </svg>
                                <span>Pages</span>
                            </div>
                        <FontAwesomeIcon icon={openAccordion === 'pages' ? faChevronDown : faChevronRight} />
                    </div>
                    {openAccordion === 'pages' && (
                        <ul className="accordion-content">
                            <li>
                                <NavLink
                                    to="/admin/departments"
                                    className={({ isActive }) => (isActive ? "active-link" : "")}
                                >
                                    Departments
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admin/diseases"
                                    className={({ isActive }) => (isActive ? "active-link" : "")}
                                >
                                    Diseases
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admin/doctors"
                                    className={({ isActive }) => (isActive ? "active-link" : "")}
                                >
                                    Doctors
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admin/health-services"
                                    className={({ isActive }) => (isActive ? "active-link" : "")}
                                >
                                    Health Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admin/schools"
                                    className={({ isActive }) => (isActive ? "active-link" : "")}
                                >
                                    Schools
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admin/tests"
                                    className={({ isActive }) => (isActive ? "active-link" : "")}
                                >
                                    Tests & Imaging
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admin/units"
                                    className={({ isActive }) => (isActive ? "active-link" : "")}
                                >
                                    Units
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <NavLink
                        to="/admin/appointments"
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11.25 8.25H12.75V15H11.25V8.25ZM9.75 1.5H14.25V3H9.75V1.5Z" fill="white"/>
                            <path d="M21.0001 6.75L19.9351 5.6925L18.2476 7.38C16.8662 5.78477 14.9234 4.78308 12.8227 4.58303C10.722 4.38299 8.62503 4.99998 6.96742 6.30581C5.30981 7.61164 4.21903 9.50591 3.92172 11.595C3.62441 13.6842 4.14342 15.8075 5.37092 17.524C6.59843 19.2404 8.44004 20.4179 10.5131 20.8118C12.5862 21.2058 14.7314 20.7859 16.5029 19.6393C18.2744 18.4928 19.5361 16.7078 20.0259 14.6552C20.5156 12.6027 20.1957 10.4403 19.1326 8.6175L21.0001 6.75ZM12.0001 19.5C10.6651 19.5 9.36001 19.1041 8.24998 18.3624C7.13995 17.6207 6.27478 16.5665 5.76389 15.3331C5.253 14.0997 5.11933 12.7425 5.37978 11.4331C5.64023 10.1238 6.2831 8.92103 7.22711 7.97703C8.17111 7.03303 9.37385 6.39015 10.6832 6.1297C11.9926 5.86925 13.3498 6.00292 14.5832 6.51381C15.8166 7.02471 16.8708 7.88987 17.6125 8.9999C18.3542 10.1099 18.7501 11.415 18.7501 12.75C18.7501 14.5402 18.0389 16.2571 16.773 17.523C15.5072 18.7888 13.7903 19.5 12.0001 19.5Z" fill="white"/>
                        </svg>  
                        Appointments
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin/patients"
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M17.9998 7.91002C17.9698 7.91002 17.9498 7.91002 17.9198 7.91002H17.8698C15.9798 7.85002 14.5698 6.39001 14.5698 4.59001C14.5698 2.75001 16.0698 1.26001 17.8998 1.26001C19.7298 1.26001 21.2298 2.76001 21.2298 4.59001C21.2198 6.40001 19.8098 7.86001 18.0098 7.92001C18.0098 7.91001 18.0098 7.91002 17.9998 7.91002ZM17.8998 2.75002C16.8898 2.75002 16.0698 3.57002 16.0698 4.58002C16.0698 5.57002 16.8398 6.37002 17.8298 6.41002C17.8398 6.40002 17.9198 6.40002 18.0098 6.41002C18.9798 6.36002 19.7298 5.56002 19.7398 4.58002C19.7398 3.57002 18.9198 2.75002 17.8998 2.75002Z" fill="white"/>
                            <path d="M18.01 15.28C17.62 15.28 17.23 15.25 16.84 15.18C16.43 15.11 16.16 14.72 16.23 14.31C16.3 13.9 16.69 13.63 17.1 13.7C18.33 13.91 19.63 13.68 20.5 13.1C20.97 12.79 21.22 12.4 21.22 12.01C21.22 11.62 20.96 11.24 20.5 10.93C19.63 10.35 18.31 10.12 17.07 10.34C16.66 10.42 16.27 10.14 16.2 9.73002C16.13 9.32002 16.4 8.93003 16.81 8.86003C18.44 8.57003 20.13 8.88002 21.33 9.68002C22.21 10.27 22.72 11.11 22.72 12.01C22.72 12.9 22.22 13.75 21.33 14.35C20.42 14.95 19.24 15.28 18.01 15.28Z" fill="white"/>
                            <path d="M5.96998 7.91C5.95998 7.91 5.94998 7.91 5.94998 7.91C4.14998 7.85 2.73998 6.39 2.72998 4.59C2.72998 2.75 4.22998 1.25 6.05998 1.25C7.88998 1.25 9.38998 2.75 9.38998 4.58C9.38998 6.39 7.97998 7.85 6.17998 7.91L5.96998 7.16L6.03998 7.91C6.01998 7.91 5.98998 7.91 5.96998 7.91ZM6.06998 6.41C6.12998 6.41 6.17998 6.41 6.23998 6.42C7.12998 6.38 7.90998 5.58 7.90998 4.59C7.90998 3.58 7.08998 2.75999 6.07998 2.75999C5.06998 2.75999 4.24998 3.58 4.24998 4.59C4.24998 5.57 5.00998 6.36 5.97998 6.42C5.98998 6.41 6.02998 6.41 6.06998 6.41Z" fill="white"/>
                            <path d="M5.96 15.28C4.73 15.28 3.55 14.95 2.64 14.35C1.76 13.76 1.25 12.91 1.25 12.01C1.25 11.12 1.76 10.27 2.64 9.68002C3.84 8.88002 5.53 8.57003 7.16 8.86003C7.57 8.93003 7.84 9.32002 7.77 9.73002C7.7 10.14 7.31 10.42 6.9 10.34C5.66 10.12 4.35 10.35 3.47 10.93C3 11.24 2.75 11.62 2.75 12.01C2.75 12.4 3.01 12.79 3.47 13.1C4.34 13.68 5.64 13.91 6.87 13.7C7.28 13.63 7.67 13.91 7.74 14.31C7.81 14.72 7.54 15.11 7.13 15.18C6.74 15.25 6.35 15.28 5.96 15.28Z" fill="white"/>
                            <path d="M11.9998 15.38C11.9698 15.38 11.9498 15.38 11.9198 15.38H11.8698C9.97982 15.32 8.56982 13.86 8.56982 12.06C8.56982 10.22 10.0698 8.72998 11.8998 8.72998C13.7298 8.72998 15.2298 10.23 15.2298 12.06C15.2198 13.87 13.8098 15.33 12.0098 15.39C12.0098 15.38 12.0098 15.38 11.9998 15.38ZM11.8998 10.22C10.8898 10.22 10.0698 11.04 10.0698 12.05C10.0698 13.04 10.8398 13.84 11.8298 13.88C11.8398 13.87 11.9198 13.87 12.0098 13.88C12.9798 13.83 13.7298 13.03 13.7398 12.05C13.7398 11.05 12.9198 10.22 11.8998 10.22Z" fill="white"/>
                            <path d="M11.9998 22.76C10.7998 22.76 9.59978 22.45 8.66978 21.82C7.78978 21.23 7.27979 20.39 7.27979 19.49C7.27979 18.6 7.77978 17.74 8.66978 17.15C10.5398 15.91 13.4698 15.91 15.3298 17.15C16.2098 17.74 16.7198 18.58 16.7198 19.48C16.7198 20.37 16.2198 21.23 15.3298 21.82C14.3998 22.44 13.1998 22.76 11.9998 22.76ZM9.49979 18.41C9.02979 18.72 8.77979 19.11 8.77979 19.5C8.77979 19.89 9.03979 20.27 9.49979 20.58C10.8498 21.49 13.1398 21.49 14.4898 20.58C14.9598 20.27 15.2098 19.88 15.2098 19.49C15.2098 19.1 14.9498 18.72 14.4898 18.41C13.1498 17.5 10.8598 17.51 9.49979 18.41Z" fill="white"/>
                        </svg>
                        Patient
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin/change-password"
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11.25 8.25H12.75V15H11.25V8.25ZM9.75 1.5H14.25V3H9.75V1.5Z" fill="white"/>
                            <path d="M21.0001 6.75L19.9351 5.6925L18.2476 7.38C16.8662 5.78477 14.9234 4.78308 12.8227 4.58303C10.722 4.38299 8.62503 4.99998 6.96742 6.30581C5.30981 7.61164 4.21903 9.50591 3.92172 11.595C3.62441 13.6842 4.14342 15.8075 5.37092 17.524C6.59843 19.2404 8.44004 20.4179 10.5131 20.8118C12.5862 21.2058 14.7314 20.7859 16.5029 19.6393C18.2744 18.4928 19.5361 16.7078 20.0259 14.6552C20.5156 12.6027 20.1957 10.4403 19.1326 8.6175L21.0001 6.75ZM12.0001 19.5C10.6651 19.5 9.36001 19.1041 8.24998 18.3624C7.13995 17.6207 6.27478 16.5665 5.76389 15.3331C5.253 14.0997 5.11933 12.7425 5.37978 11.4331C5.64023 10.1238 6.2831 8.92103 7.22711 7.97703C8.17111 7.03303 9.37385 6.39015 10.6832 6.1297C11.9926 5.86925 13.3498 6.00292 14.5832 6.51381C15.8166 7.02471 16.8708 7.88987 17.6125 8.9999C18.3542 10.1099 18.7501 11.415 18.7501 12.75C18.7501 14.5402 18.0389 16.2571 16.773 17.523C15.5072 18.7888 13.7903 19.5 12.0001 19.5Z" fill="white"/>
                        </svg>  
                        Password
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={logout}
                        className=""
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15.24 22.27H15.11C10.67 22.27 8.53002 20.52 8.16002 16.6C8.12002 16.19 8.42002 15.82 8.84002 15.78C9.25002 15.74 9.62002 16.05 9.66002 16.46C9.95002 19.6 11.43 20.77 15.12 20.77H15.25C19.32 20.77 20.76 19.33 20.76 15.26V8.74001C20.76 4.67001 19.32 3.23001 15.25 3.23001H15.12C11.41 3.23001 9.93002 4.42001 9.66002 7.62001C9.61002 8.03001 9.27002 8.34001 8.84002 8.30001C8.42002 8.27001 8.12001 7.90001 8.15001 7.49001C8.49001 3.51001 10.64 1.73001 15.11 1.73001H15.24C20.15 1.73001 22.25 3.83001 22.25 8.74001V15.26C22.25 20.17 20.15 22.27 15.24 22.27Z" fill="white"/>
                            <path d="M14.88 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H14.88C15.29 11.25 15.63 11.59 15.63 12C15.63 12.41 15.3 12.75 14.88 12.75Z" fill="white"/>
                            <path d="M12.6501 16.1C12.4601 16.1 12.2701 16.03 12.1201 15.88C11.8301 15.59 11.8301 15.11 12.1201 14.82L14.9401 12L12.1201 9.18C11.8301 8.89 11.8301 8.41 12.1201 8.12C12.4101 7.83 12.8901 7.83 13.1801 8.12L16.5301 11.47C16.8201 11.76 16.8201 12.24 16.5301 12.53L13.1801 15.88C13.0301 16.03 12.8401 16.1 12.6501 16.1Z" fill="white"/>
                        </svg>
                        Logout
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default AdminSidebar;
