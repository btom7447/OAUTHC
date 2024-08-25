import React from "react";
import { Link } from "react-router-dom";
import PortalForm from "../Components/PortalForm";

const StudentPortal = () => {
    return(
        <div className="student-portal-overlay">
            <div className="student-portal">
                <div className="student-portal-text">
                    <div className="portal-header">
                        <Link to="/Home">
                            <img src="https://btom7447.github.io/OAUTH/images/oauthc-logo.png" alt="OAUTHC Logo" />
                        </Link>
                        <h4>
                            Obafemi Awolowo University <br />
                            Teaching Hospitals Complex
                        </h4>
                    </div>
                    <div className="portal-content">
                        <div className="coming-soon">
                            coming soon
                        </div>
                        <h1>
                            Excellence in Medical Education and care 
                        </h1>
                        <p>
                            We're putting the finishing touches on our website and getting ready to launch. Sign up for updates and be the first to know when we go live.
                        </p>
                        <PortalForm />
                        <p>
                            Sign up for updates, be the first to know when we launch. No spam, just important information and exclusive offers.
                        </p>
                    </div>
                </div>
                <div className="student-portal-poster">

                </div>
            </div>
        </div>
        
    )
};

export default StudentPortal;