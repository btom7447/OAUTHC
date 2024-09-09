import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
    return (
        <>
            <div className="hero-carousel-container">
                {/* HERO CAROUSEL */}
                <div className="hero-carousel">
                    <Splide 
                        options={{
                            type: 'loop',
                            autoplay: true,
                            interval: 4000,
                            pauseOnHover: true,
                            arrows: false,
                            pagination: false,
                        }}
                    >
                        <SplideSlide>
                            <div className="hero-carousel-one">
                                <Link to="/services/health-services">
                                    <button type="button">
                                        Our Services
                                    </button>
                                </Link>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="hero-carousel-two">
                                <Link to="/about/about-oauthc">
                                    <button type="button">
                                        About Us
                                    </button>
                                </Link>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
                {/* HERO CAROUSEL CAPTION */}
                <div className="hero-carousel-caption">
                    <h5>Caring for Life</h5>
                    <h1>
                        Leading the Way <br /> 
                        in Medical Excellence
                    </h1>
                </div>
            </div>
            
            {/* NESTED LINK BUTTONS */}
            <div className="carousel-nested-buttons">
                {/* BOOK AN APPOINTMENT */}
                <a href="#bookAppointmentSection">
                    <button type="button">
                        Book an Appointment
                        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
                        <path d="M50.1272 1.79504H3.2522C2.38925 1.79504 1.6897 2.4946 1.6897 3.35754V50.2325C1.6897 51.0955 2.38925 51.795 3.2522 51.795H50.1272C50.9901 51.795 51.6897 51.0955 51.6897 50.2325V3.35754C51.6897 2.4946 50.9901 1.79504 50.1272 1.79504Z" stroke="white" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                        <path d="M16.6897 16.795H6.6897V26.795H16.6897V16.795Z" stroke="white" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                        <path d="M26.6895 16.795H16.6895V26.795H26.6895V16.795Z" stroke="white" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                        <path d="M36.6897 16.795H26.6897V26.795H36.6897V16.795Z" stroke="white" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                        <path d="M46.6899 16.795H36.6899V26.795H46.6899V16.795Z" stroke="white" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                        <path d="M46.6899 26.795H36.6899V36.795H46.6899V26.795Z" stroke="white" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                        <path d="M36.6897 26.795H26.6897V36.795H36.6897V26.795Z" stroke="white" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                        <path d="M26.6895 26.795H16.6895V36.795H26.6895V26.795Z" stroke="white" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                        <path d="M16.6897 26.795H6.6897V36.795H16.6897V26.795Z" stroke="white" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                        <path d="M16.6897 36.795H6.6897V46.795H16.6897V36.795Z" stroke="white" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                        <path d="M26.6895 36.795H16.6895V46.795H26.6895V36.795Z" stroke="white" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                        <path d="M36.6897 36.795H26.6897V46.795H36.6897V36.795Z" stroke="white" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.6899 1.79504H16.6899V4.29504C16.6899 5.67576 15.5678 6.79504 14.1899 6.79504C12.8092 6.79504 11.6899 5.67295 11.6899 4.29504V1.79504Z" stroke="white" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M36.6899 1.79504H41.6899V4.29504C41.6899 5.67576 40.5678 6.79504 39.1899 6.79504C37.8092 6.79504 36.6899 5.67295 36.6899 4.29504V1.79504Z" stroke="white" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                        </svg>
                    </button>
                </a>
                {/* DISEASES AND SYMPTOMS */}
                <Link to="/services/diseases-symptoms">
                    <button type="button">
                        Diseases and Symptoms
                        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="45" viewBox="0 0 53 45" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.3076 15.269C17.9431 15.4935 17.2564 16.9022 17.5671 18.1383C18.0291 19.9765 19.6724 20.6939 19.6724 20.6939C19.6724 20.6939 22.2432 24.0883 22.2432 26.0624C22.2432 28.0364 22.2432 28.8034 21.5542 30.4502C20.8653 32.0971 7.3417 34.0712 6.76758 43.78H26.4512L46.3509 43.7821C45.7768 34.0734 32.2532 32.0992 31.5642 30.4523C30.8753 28.8055 30.8753 28.0385 30.8753 26.0645C30.8753 24.0905 33.4461 20.696 33.4461 20.696C33.4461 20.696 35.0894 19.9786 35.5514 18.1404C35.8621 16.9044 35.1754 15.4956 34.8109 15.2712C35.7852 12.2983 37.7311 2.04961 26.6673 1.68022C26.6181 1.67324 26.5692 1.67449 26.5205 1.67592C15.3874 2.04749 17.3333 12.2962 18.3076 15.269Z" stroke="white" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.55933 37.3113C4.80723 35.034 8.85674 34.1503 9.18672 33.3615C9.73211 32.0578 9.73211 31.4507 9.73211 29.888C9.73211 28.3253 7.69697 25.6382 7.69697 25.6382C7.69697 25.6382 6.39609 25.0702 6.03037 23.6151C5.78445 22.6366 6.32802 21.5214 6.61656 21.3437C5.84529 18.9903 4.30489 10.8771 13.1182 10.583C13.1567 10.5819 13.1954 10.5809 13.2344 10.5864C15.1351 10.6499 16.5508 11.0816 17.5945 11.743C17.7305 13.2121 18.0524 14.4902 18.3077 15.269C17.9432 15.4935 17.2565 16.9022 17.5672 18.1382C18.0292 19.9764 19.6724 20.6939 19.6724 20.6939C19.6724 20.6939 19.726 20.7646 19.8178 20.8917C19.7711 21.0598 19.7248 21.2119 19.6811 21.3454C19.9696 21.523 20.5132 22.6383 20.2673 23.6167C19.9015 25.0719 18.6007 25.6398 18.6007 25.6398C18.6007 25.6398 16.5655 28.327 16.5655 29.8897C16.5655 31.1925 16.5655 31.8311 16.8816 32.763C12.6808 34.5892 7.131 37.6356 6.76766 43.78H26.4513L46.351 43.7821C45.9809 37.5229 40.2286 34.4785 36.0031 32.664C36.2946 31.7714 36.2946 31.1325 36.2946 29.8642C36.2946 28.3015 34.2595 25.6144 34.2595 25.6144C34.2595 25.6144 32.9586 25.0465 32.5929 23.5913C32.347 22.6128 32.8905 21.4976 33.1791 21.3199C33.1609 21.2644 33.1422 21.2056 33.1233 21.1438C33.3199 20.8628 33.4462 20.696 33.4462 20.696C33.4462 20.696 35.0895 19.9786 35.5515 18.1404C35.8621 16.9043 35.1755 15.4956 34.811 15.2711C35.0764 14.4612 35.414 13.1114 35.5409 11.5683C36.5649 10.9909 37.915 10.6182 39.6807 10.5592C39.7192 10.5581 39.7579 10.5571 39.7969 10.5626C48.5552 10.8551 47.0148 18.9682 46.2436 21.3216C46.5321 21.4993 47.0757 22.6145 46.8298 23.593C46.464 25.0481 45.1632 25.6161 45.1632 25.6161C45.1632 25.6161 43.128 28.3032 43.128 29.8659C43.128 31.4286 43.128 32.0358 43.6734 33.3395C44.0122 34.1493 48.2719 35.0592 51.5593 37.4748V43.8913L39.6258 43.89H28.8149C28.8154 43.8985 28.816 43.907 28.8165 43.9154L13.0633 43.9138H1.55933V37.3113Z" stroke="white" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                        </svg>
                    </button>
                </Link>
                {/* STUDENT PORTAL */}
                <Link to="/student-portal">
                    <button type="button">
                        Click here to log on to student portal
                    </button>
                </Link>
            </div>
        </>
    );
};

export default HeroCarousel;
