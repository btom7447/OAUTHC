import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutToggleDisplay = () => {
  const [selectedButton, setSelectedButton] = useState("ManagementButton");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="toggle-display-container">
      <div className="button-list">
        <button className={selectedButton === "HistoryButton" ? "active" : ""} onClick={() => handleButtonClick("HistoryButton")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="44" viewBox="0 0 45 44" fill="none">
              <path d="M44.1567 14.5804H0.809235C0.537328 14.5804 0.31665 14.3597 0.31665 14.0878V9.50575C0.31665 9.30083 0.443737 9.1171 0.635353 9.04469L22.3091 0.873202C22.4209 0.83084 22.545 0.83084 22.6563 0.873202L44.3301 9.04469C44.5222 9.1166 44.6488 9.30083 44.6488 9.50575V14.0878C44.6493 14.3597 44.4291 14.5804 44.1567 14.5804ZM1.30182 13.5952H43.6641V9.84662L22.483 1.86034L1.30182 9.84612V13.5952Z" fill="#D34A4A"/>
              <path d="M44.1567 43.836H0.809235C0.537328 43.836 0.31665 43.6158 0.31665 43.3434V36.8698C0.31665 36.5974 0.537328 36.3773 0.809235 36.3773H44.1567C44.4291 36.3773 44.6493 36.5974 44.6493 36.8698V43.3434C44.6493 43.6153 44.4291 43.836 44.1567 43.836ZM1.30182 42.8508H43.6641V37.3624H1.30182V42.8508Z" fill="#D34A4A"/>
              <path d="M27.0507 20.3894H17.9152C17.6433 20.3894 17.4226 20.1688 17.4226 19.8968V14.0878C17.4226 13.8159 17.6433 13.5952 17.9152 13.5952C18.1871 13.5952 18.4078 13.8159 18.4078 14.0878V19.4048H26.5586V14.0878C26.5586 13.8159 26.7788 13.5952 27.0512 13.5952C27.3236 13.5952 27.5437 13.8159 27.5437 14.0878V19.8973C27.5432 20.1692 27.3231 20.3894 27.0507 20.3894Z" fill="#D34A4A"/>
              <path d="M12.6017 20.3894H3.46573C3.19382 20.3894 2.97314 20.1688 2.97314 19.8968V14.0878C2.97314 13.8159 3.19382 13.5952 3.46573 13.5952C3.73764 13.5952 3.95831 13.8159 3.95831 14.0878V19.4048H12.1091V14.0878C12.1091 13.8159 12.3298 13.5952 12.6017 13.5952C12.8736 13.5952 13.0943 13.8159 13.0943 14.0878V19.8973C13.0943 20.1692 12.8736 20.3894 12.6017 20.3894Z" fill="#D34A4A"/>
              <path d="M34.0219 31.5529C33.7495 31.5529 33.5293 31.3327 33.5293 31.0603V19.8969C33.5293 19.625 33.7495 19.4043 34.0219 19.4043C34.2943 19.4043 34.5145 19.625 34.5145 19.8969V31.0603C34.5145 31.3327 34.2943 31.5529 34.0219 31.5529Z" fill="#D34A4A"/>
              <path d="M39.8427 31.5529C39.5703 31.5529 39.3501 31.3327 39.3501 31.0603V19.8969C39.3501 19.625 39.5703 19.4043 39.8427 19.4043C40.1151 19.4043 40.3353 19.625 40.3353 19.8969V31.0603C40.3353 31.3327 40.1151 31.5529 39.8427 31.5529Z" fill="#D34A4A"/>
              <path d="M41.4996 20.3894H32.3642C32.0918 20.3894 31.8716 20.1688 31.8716 19.8968V14.0878C31.8716 13.8159 32.0918 13.5952 32.3642 13.5952C32.6366 13.5952 32.8568 13.8159 32.8568 14.0878V19.4048H41.0075V14.0878C41.0075 13.8159 41.2277 13.5952 41.5001 13.5952C41.7725 13.5952 41.9927 13.8159 41.9927 14.0878V19.8973C41.9922 20.1692 41.772 20.3894 41.4996 20.3894Z" fill="#D34A4A"/>
              <path d="M27.0507 37.3624C26.7783 37.3624 26.5581 37.1422 26.5581 36.8698V31.5529H18.4078V36.8698C18.4078 37.1422 18.1871 37.3624 17.9152 37.3624C17.6433 37.3624 17.4226 37.1422 17.4226 36.8698V31.0603C17.4226 30.7879 17.6433 30.5677 17.9152 30.5677H27.0512C27.3236 30.5677 27.5437 30.7879 27.5437 31.0603V36.8698C27.5432 37.1422 27.3231 37.3624 27.0507 37.3624Z" fill="#D34A4A"/>
              <path d="M41.4996 37.3624C41.2272 37.3624 41.0071 37.1422 41.0071 36.8698V31.5529H32.8568V36.8698C32.8568 37.1422 32.6366 37.3624 32.3642 37.3624C32.0918 37.3624 31.8716 37.1422 31.8716 36.8698V31.0603C31.8716 30.7879 32.0918 30.5677 32.3642 30.5677H41.5001C41.7725 30.5677 41.9927 30.7879 41.9927 31.0603V36.8698C41.9922 37.1422 41.772 37.3624 41.4996 37.3624Z" fill="#D34A4A"/>
              <path d="M19.5727 31.5529C19.3008 31.5529 19.0801 31.3327 19.0801 31.0603V19.8969C19.0801 19.625 19.3008 19.4043 19.5727 19.4043C19.8446 19.4043 20.0652 19.625 20.0652 19.8969V31.0603C20.0652 31.3327 19.8446 31.5529 19.5727 31.5529Z" fill="#D34A4A"/>
              <path d="M25.3932 31.5529C25.1208 31.5529 24.9006 31.3327 24.9006 31.0603V19.8969C24.9006 19.625 25.1208 19.4043 25.3932 19.4043C25.6656 19.4043 25.8858 19.625 25.8858 19.8969V31.0603C25.8858 31.3327 25.6656 31.5529 25.3932 31.5529Z" fill="#D34A4A"/>
              <path d="M5.1232 31.5529C4.85129 31.5529 4.63062 31.3327 4.63062 31.0603V19.8969C4.63062 19.625 4.85129 19.4043 5.1232 19.4043C5.39511 19.4043 5.61578 19.625 5.61578 19.8969V31.0603C5.61578 31.3327 5.3956 31.5529 5.1232 31.5529Z" fill="#D34A4A"/>
              <path d="M10.944 31.5529C10.6721 31.5529 10.4514 31.3327 10.4514 31.0603V19.8969C10.4514 19.625 10.6721 19.4043 10.944 19.4043C11.2159 19.4043 11.4366 19.625 11.4366 19.8969V31.0603C11.4366 31.3327 11.2159 31.5529 10.944 31.5529Z" fill="#D34A4A"/>
              <mask id="path-14-inside-1_978_3842" fill="white">
                  <path d="M12.6017 37.3624C12.3298 37.3624 12.1091 37.1422 12.1091 36.8698V31.5529H3.95831V36.8698C3.95831 37.1422 3.73764 37.3624 3.46573 37.3624C3.19382 37.3624 2.97314 37.1422 2.97314 36.8698V31.0603C2.97314 30.7879 3.19382 30.5677 3.46573 30.5677H12.6017C12.8736 30.5677 13.0943 30.7879 13.0943 31.0603V36.8698C13.0943 37.1422 12.8736 37.3624 12.6017 37.3624Z"/>
              </mask>
              <path d="M12.6017 37.3624C12.3298 37.3624 12.1091 37.1422 12.1091 36.8698V31.5529H3.95831V36.8698C3.95831 37.1422 3.73764 37.3624 3.46573 37.3624C3.19382 37.3624 2.97314 37.1422 2.97314 36.8698V31.0603C2.97314 30.7879 3.19382 30.5677 3.46573 30.5677H12.6017C12.8736 30.5677 13.0943 30.7879 13.0943 31.0603V36.8698C13.0943 37.1422 12.8736 37.3624 12.6017 37.3624Z" fill="#D34A4A"/>
              <path d="M12.1091 31.5529H15.1091V28.5529H12.1091V31.5529ZM3.95831 31.5529V28.5529H0.958314V31.5529H3.95831ZM12.6017 34.3624C13.9847 34.3624 15.1091 35.4834 15.1091 36.8698H9.10911C9.10911 38.801 10.6749 40.3624 12.6017 40.3624V34.3624ZM15.1091 36.8698V31.5529H9.10911V36.8698H15.1091ZM12.1091 28.5529H3.95831V34.5529H12.1091V28.5529ZM0.958314 31.5529V36.8698H6.95831V31.5529H0.958314ZM0.958314 36.8698C0.958314 35.4834 2.08274 34.3624 3.46573 34.3624V40.3624C5.39254 40.3624 6.95831 38.801 6.95831 36.8698H0.958314ZM3.46573 34.3624C4.84872 34.3624 5.97314 35.4834 5.97314 36.8698H-0.0268555C-0.0268555 38.801 1.53892 40.3624 3.46573 40.3624V34.3624ZM5.97314 36.8698V31.0603H-0.0268555V36.8698H5.97314ZM5.97314 31.0603C5.97314 32.4467 4.84872 33.5677 3.46573 33.5677V27.5677C1.53892 27.5677 -0.0268555 29.1291 -0.0268555 31.0603H5.97314ZM3.46573 33.5677H12.6017V27.5677H3.46573V33.5677ZM12.6017 33.5677C11.2187 33.5677 10.0943 32.4467 10.0943 31.0603H16.0943C16.0943 29.1291 14.5285 27.5677 12.6017 27.5677V33.5677ZM10.0943 31.0603V36.8698H16.0943V31.0603H10.0943ZM10.0943 36.8698C10.0943 35.4834 11.2187 34.3624 12.6017 34.3624V40.3624C14.5285 40.3624 16.0943 38.801 16.0943 36.8698H10.0943Z" fill="#D34A4A" mask="url(#path-14-inside-1_978_3842)"/>
          </svg>
          History
        </button>
        <button className={selectedButton === "ManagementButton" ? "active" : ""} onClick={() => handleButtonClick("ManagementButton")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
              <path d="M22.5224 24.8912C18.739 24.8912 15.6433 21.7955 15.6433 18.0121V15.545C15.6433 11.7615 18.739 8.66583 22.5224 8.66583C26.3059 8.66583 29.4016 11.7615 29.4016 15.545V18.0121C29.4016 21.796 26.3059 24.8912 22.5224 24.8912Z" fill="white"/>
              <path d="M26.396 25.8365C25.2324 26.439 23.9171 26.7859 22.5225 26.7859C21.1278 26.7859 19.8125 26.439 18.6489 25.8365C13.4481 26.6129 9.42529 31.126 9.42529 36.5336V43.6492C9.42529 44.3005 9.95832 44.833 10.6091 44.833H34.4348C35.0861 44.833 35.6186 44.3 35.6186 43.6492V36.5336C35.6196 31.126 31.5968 26.6129 26.396 25.8365Z" fill="white"/>
              <path d="M35.4674 17.6666C34.3038 18.2691 32.9885 18.6159 31.5938 18.6159C31.5918 18.6159 31.5904 18.6159 31.5884 18.6159C31.4436 20.7894 30.5371 22.7545 29.1277 24.2467C34.2289 26.0601 37.8365 30.9707 37.8365 36.5335V36.6631H43.5072C44.1584 36.6631 44.6915 36.13 44.6915 35.4788V28.3637C44.691 22.9555 40.6681 18.4425 35.4674 17.6666Z" fill="white"/>
              <path d="M31.5939 0.49646C28.0263 0.49646 25.0729 3.24979 24.7473 6.73665C28.6884 7.73325 31.6181 11.2989 31.6181 15.5454V16.7204C35.3902 16.7071 38.4726 13.6178 38.4726 9.8427V7.3756C38.4731 3.59217 35.3774 0.49646 31.5939 0.49646Z" fill="white"/>
              <path d="M7.209 36.5335C7.209 30.9707 10.8161 26.0596 15.9173 24.2467C14.5079 22.7545 13.6009 20.7889 13.4566 18.6159C13.4546 18.6159 13.4531 18.6159 13.4512 18.6159C12.0565 18.6159 10.7417 18.2691 9.57758 17.6666C4.37685 18.4425 0.354004 22.9555 0.354004 28.3637V35.4793C0.354004 36.1305 0.887034 36.6636 1.5383 36.6636H7.209V36.5335Z" fill="white"/>
              <path d="M13.4265 16.7199V15.5449C13.4265 11.2984 16.3557 7.73276 20.2973 6.73616C19.9721 3.24979 17.0188 0.49646 13.4512 0.49646C9.66773 0.49646 6.57202 3.59217 6.57202 7.3756V9.8427C6.57202 13.6178 9.65443 16.7066 13.4265 16.7199Z" fill="white"/>
          </svg>
          Management
        </button>
        <button className={selectedButton === "DepartmentsButton" ? "active" : ""} onClick={() => handleButtonClick("DepartmentsButton")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="54" viewBox="0 0 56 54" fill="none">
              <path d="M32.2697 7.14693H29.0659V3.94934H27.214V7.14693H24.0103V8.99881H27.214V12.2026H29.0659V8.99881H32.2697V7.14693Z" fill="#D34A4A"/>
              <path d="M52.2847 51.5088V10.3074H36.8054V0.0455322H19.4743V10.3074H3.99497V51.5082H0.361572V53.3601H24.0126H32.2665H55.9181V51.5082L52.2847 51.5088ZM50.4328 12.1593V51.5082H36.8054V12.1593H50.4328ZM5.84685 12.1593H19.4743V51.5082H5.84685V12.1593ZM25.8645 51.5088V39.6117C25.8645 38.3573 26.8849 37.3363 28.1398 37.3363C29.3948 37.3363 30.4152 38.3567 30.4152 39.6117V51.5082L25.8645 51.5088ZM28.1398 35.4851C25.8639 35.4851 24.0126 37.3363 24.0126 39.6123V51.5088H21.3255V10.3074V1.89742H34.9529V10.3074V51.5082H32.2658V39.6117C32.2671 37.3363 30.4158 35.4851 28.1398 35.4851Z" fill="#D34A4A"/>
              <path d="M32.2672 14.4323H24.0127V22.6867H32.2665L32.2672 14.4323ZM30.4153 20.8342H25.8652V16.2835H30.4153V20.8342Z" fill="#D34A4A"/>
              <path d="M32.2672 24.9583H24.0127V33.2128H32.2665L32.2672 24.9583ZM30.4153 31.3609H25.8652V26.8102H30.4153V31.3609Z" fill="#D34A4A"/>
              <path d="M47.7463 14.4323H39.4924V22.6867H47.7463V14.4323ZM45.8944 20.8342H41.3443V16.2835H45.8944V20.8342Z" fill="#D34A4A"/>
              <path d="M47.7463 24.9583H39.4924V33.2128H47.7463V24.9583ZM45.8944 31.3609H41.3443V26.8102H45.8944V31.3609Z" fill="#D34A4A"/>
              <path d="M47.7463 35.4852H39.4924V43.7396H47.7463V35.4852ZM45.8944 41.8877H41.3443V37.3371H45.8944V41.8877Z" fill="#D34A4A"/>
              <path d="M8.5332 14.4323V22.6867H16.7877V14.4323H8.5332ZM14.9358 20.8342H10.3851V16.2835H14.9358V20.8342Z" fill="#D34A4A"/>
              <path d="M8.5332 33.2128H16.7877V24.9583H8.5332V33.2128ZM10.3851 26.8102H14.9358V31.3609H10.3851V26.8102Z" fill="#D34A4A"/>
              <path d="M8.5332 43.7396H16.7877V35.4852H8.5332V43.7396ZM10.3851 37.3371H14.9358V41.8877H10.3851V37.3371Z" fill="#D34A4A"/>
          </svg>
          Departments
        </button>
        <button className={selectedButton === "HospitalUnitsButton" ? "active" : ""} onClick={() => handleButtonClick("HospitalUnitsButton")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="57" height="47" viewBox="0 0 57 47" fill="none">
              <path d="M28.2445 22.3088C27.7328 22.3088 27.3186 21.8946 27.3186 21.3829V12.9759C27.3186 12.4642 27.7328 12.05 28.2445 12.05C28.7563 12.05 29.1705 12.4642 29.1705 12.9759V21.3829C29.1705 21.8946 28.7557 22.3088 28.2445 22.3088Z" fill="#D34A4A"/>
              <path d="M32.4476 18.1057H24.0407C23.529 18.1057 23.1147 17.6915 23.1147 17.1798C23.1147 16.6681 23.529 16.2538 24.0407 16.2538H32.4476C32.9587 16.2538 33.3736 16.6681 33.3736 17.1798C33.3736 17.6915 32.9587 18.1057 32.4476 18.1057Z" fill="#D34A4A"/>
              <path d="M55.508 26.7713L45.2164 21.5878V14.271H49.7017C50.1239 14.271 50.4924 13.9852 50.598 13.5766C50.7036 13.1679 50.5196 12.7395 50.1498 12.5346L28.6927 0.659078C28.4137 0.504754 28.0748 0.504754 27.7957 0.659078L6.33857 12.5346C5.96943 12.7389 5.78486 13.1673 5.89042 13.5766C5.99598 13.9852 6.3645 14.271 6.78673 14.271H11.5455V21.4446L0.969962 26.7713C0.65761 26.9287 0.460693 27.2484 0.460693 27.5984V45.1636C0.460693 45.6747 0.874898 46.0895 1.38664 46.0895H12.1874C12.2362 46.0895 12.2831 46.0827 12.3294 46.0753C12.3763 46.0827 12.4232 46.0895 12.4714 46.0895H24.0401H32.4471H44.2899H55.0913C55.6024 46.0895 56.0172 45.6747 56.0172 45.1636V27.5984C56.0172 27.2484 55.8203 26.9287 55.508 26.7713ZM11.2615 44.2376H2.31258V28.1682L11.2615 23.6613V44.2376ZM12.472 12.4192H10.3726L28.2445 2.52825L46.1164 12.4192H44.2905C43.7794 12.4192 43.3645 12.8334 43.3645 13.3451V22.1588V44.2376H33.3736V31.3201C33.3736 30.809 32.9588 30.3942 32.4477 30.3942H24.0407C23.529 30.3942 23.1148 30.809 23.1148 31.3201V44.2376H13.398V13.3451C13.398 12.8334 12.9838 12.4192 12.472 12.4192ZM24.9667 44.2376V32.2461H31.5217V44.2376H24.9667ZM54.1653 44.2376H45.2164V23.662L54.1653 28.1682V44.2376Z" fill="#D34A4A"/>
          </svg>
          Hospital Units
        </button>
        <Link className='learn-more-link' to="/AboutUs">
          <button type="button">
            Learn More
          </button>
        </Link>
      </div>
      <div className="display-section">
        {selectedButton === "HistoryButton" && (
          <div className="about-us-display">
            <div className="about-left">
              <h5>History of OAUTHC</h5>
              <ul>
                <li>Founded in the early 1960s</li>
                <li>Pioneering healthcare innovations</li>
                <li>Expansion of facilities over decades</li>
                <li>Renowned for medical research</li>
                <li>Key role in community health</li>
                <li>Award-winning healthcare services</li>
              </ul>
              <p>
                Obafemi Awolowo Teaching Hospital Complex has a rich history of providing excellent healthcare services. Established in the early 1960s, it has grown significantly, expanding its facilities and services to meet the needs of a growing population.
              </p>
              <p>
                Over the years, the hospital has been at the forefront of medical research and innovation. It has received numerous awards for its contributions to the medical field and continues to play a vital role in the health and well-being of the community.
              </p>
            </div>
            <div className="about-right">
              <img src="/aboutus-toggle-image 1.png" alt="History of OAUTHC" />
              <img src="/aboutus-toggle-image 2.png" alt="History of OAUTHC" />
            </div>
          </div>
        )}
        {selectedButton === "ManagementButton" && (
          <div className="about-us-display">
            <div className="about-left">
              <h5>Management Team of OAUTHC</h5>
              <ul>
                <li>Dr. John Doe - CEO</li>
                <li>Dr. Jane Smith - Medical Director</li>
                <li>Mr. Robert Brown - Chief Financial Officer</li>
                <li>Ms. Linda Green - HR Manager</li>
                <li>Mr. Michael White - Operations Manager</li>
                <li>Mrs. Patricia Black - Chief Nursing Officer</li>
              </ul>
              <p>
                The management team at OAUTHC consists of experienced professionals dedicated to ensuring the hospital runs smoothly and efficiently. Dr. John Doe, the CEO, leads the team with a vision for excellence and innovation.
              </p>
              <p>
                Each member of the management team brings a wealth of knowledge and expertise to their respective roles, ensuring that the hospital maintains its high standards of patient care and operational efficiency.
              </p>
            </div>
            <div className="about-right">
              <img src="/aboutus-toggle-image 1.png" alt="History of OAUTHC" />
              <img src="/aboutus-toggle-image 2.png" alt="History of OAUTHC" />
            </div>
          </div>
        )}
        {selectedButton === "DepartmentsButton" && (
          <div className="about-us-display">
            <div className="about-left">
              <h5>Departments of OAUTHC</h5>
              <ul>
                <li>Department of Surgery</li>
                <li>Department of Pediatrics</li>
                <li>Department of Obstetrics and Gynecology</li>
                <li>Department of Internal Medicine</li>
                <li>Department of Radiology</li>
                <li>Department of Pathology</li>
              </ul>
              <p>
                OAUTHC is home to a variety of specialized departments that provide comprehensive medical care. The Department of Surgery offers advanced surgical procedures and post-operative care to patients.
              </p>
              <p>
                Other departments, such as Pediatrics and Obstetrics and Gynecology, focus on the unique health needs of children and women, respectively, providing specialized treatments and care.
              </p>
            </div>
            <div className="about-right">
              <img src="/aboutus-toggle-image 1.png" alt="History of OAUTHC" />
              <img src="/aboutus-toggle-image 2.png" alt="History of OAUTHC" />
            </div>
          </div>
        )}
        {selectedButton === "HospitalUnitsButton" && (
          <div className="about-us-display">
            <div className="about-left">
              <h5>Hospital Units of OAUTHC</h5>
              <ul>
                <li>Emergency Unit</li>
                <li>Intensive Care Unit (ICU)</li>
                <li>Outpatient Unit</li>
                <li>Inpatient Unit</li>
                <li>Diagnostic Imaging Unit</li>
                <li>Pharmacy Unit</li>
              </ul>
              <p>
                The hospital units at OAUTHC are equipped to handle a wide range of medical emergencies and conditions. The Emergency Unit is staffed 24/7 to provide immediate care for patients in critical condition.
              </p>
              <p>
                The Intensive Care Unit (ICU) offers specialized care for patients with severe and life-threatening illnesses, while the Outpatient and Inpatient Units provide comprehensive medical services for less critical conditions.
              </p>
            </div>
            <div className="about-right">
              <img src="/aboutus-toggle-image 1.png" alt="History of OAUTHC" />
              <img src="/aboutus-toggle-image 2.png" alt="History of OAUTHC" />
            </div>
          </div>
        )}
      </div>
    </div>
    );
};

export default AboutToggleDisplay;
