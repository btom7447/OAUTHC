import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function MobileHeader() {
    useEffect(() => {
        function toggleSidebar() {
            const sidebarMobile = document.getElementById('sidebarMobile');
            sidebarMobile.classList.toggle('open');
        
            // Toggle hamburger animation
            const bars = document.querySelectorAll('.hamburgerMenu .bar');
            bars.forEach(bar => {
                bar.classList.toggle('change');
            });
        }
        
        // Add event listener to the hamburger menu
        const hamburgerMenu = document.querySelector('.hamburgerMenu');
        hamburgerMenu.addEventListener('click', toggleSidebar);

        // Clean up event listener when the component is unmounted
        return () => {
            hamburgerMenu.removeEventListener('click', toggleSidebar);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div className="mobile-header">
            <Link to="/Home">
                <img src="https://btom7447.github.io/OAUTH/images/oauthc-logo.png" alt="OAUTHC Logo" />
            </Link>            
            <h4>
                Obafemi Awolowo University <br />
                Teaching Hospitals Complex
            </h4>
            <div className="hamburgerMenu"> {/* Add a class to the hamburger menu */}
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
       </div>
    );
}

export default MobileHeader;