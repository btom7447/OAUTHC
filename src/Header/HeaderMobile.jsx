import React, { useEffect } from "react";

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
            <img src="/oauthc-logo 2.png" alt="OAUTHC Logo" />
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