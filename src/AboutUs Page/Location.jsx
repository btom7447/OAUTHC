import React from "react";
import { CurrentSectionProvider } from "../General Components/CurrentSectionContent";
import PageCaption from "../General Components/PageCaption";
import SectionWrapper from "../General Components/SectionWrapper";
import HospitalUnits from "./HospitalUnits";

export const unitData = [
    {
        unitPoster: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/ife-unit.png?raw=true", 
        unitName: "Ife Hospital Unit", 
        unitLocation: "Ile-Ife, Osun State", 
        exactLocation: "Ilesa Road, Ile-Ife."
    },
    {
        unitPoster: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/locationsPicture%201.png?raw=true", 
        unitName: "Ijeshaland Geriatric Centre", 
        unitLocation: "Ilesa, Osun State", 
        exactLocation: "Ijebu-Jesa Road, Ilesa."

    },
    {
        unitPoster: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/locationsPicture%204.jpg?raw=true", 
        unitName: "Rural Comprehensie Health Centre", 
        unitLocation: "Imesi-Ile, Osun State", 
        exactLocation: "Imesi-Ile"

    },
    {
        unitPoster: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/locationsPicture%205.jpg?raw=true", 
        unitName: "Urban Comprehensive Health Centre", 
        unitLocation: "Ile-Ife, Osun State", 
        exactLocation: "Eleyele Street, Ile-Ife"

    },
    {
        unitPoster: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/wesley-guild-unit.png?raw=true", 
        unitName: "Wesley Guild Hospital Unit", 
        unitLocation: "Ilesa, Osun State", 
        exactLocation: "Ijofi Road, Ilesa."

    },
];

const Location = () => {
    return(
        <CurrentSectionProvider>
            <PageCaption />
            <SectionWrapper sectionName="Location">
                <div className="oauthc-location">
                    <div className="oauthc-location-caption">
                        <p>
                            Our hospital is committed to providing quality healthcare to patients in various locations. We have multiple units spread across the region, each equipped with state-of-the-art facilities and staffed by experienced healthcare professionals. Whether you're in need of emergency care, routine check-ups, or specialized treatment, our hospitals are conveniently located to serve you.
                        </p>
                        <p>
                            From urban centers to rural areas, our hospitals are easily accessible by car or public transportation. We understand the importance of timely medical attention, which is why we've strategically positioned our units to minimize travel time and maximize care. Browse our list of locations to find the hospital nearest you, and rest assured that you'll receive the same high standard of care at any of our facilities.                        
                        </p>
                    </div>
                    <HospitalUnits unitData={unitData} />
                </div>
            </SectionWrapper>
        </CurrentSectionProvider>
    )
}; 

export default Location;