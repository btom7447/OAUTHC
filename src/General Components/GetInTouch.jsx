import React from "react";

const GetInTouch = () => {
    return(
        <div className="get-in-touch">
            <div className="get-in-touch-caption">
                <h5>Get In Touch</h5>
                <h6>Contact</h6>
            </div>
            <div className="contact-container">
                {/* EMERGENCY */}
                <div className="contact-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="39" viewBox="0 0 41 39" fill="none">
                        <path d="M24.1459 33.126C24.7274 32.7902 25.1502 32.2344 25.3211 31.5808C25.492 30.9272 25.3972 30.2294 25.0574 29.6408L23.7761 27.4216C23.4363 26.8331 22.8794 26.402 22.2279 26.2232C21.5764 26.0445 20.8837 26.1327 20.3021 26.4684C15.9167 29.0003 13.3542 24.562 12.0729 22.3428C10.7917 20.1236 8.22919 15.6852 12.6146 13.1533C13.1962 12.8175 13.6189 12.2617 13.7899 11.6081C13.9608 10.9545 13.8659 10.2567 13.5261 9.66811L12.2449 7.44892C11.905 6.86035 11.3481 6.42927 10.6966 6.25051C10.0451 6.07174 9.35243 6.15994 8.77089 6.4957C3.28908 9.66062 1.28125 13.7788 7.6875 24.8747C14.0938 35.9707 18.6641 36.2909 24.1459 33.126Z" stroke="#005046" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M35.8156 23.9621C36.9804 19.4989 36.3314 14.7346 34.0113 10.716C31.6911 6.69743 27.8896 3.75324 23.442 2.53032M29.1022 22.12C29.4492 20.7945 29.5325 19.4104 29.3472 18.0469C29.162 16.6835 28.712 15.3672 28.0227 14.1735C27.3335 12.9798 26.4187 11.9319 25.3305 11.0897C24.2423 10.2476 23.002 9.62766 21.6806 9.26539M22.4248 20.2645C22.6577 19.3714 22.5278 18.4181 22.0635 17.6141C21.5993 16.81 20.8387 16.2208 19.9488 15.9759" stroke="#005046" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h5>Emergency Numbers</h5>
                    <p>Adult +234 815 209 2813</p>
                    <p>Children +234 815 209 2908</p>
                    <p>GOPD +234 805 500 4262</p>
                </div>
                {/* LOCATION */}
                <div className="contact-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="39" viewBox="0 0 32 39" fill="none">
                        <path d="M1 15.4C1 29.8 16 37 16 37C16 37 31 29.8 31 15.4C31 7.45 24.2875 1 16 1C7.7125 1 1 7.45 1 15.4Z" stroke="#005046" strokeWidth="2"/>
                        <path d="M16.0001 20.32C18.8499 20.32 21.1601 18.0098 21.1601 15.16C21.1601 12.3102 18.8499 10 16.0001 10C13.1503 10 10.8401 12.3102 10.8401 15.16C10.8401 18.0098 13.1503 20.32 16.0001 20.32Z" stroke="#005046" strokeWidth="2"/>
                    </svg>
                    <h5>Location</h5>
                    <p>Ife-Ilesa Road, Ife</p>
                    <p>Osun State, Nigeria</p>
                </div>
                {/* EMAIL */}
                <div className="contact-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="32" viewBox="0 0 39 32" fill="none">
                        <path d="M1.7998 1H37.1998V30.5H1.7998V1Z" stroke="#005046" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M37.1998 6.8999L19.4998 18.6999L1.7998 6.8999" stroke="#005046" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h5>Email</h5>
                    <p>info@oauthc.gov.ng</p>
                </div>
                {/* WORKING HOURS */}
                <div className="contact-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <path d="M16.6777 31C24.962 31 31.6777 24.2843 31.6777 16C31.6777 7.71573 24.962 1 16.6777 1C8.39346 1 1.67773 7.71573 1.67773 16C1.67773 24.2843 8.39346 31 16.6777 31Z" stroke="#005046" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M21.6777 23.5L16.6777 16V6" stroke="#005046" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <h5>Working Hours</h5>
                    <p>24 Hours</p>
                </div>
            </div>
        </div>
    )
};

export default GetInTouch;