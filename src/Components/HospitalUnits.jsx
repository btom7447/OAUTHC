import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HospitalUnits = ({ unitData }) => {
    return (
        <div className="oauthc-location-container">
            {unitData.map(({ unitPoster, unitName, unitLocation, exactLocation }, index) => (
                <div className="oauthc-location-log" key={index}>
                    <div className="hospital-units">
                        <div className="hospital-units-poster">
                            <img src={unitPoster} alt={unitName} />
                        </div>
                        <div className="hospital-units-caption">
                            <h4>{unitName}</h4>
                            <p>{unitLocation}</p>
                            {/* ADDRESS */}
                            <div className="unit-icons">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                    <mask id="mask0_1450_9586" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="31">
                                    <rect x="0.367188" y="0.912964" width="29.1741" height="29.1741" fill="#D9D9D9"/>
                                    </mask>
                                    <g mask="url(#mask0_1450_9586)">
                                    <path d="M14.9552 15.5005C15.6237 15.5005 16.1961 15.2624 16.6722 14.7863C17.1483 14.3102 17.3863 13.7379 17.3863 13.0693C17.3863 12.4007 17.1483 11.8284 16.6722 11.3523C16.1961 10.8762 15.6237 10.6381 14.9552 10.6381C14.2866 10.6381 13.7143 10.8762 13.2381 11.3523C12.762 11.8284 12.524 12.4007 12.524 13.0693C12.524 13.7379 12.762 14.3102 13.2381 14.7863C13.7143 15.2624 14.2866 15.5005 14.9552 15.5005ZM14.9552 24.435C17.4269 22.1659 19.2604 20.1045 20.4557 18.2507C21.651 16.397 22.2487 14.7509 22.2487 13.3124C22.2487 11.1041 21.5447 9.29592 20.1366 7.88786C18.7285 6.47981 17.0014 5.77578 14.9552 5.77578C12.9089 5.77578 11.1818 6.47981 9.77373 7.88786C8.36567 9.29592 7.66164 11.1041 7.66164 13.3124C7.66164 14.7509 8.25931 16.397 9.45463 18.2507C10.65 20.1045 12.4835 22.1659 14.9552 24.435ZM14.9552 27.6563C11.6933 24.8808 9.2571 22.3027 7.64645 19.9222C6.0358 17.5416 5.23047 15.3384 5.23047 13.3124C5.23047 10.2735 6.208 7.85241 8.16307 6.04929C10.1181 4.24617 12.3822 3.3446 14.9552 3.3446C17.5282 3.3446 19.7922 4.24617 21.7473 6.04929C23.7023 7.85241 24.6799 10.2735 24.6799 13.3124C24.6799 15.3384 23.8745 17.5416 22.2639 19.9222C20.6532 22.3027 18.217 24.8808 14.9552 27.6563Z" fill="#006B5D"/>
                                    </g>
                                </svg>
                                <p>{exactLocation}</p>
                            </div>
                            {/* CONTACT US */}
                            <div className="unit-icons">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M4.01562 6.88991C4.01562 6.24513 4.27177 5.62675 4.7277 5.17081C5.18363 4.71488 5.80201 4.45874 6.4468 4.45874H10.4339C10.6889 4.45893 10.9375 4.53933 11.1443 4.68855C11.3511 4.83776 11.5057 5.04825 11.5863 5.2902L13.4073 10.7518C13.4995 11.0294 13.4886 11.3309 13.3765 11.6011C13.2644 11.8713 13.0587 12.092 12.797 12.2227L10.0534 13.5963C11.3983 16.5727 13.7822 18.9567 16.7586 20.3015L18.1322 17.5579C18.263 17.2962 18.4837 17.0905 18.7538 16.9784C19.024 16.8663 19.3255 16.8554 19.6031 16.9477L25.0647 18.7686C25.3069 18.8493 25.5175 19.0041 25.6667 19.2112C25.816 19.4182 25.8963 19.667 25.8962 19.9222V23.9081C25.8962 24.5529 25.6401 25.1713 25.1841 25.6272C24.7282 26.0832 24.1098 26.3393 23.465 26.3393H22.2494C12.1795 26.3393 4.01562 18.1754 4.01562 8.1055V6.88991Z" stroke="#006B5D" strokeWidth="2.43117" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <Link className="unit-links" to="/Contact">Contact Us</Link>
                                <FontAwesomeIcon icon={faChevronRight} className="list-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HospitalUnits;
