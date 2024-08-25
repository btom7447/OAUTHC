
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HistoryIcons from './HistoryIcon';
import DepartmentIcon from './DepartmentIcon';
import ManagementIcon from './ManagementIcon';
import HospitalUnitIcon from './HospitalUnitIcon';

export const toggleData = [
  {
    id: "history", 
    name: "Brief History of OAUTHC",
    bullets: [], 
    texts: [
      "The Obafemi Awolowo University Teaching Hospitals Complex is a product of a concise and comprehensive decision of the Western state under the leadership of Brigadier Adeyinka Adebayo. The committee's inauguration was on January 15, 1971, and it was comprised of the working party and Professor Hezekiah A. Oluwasanmi; the then vice-chancellor of the University of Ife came up with a working plan of having a Teaching Hospital that would comprise a primary hospital, the nucleus of the teaching hospitals to be called Central hospital, together with a conglomeration of other state hospitals.", 
      "The recommendations made by the planning committee birthed and propelled a futuristic plan for a full-fledged hospital, where clinical training, research and proper healthcare delivery model would be developed on a principle different from the other schools then in existence beyond the traditional tripod of teaching, research and services.", "This project aimed to emphasise services more than usual among Nigerian faculties of medicine. The vision of providing total health care delivery, teaching and research for the designated population propelled the emphasis on hospital development.", 
      "Thus, the Obafemi Awolowo University Teaching Hospitals Complex in 1975, was premised on a robust and elaborate vision of enlarging and harnessing all the needed resources, which aimed to focus on the totality of healthcare delivery using not only tertiary but also secondary and primary health care facilities. Various health professionals are to be trained; doctors, nurses, medical scientists, paramedical staff, auxiliary dental staff and dental hygienists were designated to achieve the long-term goal of having a well-coordinated hospital."
    ],
    images: [
      "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/public/aboutus-toggle-image%201.png?raw=true", 
      "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/public/aboutus-toggle-image%202.png?raw=true",
    ],
    svg: <HistoryIcons />
  }, 
  {
    id: "management", 
    name: "Management Team of OAUTHC",
    bullets: [
      "CMD: Prof. John A. O. Okeniyi - Chief Medical Director", 
      "Prof. Josephine E. A. Eziyi - Chairman, Medical Advisory Committee", 
      "Mr. Olarenwaju Olajide Omonije - Acting Director of Administration", 
    ], 
    texts: [
      "Our Management team is a triad of vastly experienced leaders in the medical fields and administration with an excellent history of managing and leading groups, units, and organizations to success."
    ],
    images: [
      "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/public/aboutus-toggle-image%201.png?raw=true", 
      "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/public/aboutus-toggle-image%202.png?raw=true",
    ],
    svg: <ManagementIcon />
  }, 
  {
    id: "departments", 
    name: "Departments of OAUTHC",
    bullets: [
      "Department of Surgery", 
      "Department of Obstetrics and Gynecology", 
      "Department of Radiology", 
      "Department of Pediatrics", 
      "Department of Internal Medicine", 
      "Department of Pathology", 
    ], 
    texts: [
      "At Obafemi Awolowo University Teaching Hospitals Complex (OAUTHC), we offer a wide range of specialized services across various departments, each dedicated to providing comprehensive and advanced medical care. (Learn more)."
    ],
    images: [
      "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/public/aboutus-toggle-image%201.png?raw=true", 
      "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/public/aboutus-toggle-image%202.png?raw=true",
    ],
    svg: <DepartmentIcon />
  }, 
  {
    id: "units", 
    name: "Hospital Units of OAUTHC",
    bullets: [
      "Ife hospital Unit, Ile-Ife", 
      "Wesley Guild Hospital, Ilesa", 
      "urban Comprehensive Health Centre, Eleyele, Ile-Ife", 
      "Rural Comprehensive Health Centre, Imesi-Ile", 
      "Ijeshaland Geriatric Centre, Ilesa", 
    ], 
    texts: [
      "Obafemi Awolowo University Teaching Hospitals Complex (OAUTHC) delivers comprehensive and excellent healthcare through five specialized units, each designed to meet diverse medical needs with professionalism and expertise."
    ],
    images: [
      "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/public/aboutus-toggle-image%201.png?raw=true", 
      "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/public/aboutus-toggle-image%202.png?raw=true",
    ],
    svg: <HospitalUnitIcon />
  }

];

const AboutToggleDisplay = () => {
  const [selectedButton, setSelectedButton] = useState("management"); // Default selection

  const handleButtonClick = (id) => {
    setSelectedButton(id);
  };

  const selectedData = toggleData.find(data => data.id === selectedButton);

  return (
    <>
      <div className="about-us-section">
        <div className="about-us-caption">
          <h5>Learn More About OAUTHC</h5>
          <h3>About Us</h3>
        </div>
        <div className="about-us-container">
          <div className="toggle-display-container">
            {/* BUTTONS */}
            <div className="button-list">
              {toggleData.map((data) => (
                <button 
                  key={(data.id)} 
                  className={selectedButton === (data.id) ? "active" : ""} 
                  onClick={() => handleButtonClick((data.id))} 
                >
                  {data.svg}
                  {data.name}
                </button>

              ))}
              <Link className='learn-more-link' to="/About/About-OAUTHC">
                <button type="button">
                  Learn More
                </button>
              </Link>
            </div>
            
            {/* DISPLAY SECTION */}
            {selectedData && (
              <div className="display-section">
                <div className="about-us-display">
                  <div className="about-left">
                    <h5>{selectedData.name}</h5>
                    <ul>
                      {selectedData.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                    {selectedData.texts.map((text, index) => (
                      <p key={index}>{text}</p>
                    ))}
                  </div>
                  <div className="about-right">
                    {selectedData.images.map((image, index) => (
                      <img key={index} src={image} alt={`About ${selectedData.name} ${index + 1}`} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutToggleDisplay;