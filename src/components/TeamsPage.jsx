import React, { useState } from 'react';
import AddTeamPopup from './AddTeamPopup';
import '../App.css';

const TeamsPage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [teams, setTeams] = useState([]);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleAddTeam = (teamName, description) => {
    const newTeam = {
      teamName,
      description,
    };
    setTeams([...teams, newTeam]);
  };

  return (
    <div className="team-page">
      <div style={{  width: '100%', float: 'left' ,backgroundColor: '#430df4'}}>
        <h1>Team Management</h1>
      </div>

      <div style={{  float: 'right', width: '100%',alignitems: 'center',textAlign: 'right' , backgroundColor: '#430df4'}}>
        <button onClick={handleOpenPopup}>Add Team</button>
      </div>
<br /><br /><br /><br />
      <h1>Team List</h1>

      {isPopupOpen && (
        <AddTeamPopup onClose={handleClosePopup} onAddTeam={handleAddTeam} />
      )}

      {/* Render teams list */}
      {teams.map((team) => (
        <div key={team.teamName}>
          <h3>{team.teamName}</h3>
          <p>{team.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamsPage;
