import React from "react";
import Creatable from 'react-select/creatable';

const DoctorsDetailsInputs = ({
    formData,
    handleInputChange,
    handleSelectChange,
    defaultSpecialtiesOptions,
    defaultDepartmentOptions,
    defaultQualificationsOptions 
}) => {
    const specialties = Array.isArray(formData.specialties) ? formData.specialties : [];
    const departments = Array.isArray(formData.departments) ? formData.departments : [];
    const qualifications = Array.isArray(formData.qualifications) ? formData.qualifications : [];

    return (
        <div className="details-inputs">
            {/* DOCTOR NAME */}
            <label>
                Doctor Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name || ''}
                    onChange={handleInputChange}
                />
            </label>
            {/* OVERVIEW TEXT */}
            <label>
                Overview Text:
                <textarea
                    name="overviewText"
                    value={formData.overviewText || ''}
                    onChange={handleInputChange}
                ></textarea>
            </label>
            {/* ACCOMPLISHMENTS TEXT */}
            <label>
                Accomplishments:
                <textarea
                    name="accomplishments"
                    value={formData.accomplishments || ''}
                    onChange={handleInputChange}
                ></textarea>
            </label>
            {/* SPECIALTIES */}
            <label>
                Specialties:
                <Creatable
                    isMulti
                    value={specialties}
                    onChange={(newValue) => handleSelectChange(newValue, 'specialties')}
                    options={defaultSpecialtiesOptions}
                    className="admin-select"
                    classNames={{
                        control: () => 'react-select__control',
                        option: () => 'react-select__option',
                        menu: () => 'react-select__menu',
                        menuList: () => 'react-select__menu-list',
                        multiValue: () => 'react-select__multi-value',
                        multiValueLabel: () => 'react-select__multi-value__label',
                        multiValueRemove: () => 'react-select__multi-value__remove',
                        placeholder: () => 'react-select__placeholder',
                        dropdownIndicator: () => 'react-select__dropdown-indicator',
                    }}
                />
            </label>
            {/* QUALIFICATIONS */}
            <label>
                Qualifications:
                <Creatable
                    isMulti
                    value={qualifications}
                    onChange={(newValue) => handleSelectChange(newValue, 'qualifications')}
                    options={defaultQualificationsOptions}
                    className="admin-select"
                    classNames={{
                        control: () => 'react-select__control',
                        option: () => 'react-select__option',
                        menu: () => 'react-select__menu',
                        menuList: () => 'react-select__menu-list',
                        multiValue: () => 'react-select__multi-value',
                        multiValueLabel: () => 'react-select__multi-value__label',
                        multiValueRemove: () => 'react-select__multi-value__remove',
                        placeholder: () => 'react-select__placeholder',
                        dropdownIndicator: () => 'react-select__dropdown-indicator',
                    }}
                />
            </label>
            {/* DEPARTMENTS */}
            <label>
                Departments:
                <Creatable
                    isMulti
                    value={departments}
                    onChange={(newValue) => handleSelectChange(newValue, 'departments')}
                    options={defaultDepartmentOptions}
                    className="admin-select"
                    classNames={{
                        control: () => 'react-select__control',
                        option: () => 'react-select__option',
                        menu: () => 'react-select__menu',
                        menuList: () => 'react-select__menu-list',
                        multiValue: () => 'react-select__multi-value',
                        multiValueLabel: () => 'react-select__multi-value__label',
                        multiValueRemove: () => 'react-select__multi-value__remove',
                        placeholder: () => 'react-select__placeholder',
                        dropdownIndicator: () => 'react-select__dropdown-indicator',
                    }}
                />
            </label>
            <p>Social links</p>
            <div className="social-links">
                <label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="38" viewBox="0 0 37 38" fill="none">
                        <path d="M34.9496 0.5H2.05042C1.50786 0.504034 0.988668 0.721355 0.605011 1.10501C0.221355 1.48867 0.00403405 2.00786 0 2.55042V35.4496C0.00403405 35.9921 0.221355 36.5113 0.605011 36.895C0.988668 37.2786 1.50786 37.496 2.05042 37.5H19.7642V23.1933H14.9542V17.5971H19.7642V13.4808C19.7642 8.70167 22.6779 6.09625 26.9637 6.09625C28.3975 6.09625 29.8312 6.09625 31.265 6.31208V11.2917H28.3204C25.9925 11.2917 25.5454 12.4017 25.5454 14.0204V17.5817H31.0954L30.3708 23.1779H25.5454V37.5H34.9496C35.4921 37.496 36.0113 37.2786 36.395 36.895C36.7786 36.5113 36.996 35.9921 37 35.4496V2.55042C36.996 2.00786 36.7786 1.48867 36.395 1.10501C36.0113 0.721355 35.4921 0.504034 34.9496 0.5Z" fill="#005046"/>
                    </svg>
                    <input
                        type="text"
                        name="facebook"
                        value={formData.facebook || ''}
                        onChange={handleInputChange}
                        placeholder="https://www.facebook.com/"
                    />
                </label>
                <label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="38" viewBox="0 0 37 38" fill="none">
                        <path d="M34.225 0.577148H2.775C1.23333 0.577148 0 1.81048 0 3.19798V34.8021C0 36.1896 1.23333 37.423 2.775 37.423H34.225C35.7667 37.423 37 36.1896 37 34.8021V3.19798C37 1.81048 35.7667 0.577148 34.225 0.577148ZM10.9458 32.0271H5.55V14.4521H10.9458V32.0271ZM8.325 11.9855C6.62917 11.9855 5.0875 10.598 5.0875 8.74798C5.0875 6.89798 6.475 5.51048 8.325 5.51048C10.0208 5.51048 11.5625 6.89798 11.5625 8.74798C11.5625 10.598 10.0208 11.9855 8.325 11.9855ZM31.6042 31.873H26.2083V23.2396C26.2083 21.2355 26.2083 18.4605 23.2792 18.4605C20.35 18.4605 20.0417 20.773 20.0417 22.9313V31.7188H14.6458V14.4521H19.7333V16.7646H19.8875C20.6583 15.3771 22.5083 13.8355 25.1292 13.8355C30.6792 13.8355 31.7583 17.5355 31.7583 22.3146V31.873H31.6042Z" fill="#005046"/>
                    </svg>
                    <input
                        type="text"
                        name="linkedIn"
                        value={formData.linkedIn || ''}
                        onChange={handleInputChange}
                        placeholder="https://www.linkedin.com/"
                    />
                </label>
                <label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="38" viewBox="0 0 37 38" fill="none">
                        <rect y="0.5" width="37" height="37" rx="4" fill="#005046"/>
                        <path d="M13.3524 30.2758C23.8234 30.2758 29.5514 21.6005 29.5514 14.0768C29.5514 13.8305 29.5514 13.5853 29.5341 13.3414C30.6489 12.5354 31.611 11.5369 32.375 10.3929C31.3362 10.8543 30.2339 11.1568 29.1051 11.2902C30.2935 10.5784 31.1827 9.45911 31.6073 8.14057C30.4896 8.80292 29.2673 9.27016 27.9928 9.52228C27.1344 8.60947 25.999 8.00503 24.7624 7.80249C23.5258 7.59995 22.2569 7.81059 21.1521 8.40184C20.0473 8.99308 19.1682 9.93195 18.6507 11.0732C18.1332 12.2144 18.0063 13.4944 18.2896 14.715C16.0261 14.6016 13.8118 14.0134 11.7903 12.9887C9.76889 11.9641 7.98551 10.5258 6.55594 8.76725C5.82863 10.0208 5.60612 11.5044 5.93367 12.9162C6.26122 14.328 7.11423 15.562 8.31922 16.3673C7.41314 16.3396 6.52693 16.095 5.735 15.6539V15.7267C5.73536 17.0411 6.19033 18.315 7.02275 19.3322C7.85518 20.3495 9.01382 21.0475 10.3022 21.3079C9.46418 21.5369 8.58474 21.5702 7.73184 21.4051C8.0956 22.5364 8.80382 23.5257 9.75746 24.2347C10.7111 24.9437 11.8625 25.3369 13.0506 25.3594C11.8701 26.287 10.5183 26.9727 9.07257 27.3774C7.62684 27.7822 6.11551 27.898 4.625 27.7182C7.22835 29.3894 10.2576 30.276 13.3512 30.2723" fill="white"/>
                    </svg>
                    <input
                        type="text"
                        name="twitter"
                        value={formData.twitter || ''}
                        onChange={handleInputChange}
                        placeholder="https://www.twitter.com/"
                    />
                </label>
                <label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="38" viewBox="0 0 37 38" fill="none">
                        <rect y="0.5" width="37" height="37" rx="4" fill="#005046"/>
                        <path d="M25.9072 13.258C26.8267 13.258 27.5722 12.5125 27.5722 11.593C27.5722 10.6734 26.8267 9.92798 25.9072 9.92798C24.9876 9.92798 24.2422 10.6734 24.2422 11.593C24.2422 12.5125 24.9876 13.258 25.9072 13.258Z" fill="white"/>
                        <path d="M18.4998 11.8752C17.0907 11.8752 15.7132 12.2931 14.5415 13.076C13.3698 13.8589 12.4566 14.9716 11.9173 16.2735C11.3781 17.5754 11.237 19.008 11.5119 20.39C11.7868 21.7721 12.4654 23.0416 13.4618 24.0381C14.4582 25.0345 15.7278 25.7131 17.1098 25.988C18.4919 26.2629 19.9245 26.1218 21.2264 25.5825C22.5283 25.0433 23.641 24.1301 24.4239 22.9584C25.2068 21.7867 25.6246 20.4092 25.6246 19.0001C25.6249 18.0643 25.4409 17.1377 25.0829 16.2731C24.725 15.4086 24.2002 14.623 23.5385 13.9614C22.8768 13.2997 22.0913 12.7749 21.2267 12.417C20.3622 12.059 19.4355 11.8749 18.4998 11.8752ZM18.4998 23.6251C17.5851 23.6251 16.6909 23.3538 15.9303 22.8456C15.1697 22.3374 14.5769 21.6151 14.2269 20.77C13.8768 19.9249 13.7852 18.9949 13.9637 18.0978C14.1421 17.2006 14.5826 16.3765 15.2294 15.7297C15.8763 15.0829 16.7004 14.6424 17.5975 14.4639C18.4947 14.2855 19.4246 14.3771 20.2697 14.7271C21.1148 15.0772 21.8372 15.67 22.3454 16.4305C22.8536 17.1911 23.1248 18.0853 23.1248 19.0001C23.1248 20.2267 22.6375 21.4031 21.7702 22.2704C20.9028 23.1378 19.7264 23.6251 18.4998 23.6251Z" fill="white"/>
                        <path d="M18.5 7.62481C22.2046 7.62481 22.644 7.63869 24.1067 7.70575C24.9865 7.71523 25.858 7.87678 26.6828 8.18328C27.2811 8.41449 27.8246 8.76824 28.2782 9.22184C28.7318 9.67543 29.0855 10.2189 29.3167 10.8172C29.6232 11.642 29.7848 12.5135 29.7943 13.3933C29.8613 14.856 29.8752 15.2954 29.8752 19.0012C29.8752 22.7069 29.8613 23.144 29.7943 24.6067C29.7848 25.4865 29.6232 26.358 29.3167 27.1828C29.0855 27.7811 28.7318 28.3246 28.2782 28.7782C27.8246 29.2318 27.2811 29.5855 26.6828 29.8167C25.858 30.1232 24.9865 30.2848 24.1067 30.2943C22.644 30.3613 22.2046 30.3752 18.5 30.3752C14.7954 30.3752 14.356 30.3613 12.8933 30.2943C12.0135 30.2848 11.142 30.1232 10.3172 29.8167C9.71885 29.5855 9.17543 29.2318 8.72184 28.7782C8.26824 28.3246 7.91449 27.7811 7.68328 27.1828C7.37678 26.358 7.21523 25.4865 7.20575 24.6067C7.13869 23.144 7.12481 22.7046 7.12481 19C7.12481 15.2954 7.13869 14.856 7.20575 13.3933C7.21523 12.5135 7.37678 11.642 7.68328 10.8172C7.91449 10.2189 8.26824 9.67543 8.72184 9.22184C9.17543 8.76824 9.71885 8.41449 10.3172 8.18328C11.142 7.87678 12.0135 7.71523 12.8933 7.70575C14.356 7.63869 14.7954 7.62481 18.5 7.62481ZM18.5 5.125C14.7318 5.125 14.2589 5.14119 12.7789 5.20825C11.6281 5.23133 10.4896 5.44949 9.41188 5.85344C8.49017 6.21016 7.6531 6.75539 6.95424 7.45424C6.25539 8.1531 5.71016 8.99017 5.35344 9.91188C4.94936 10.99 4.7312 12.1289 4.70825 13.28C4.64119 14.76 4.625 15.2306 4.625 19C4.625 22.7694 4.64119 23.2411 4.70825 24.7211C4.73133 25.8719 4.94949 27.0104 5.35344 28.0881C5.71016 29.0098 6.25539 29.8469 6.95424 30.5458C7.6531 31.2446 8.49017 31.7898 9.41188 32.1466C10.49 32.5506 11.6289 32.7688 12.78 32.7917C14.26 32.8588 14.7318 32.875 18.5 32.875C22.2682 32.875 22.7411 32.8588 24.2211 32.7917C25.3723 32.7688 26.5112 32.5506 27.5893 32.1466C28.511 31.7898 29.3481 31.2446 30.0469 30.5458C30.7458 29.8469 31.291 29.0098 31.6477 28.0881C32.0514 27.0099 32.2692 25.871 32.2917 24.72C32.3588 23.24 32.375 22.7694 32.375 19C32.375 15.2306 32.3588 14.7589 32.2917 13.2789C32.2687 12.1281 32.0505 10.9896 31.6466 9.91188C31.2898 8.99017 30.7446 8.1531 30.0458 7.45424C29.3469 6.75539 28.5098 6.21016 27.5881 5.85344C26.5099 5.44975 25.371 5.23199 24.22 5.20941C22.74 5.14003 22.2694 5.125 18.5 5.125Z" fill="white"/>
                    </svg>
                    <input
                        type="text"
                        name="instagram"
                        value={formData.instagram || ''}
                        onChange={handleInputChange}
                        placeholder="https://www.instagram.com/"
                    />
                </label>
            </div>
            {/* PHONE */}
            <label>
                Phone:
                <input
                    type="text"
                    name="phone"
                    value={formData.phone || ''}
                    onChange={handleInputChange}
                />
            </label>
            {/* EMAIL */}
            <label>
                Email:
                <input
                    type="text"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleInputChange}
                />
            </label>
        </div>
    );
};

export default DoctorsDetailsInputs;