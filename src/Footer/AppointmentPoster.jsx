import React from "react";
import { Link } from "react-router-dom";

const AppointmentPoster = () => {
    return (
        <div className="appointment-poster">
            <div className="appointment-poster-pic"></div>
            <div className="appointment-poster-caption">
                <h5>Looking for professional & trusted medical healthcare?</h5>
                <h6>Don't Hesitate to Contact Us.</h6>
                <a href="#bookAppointmentSection">
                    <button type="button" className="make-appointment">
                        <Link href="/Home#bookAppointmentSection">
                            Make Appointment
                        </Link>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default AppointmentPoster;
