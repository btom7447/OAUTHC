import React, { useContext } from "react";
import { CurrentSectionProvider } from "../Components/CurrentSectionContent";
import PageCaption from "../Components/PageCaption";
import SectionWrapper from "../Components/SectionWrapper";
import HospitalUnits from "../Components/HospitalUnits";
import {DepartmentContext} from "../Components/DepartmentProvider";

const Location = () => {
    const { units } = useContext(DepartmentContext);

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
                            From urban centers to rural areas, our hospitals are easily accessible by car or public transportation. We understand the importance of timely medical attention, which is why we've strategically positioned our units to minimize travel time and maximize care. Browse our list of locations to find the hospital nearest you, and rest assured that you'll receive the same high standard of care at any of our facilities.
                        </p>
                    </div>
                    <HospitalUnits unitData={units} /> 
                </div>
            </SectionWrapper>
        </CurrentSectionProvider>
    );
};

export default Location;
