import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useDoctors } from './DoctorProvider';

const DoctorList = () => {
  const doctors = useDoctors();
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [fade, setFade] = useState(false);
  // eslint-disable-next-line
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Search state variables
  const [searchName, setSearchName] = useState("");
  const [searchSpecialty, setSearchSpecialty] = useState("");
  const [searchGender, setSearchGender] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("");

  const totalPages = Math.ceil(doctors.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setFade(true);
      setTimeout(() => {
        setCurrentPage(pageNumber);
        setFade(false);
      }, 500);
    }
  };

  // Filter doctors based on search criteria
  const filteredDoctors = doctors.filter(doctor => {
    const matchName = searchName === "" || (doctor.doctorName && doctor.doctorName.toLowerCase().includes(searchName.toLowerCase()));
    const matchSpecialty = searchSpecialty === "" || (Array.isArray(doctor.specialty) && doctor.specialty.includes(searchSpecialty));
    const matchGender = searchGender === "" || (doctor.gender && doctor.gender.toLowerCase() === searchGender.toLowerCase());
    const matchLanguage = searchLanguage === "" || (Array.isArray(doctor.languages) && doctor.languages.includes(searchLanguage));
    return matchName && matchSpecialty && matchGender && matchLanguage;
  });

  const displayedDoctors = filteredDoctors.slice(startIndex, endIndex);

  return (
    <div className="doctors-log">
      <div className="search-filters">
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <select value={searchSpecialty} onChange={(e) => setSearchSpecialty(e.target.value)}>
          <option value="">Select specialty</option>
          {/* Map through unique specialities for options */}
          {[...new Set(doctors.map(doctor => Array.isArray(doctor.specialty) ? doctor.specialty : []).flat())].map(specialty => (
            <option key={specialty} value={specialty}>{specialty}</option>
          ))}
        </select>
        <select value={searchGender} onChange={(e) => setSearchGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          {/* Add more gender options if necessary */}
        </select>
        <select value={searchLanguage} onChange={(e) => setSearchLanguage(e.target.value)}>
          <option value="">Select Language</option>
          {/* Map through unique languages for options */}
          {[...new Set(doctors.map(doctor => Array.isArray(doctor.languages) ? doctor.languages : []).flat())].map(language => (
            <option key={language} value={language}>{language}</option>
          ))}
        </select>
      </div>

      <div className={`doctors-container ${fade ? 'fade-enter' : 'fade-enter-active'}`}>
        {displayedDoctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <div className="doctor-card-caption">
              <img src={doctor.doctorImage} alt={doctor.doctorName} />
              <div className="doctor-card-text">
                <h4>{doctor.doctorName}</h4>
                <h6>{Array.isArray(doctor.specialty) ? doctor.specialty.join(', ') : ''}</h6>
                {/* YEARS OF EXPERIENCE */}
                <div className="doctor-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="11" viewBox="0 0 8 11" fill="none">
                    <path d="M2.43468 5.07692C1.47423 5.07692 0.695623 4.12982 0.695623 2.96154V1.26923C0.695623 1.03561 0.851373 0.846154 1.04343 0.846154H1.39125C1.58331 0.846154 1.73906 0.6567 1.73906 0.423077C1.73906 0.189454 1.58331 0 1.39125 0H1.04343C0.467181 0 0 0.568277 0 1.26923V2.96154C0.00090431 3.93174 0.393584 4.83958 1.05039 5.39C1.67861 6.06371 2.05306 7.02054 2.08687 8.03846C2.08687 9.67408 3.17691 11 4.52155 11C5.86619 11 6.95623 9.67408 6.95623 8.03846V7.55615C7.7002 7.32253 8.14756 6.39946 7.9555 5.4945C7.76336 4.58954 7.00458 4.04538 6.26061 4.279C5.51664 4.51271 5.06929 5.43569 5.26135 6.34065C5.38788 6.93677 5.77054 7.40224 6.26061 7.55615V8.03846C6.26061 9.20675 5.482 10.1538 4.52155 10.1538C3.5611 10.1538 2.78249 9.20675 2.78249 8.03846C2.81804 7.01927 3.19514 6.06218 3.82593 5.39C4.48009 4.83763 4.87006 3.93022 4.86936 2.96154V1.26923C4.86936 0.568277 4.40218 0 3.82593 0H3.47812C3.28605 0 3.1303 0.189454 3.1303 0.423077C3.1303 0.6567 3.28605 0.846154 3.47812 0.846154H3.82593C4.01799 0.846154 4.17374 1.03561 4.17374 1.26923V2.96154C4.17374 4.12982 3.39513 5.07692 2.43468 5.07692ZM6.60842 6.76923C6.22423 6.76923 5.9128 6.39041 5.9128 5.92308C5.9128 5.45575 6.22423 5.07692 6.60842 5.07692C6.99261 5.07692 7.30404 5.45575 7.30404 5.92308C7.30404 6.39041 6.99261 6.76923 6.60842 6.76923Z" fill="black"/>
                  </svg>
                  <p>{doctor.experience} Years Experience</p>
                </div>
                {/* LANGUAGES */}
                <div className="doctor-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <g clipPath="url(#clip0_1432_6919)">
                      <path d="M10.0003 1H4.66699V2.66667H5.33366V1.66667H10.0003C10.2003 1.66667 10.3337 1.8 10.3337 2V5.66667C10.3337 5.86667 10.2003 6 10.0003 6H5.66699V8.33333H3.90033L2.66699 9.3V8.33333H1.66699C1.46699 8.33333 1.33366 8.2 1.33366 8V4.33333C1.33366 4.13333 1.46699 4 1.66699 4H6.00033V3.33333H1.66699C1.10033 3.33333 0.666992 3.76667 0.666992 4.33333V8C0.666992 8.56667 1.10033 9 1.66699 9H2.00033V10.7L4.10033 9H6.33366V6.66667H10.0003C10.567 6.66667 11.0003 6.23333 11.0003 5.66667V2C11.0003 1.43333 10.567 1 10.0003 1Z" fill="black"/>
                      <path d="M2.06641 7.63329H2.86641L3.06641 7.09996H4.09974L4.29974 7.63329H5.09974L3.96641 4.66663H3.16641L2.06641 7.63329ZM3.56641 5.49996L3.89974 6.53329H3.23307L3.56641 5.49996Z" fill="black"/>
                      <path d="M6.66699 5.66667C7.03366 5.66667 7.53366 5.56667 8.00033 5.33333C8.46699 5.56667 9.00033 5.66667 9.33366 5.66667V5C9.33366 5 9.00033 5 8.63366 4.86667C9.03366 4.46667 9.33366 3.86667 9.33366 3V2.66667H8.33366V2H7.66699V2.66667H6.66699V3.33333H8.63366C8.56699 3.93333 8.30033 4.3 8.00033 4.53333C7.80033 4.36667 7.60033 4.13333 7.46699 3.83333H6.76699C6.90033 4.26667 7.10033 4.6 7.36699 4.86667C7.03366 5 6.73366 5 6.66699 5V5.66667Z" fill="black"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1432_6919">
                      <rect width="12" height="12" fill="white"/>
                      </clipPath>
                    </defs>
                 </svg>
                  <p>{Array.isArray(doctor.languages) ? doctor.languages.join(', ') : ''}</p>
                </div>
              </div>
            </div>
            <hr />
            <div>
              {/* DOCTORS LOCATION */}
              <div className="doctor-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 9 11" fill="none">
                  <path d="M4.5 0C2.01868 0 0 1.99832 0 4.45462C0 5.46816 0.335532 6.42269 0.970338 7.21502C1.79229 8.24091 4.18255 10.6768 4.28389 10.78L4.49997 11L4.71608 10.78C4.81748 10.6767 7.20846 8.24035 8.03054 7.21412C8.66477 6.42242 9 5.46822 9 4.45462C9 1.99832 6.98132 0 4.5 0ZM7.55819 6.84334C6.89641 7.66944 5.11916 9.50715 4.5 10.1428C3.8809 9.50718 2.10428 7.67001 1.44265 6.8442C0.893236 6.15842 0.602825 5.33214 0.602825 4.45462C0.602825 2.32737 2.35108 0.596746 4.5 0.596746C6.64889 0.596746 8.39717 2.32737 8.39714 4.45462C8.39714 5.3322 8.10704 6.15821 7.55819 6.84334Z" fill="black"/>
                  <path d="M4.5 2C3.12148 2 2 3.12148 2 4.5C2 5.87852 3.12151 7 4.5 7C5.87849 7 7 5.87849 7 4.5C7 3.12151 5.87852 2 4.5 2ZM4.5 6.43422C3.43345 6.43422 2.56578 5.56652 2.56578 4.5C2.56578 3.43345 3.43348 2.56578 4.5 2.56578C5.56652 2.56578 6.43419 3.43348 6.43422 4.5C6.43422 5.56655 5.56655 6.43422 4.5 6.43422Z" fill="black"/>
                </svg>
                  <p>{doctor.location}</p>
              </div>
              {/* DOCTOR QUALIFICATION */}
              <div className="doctor-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9.01787 9.19801C9.28787 9.21601 9.53988 9.10801 9.80988 9.01801C11.2319 8.55001 12.6539 8.08201 14.0579 7.59601C14.1479 7.56001 14.2199 7.52401 14.2919 7.47001C14.3819 7.39801 14.3819 7.30801 14.2919 7.23601C14.2199 7.18201 14.1299 7.12801 14.0399 7.11001C12.5279 6.66001 11.0159 6.21001 9.50387 5.74201C9.16187 5.63401 8.81987 5.63401 8.45987 5.74201C6.96587 6.19201 5.45387 6.64201 3.95987 7.09201C3.86987 7.12801 3.77987 7.16401 3.68987 7.21801C3.58187 7.29001 3.58187 7.39801 3.68987 7.47001C3.76187 7.52401 3.83387 7.56001 3.90587 7.57801C5.39987 8.08201 6.91188 8.58601 8.42387 9.07201C8.62188 9.16201 8.80187 9.19801 9.01787 9.19801Z" fill="black"/>
                      <path d="M12.0054 9.27003C12.2214 9.21603 12.2754 9.36003 12.2754 9.46803C12.2754 10.044 12.2754 10.602 12.2754 11.178C12.2754 11.376 12.2034 11.502 12.0774 11.628C12.0234 11.682 11.9694 11.718 11.9154 11.754C11.5554 12.006 11.1414 12.168 10.7094 12.276C9.86339 12.51 8.99939 12.546 8.13539 12.438C7.57739 12.366 7.01939 12.222 6.49739 11.988C6.26339 11.88 6.04739 11.754 5.88539 11.574C5.77739 11.466 5.72339 11.358 5.74139 11.196C5.72339 10.656 5.72339 10.098 5.72339 9.54003C5.72339 9.23403 5.93939 9.27003 6.02939 9.28803C6.82139 9.55803 7.63139 9.81003 8.42339 10.08C8.81939 10.206 9.19739 10.206 9.59339 10.08L12.0054 9.27003Z" fill="black"/>
                      <path d="M4.51799 8.74802C4.58999 8.76602 4.60799 8.80202 4.60799 8.87402C4.60799 9.37802 4.60799 9.88202 4.60799 10.386C4.60799 10.44 4.62599 10.494 4.64399 10.548C4.75199 10.818 4.87799 11.088 4.96799 11.358C5.05799 11.61 5.00399 11.862 4.82399 12.06C4.76999 12.132 4.69799 12.186 4.62599 12.24C4.55399 12.294 4.44599 12.33 4.35599 12.348C4.19399 12.366 4.06799 12.276 3.95999 12.186C3.90599 12.132 3.85199 12.078 3.79799 12.024C3.67199 11.862 3.63599 11.628 3.68999 11.412C3.76199 11.106 3.88799 10.836 4.03199 10.566C4.06799 10.512 4.08599 10.44 4.08599 10.386C4.08599 9.82802 4.08599 9.28802 4.08599 8.73002C4.08599 8.62202 4.17599 8.64002 4.21199 8.65802L4.51799 8.74802Z" fill="black"/>
                  </svg>
                  <p>{Array.isArray(doctor.qualification) ? doctor.qualification.join(', ') : ''}</p>
              </div>
            </div>
            <div className="doctor-card-buttons">
              <Link
                className='doctor-profile-button'
                to={`/About/Find-Doctor/${encodeURIComponent(doctor.doctorName)}`}
                onClick={() => setSelectedDoctor(doctor)} 
              >
                View Profile
              </Link>
              <button type="button" className="doctor-appointment-button">
                  Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="doctors-pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default DoctorList;
