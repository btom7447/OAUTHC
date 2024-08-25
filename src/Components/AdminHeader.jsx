import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";

const AdminHeader = () => {
    const { name, role, image } = useUser();

    return (
        <div className="admin-header">
            <div className="header-logo">
                <Link to="/Home">
                    <img src="https://btom7447.github.io/OAUTH/images/oauthc-logo.png" alt="OAUTHC Logo" />
                </Link>
                <h3>
                    Obafemi Awolowo University <br />
                    Teaching Hospitals Complex
                </h3>
            </div>
            <div className="header-profile">
                <div className="notification-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" fill="white" stroke="#E8E8E8"/>
                        <path d="M20.02 28.53C17.69 28.53 15.36 28.16 13.15 27.42C12.31 27.13 11.67 26.54 11.39 25.77C11.1 25 11.2 24.15 11.66 23.39L12.81 21.48C13.05 21.08 13.27 20.28 13.27 19.81V16.92C13.27 13.2 16.3 10.17 20.02 10.17C23.74 10.17 26.77 13.2 26.77 16.92V19.81C26.77 20.27 26.99 21.08 27.23 21.49L28.37 23.39C28.8 24.11 28.88 24.98 28.59 25.77C28.3 26.56 27.67 27.16 26.88 27.42C24.68 28.16 22.35 28.53 20.02 28.53ZM20.02 11.67C17.13 11.67 14.77 14.02 14.77 16.92V19.81C14.77 20.54 14.47 21.62 14.1 22.25L12.95 24.16C12.73 24.53 12.67 24.92 12.8 25.25C12.92 25.59 13.22 25.85 13.63 25.99C17.81 27.39 22.24 27.39 26.42 25.99C26.78 25.87 27.06 25.6 27.19 25.24C27.32 24.88 27.29 24.49 27.09 24.16L25.94 22.25C25.56 21.6 25.27 20.53 25.27 19.8V16.92C25.27 14.02 22.92 11.67 20.02 11.67Z" fill="#A9A9A9"/>
                        <path d="M21.88 11.94C21.81 11.94 21.74 11.93 21.67 11.91C21.38 11.83 21.1 11.77 20.83 11.73C19.98 11.62 19.16 11.68 18.39 11.91C18.11 12 17.81 11.91 17.62 11.7C17.43 11.49 17.37 11.19 17.48 10.92C17.89 9.86999 18.89 9.17999 20.03 9.17999C21.17 9.17999 22.17 9.85999 22.58 10.92C22.68 11.19 22.63 11.49 22.44 11.7C22.29 11.86 22.08 11.94 21.88 11.94Z" fill="#A9A9A9"/>
                        <path d="M20.02 30.81C19.03 30.81 18.07 30.41 17.37 29.71C16.67 29.01 16.27 28.05 16.27 27.06H17.77C17.77 27.65 18.01 28.23 18.43 28.65C18.85 29.07 19.43 29.31 20.02 29.31C21.26 29.31 22.27 28.3 22.27 27.06H23.77C23.77 29.13 22.09 30.81 20.02 30.81Z" fill="#A9A9A9"/>
                    </svg>
                </div>
                <div className="admin-profile">
                    <img src={image} alt={name} />
                    <div>
                        <h6>{name}</h6>
                        <p>{role}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AdminHeader;
