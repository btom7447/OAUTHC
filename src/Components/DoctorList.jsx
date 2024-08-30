import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import { useDoctors } from './DepartmentProvider';

const DoctorList = () => {
  const doctors = useDoctors();
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [fade, setFade] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Search state variables
  const [searchName, setSearchName] = useState("");
  const [searchSpecialty, setSearchSpecialty] = useState(null);
  const [searchGender, setSearchGender] = useState(null);
  const [searchUnit, setSearchUnit] = useState(null);

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

  // Generate options for react-select
  const generateOptions = (items) => {
    if (!items || !Array.isArray(items)) return [];
    const uniqueItems = [...new Set(items.flat())]; // Flatten and get unique items
    return uniqueItems
      .filter(item => typeof item === 'string') // Ensure items are strings
      .sort((a, b) => a.localeCompare(b))
      .map(item => ({ value: item, label: item }));
  };

  // Create options
  const specialtyOptions = generateOptions(doctors.map(doctor => doctor.specialty).flat());
  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
  ];
  const unitOptions = generateOptions(doctors.map(doctor => doctor.unit).flat());

  // Filter doctors based on search criteria
  const filteredDoctors = doctors.filter(doctor => {
    const matchName = searchName === "" || (doctor.doctorName && doctor.doctorName.toLowerCase().includes(searchName.toLowerCase()));
    const matchSpecialty = searchSpecialty === null || (Array.isArray(doctor.specialty) && doctor.specialty.some(specialty => specialty.toLowerCase() === searchSpecialty.value.toLowerCase()));
    const matchGender = searchGender === null || (doctor.gender && doctor.gender.toLowerCase() === searchGender.value.toLowerCase());
    const matchUnit = searchUnit === null || (Array.isArray(doctor.unit) && doctor.unit.some(unit => unit.toLowerCase().includes(searchUnit.value.toLowerCase())));
    return matchName && matchSpecialty && matchGender && matchUnit;
  });

  const sortedDoctors = filteredDoctors.sort((a, b) => {
    if (typeof a.doctorName === 'string' && typeof b.doctorName === 'string') {
      return a.doctorName.localeCompare(b.doctorName);
    }
    return 0;
  });

  // Paginate the sorted doctors
  const displayedDoctors = sortedDoctors.slice(startIndex, endIndex);

  return (
    <div className="doctors-log">
      <div className="search-filters">
        {/* NAME SEARCH INPUT */}
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        {/* SPECIALTY SEARCH */}
        <Select
          value={searchSpecialty}
          onChange={setSearchSpecialty}
          options={specialtyOptions}
          placeholder="Select specialty"
          isClearable
          className="doctor-select"
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
        {/* GENDER SEARCH */}
        <Select
          value={searchGender}
          onChange={setSearchGender}
          options={genderOptions}
          placeholder="Select Gender"
          isClearable
          className="doctor-select"
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
        {/* UNIT SEARCH */}
        <Select
          value={searchUnit}
          onChange={setSearchUnit}
          options={unitOptions}
          placeholder="Select Unit"
          isClearable
          className="doctor-select"
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
      </div>

      <div className={`doctors-container ${fade ? 'fade-enter' : 'fade-enter-active'}`}>
        {displayedDoctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <div className="doctor-card-caption">
              <img src={doctor.doctorImage} alt={doctor.doctorName} />
              <div className="doctor-card-text">
                <h4>{doctor.doctorName}</h4>
                <h6>{Array.isArray(doctor.specialty) ? doctor.specialty.join(', ') : ''}</h6>
                {/* CLINCIC DAYS */}
              </div>
            </div>
            <hr />
            <div>
              {/* DOCTORS UNIT */}
              <div className="doctor-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 9 11" fill="none" className='icon'>
                  <path d="M4.5 0C2.01868 0 0 1.99832 0 4.45462C0 5.46816 0.335532 6.42269 0.970338 7.21502C1.79229 8.24091 4.18255 10.6768 4.28389 10.78L4.49997 11L4.71608 10.78C4.81748 10.6767 7.20846 8.24035 8.03054 7.21412C8.66477 6.42242 9 5.46822 9 4.45462C9 1.99832 6.98132 0 4.5 0ZM7.55819 6.84334C6.89641 7.66944 5.11916 9.50715 4.5 10.1428C3.8809 9.50718 2.10428 7.67001 1.44265 6.8442C0.893236 6.15842 0.602825 5.33214 0.602825 4.45462C0.602825 2.32737 2.35108 0.596746 4.5 0.596746C6.64889 0.596746 8.39717 2.32737 8.39714 4.45462C8.39714 5.3322 8.10704 6.15821 7.55819 6.84334Z" fill="black"/>
                  <path d="M4.5 2C3.12148 2 2 3.12148 2 4.5C2 5.87852 3.12151 7 4.5 7C5.87849 7 7 5.87849 7 4.5C7 3.12151 5.87852 2 4.5 2ZM4.5 6.43422C3.43345 6.43422 2.56578 5.56652 2.56578 4.5C2.56578 3.43345 3.43348 2.56578 4.5 2.56578C5.56652 2.56578 6.43419 3.43348 6.43422 4.5C6.43422 5.56655 5.56655 6.43422 4.5 6.43422Z" fill="black"/>
                </svg>
                  <p>{doctor.unit}</p>
              </div>
              {/* DOCTOR QUALIFICATION */}
              <div className="doctor-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className='icon'>
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
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
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
