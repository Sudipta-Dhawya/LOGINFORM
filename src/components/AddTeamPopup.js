import React, { useState } from 'react';

const AddTeamPopup = ({ onClose, onAddTeam }) => {
  const [teamName, setTeamName] = useState('');
  const [description, setDescription] = useState('');

  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddTeam = () => {
    // Perform any validation or data processing here before adding the team
    onAddTeam(teamName, description);
    setTeamName('');
    setDescription('');
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Add Team</h2>
        <label htmlFor="team-name">Team Name:</label>
        <input
          type="text"
          id="team-name"
          value={teamName}
          onChange={handleTeamNameChange}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <button onClick={handleAddTeam}>Add Team</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddTeamPopup;
