import React from 'react';
import TeamCarousel from './TeamCarousel';

export const teamMembersData = [
  {
    name: "Olarewaju Olajide Omonije",
    position: "Acting Director of Administration",
    image: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/public/team-members-1.png?raw=true",
    linkedIn: "https://www.linkedin.com/johndoe",
    facebook: "https://www.facebook.com/johndoe",
    instagram: "https://www.instagram.com/johndoe",
  },
  {
      name: "Prof. John A. O. Okeniyi",
      position: "Chief Medical Director",
      image: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/public/team-members-3.png?raw=true",
      linkedIn: "https://www.linkedin.com/johndoe",
      facebook: "https://www.facebook.com/johndoe",
      instagram: "https://www.instagram.com/johndoe",
  },
  {
      name: "Prof. Josephine E. A. Eziyi",
      position: "Chairman, Medical Advisory Committee",
      image: "https://github.com/btom7447/OAUTHC-WEBSITE/blob/master/public/team-members-2.png?raw=true",
      linkedIn: "https://www.linkedin.com/johndoe",
      facebook: "https://www.facebook.com/johndoe",
      instagram: "https://www.instagram.com/johndoe",
  },
];

  
const TeamMembersContainer = () => {

  return (
    <div className="professionals-container">
        <div className="our-professionals-caption">
            <h5>Trusted Health Professionals</h5>
            <h3>Our Professionals</h3>
        </div>
        <TeamCarousel teamMembersData={teamMembersData} />
    </div>
  );
};

export default TeamMembersContainer;
