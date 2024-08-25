import React from 'react';
import { useParams } from 'react-router-dom';

const TeamMemberDetails = ({ teamMembersData }) => {
  const { name } = useParams();
  const formattedName = name.split('-').join(' ');

  const member = teamMembersData.find(member => member.name.toLowerCase() === formattedName.toLowerCase());

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div className="team-member-details">
      <h1>Team member details</h1>
      <img src={member.image} alt={member.name} />
      <h2>{member.name}</h2>
      <h4>{member.position}</h4>
      <p>LinkedIn: <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">{member.linkedIn}</a></p>
      <p>Facebook: <a href={member.facebook} target="_blank" rel="noopener noreferrer">{member.facebook}</a></p>
      <p>Instagram: <a href={member.instagram} target="_blank" rel="noopener noreferrer">{member.instagram}</a></p>
    </div>
  );
};

export default TeamMemberDetails;