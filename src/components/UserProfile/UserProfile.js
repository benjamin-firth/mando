import React from 'react';

const UserProfile = ({ currentUser }) => {
  return (
    <nav>
      <h3>{currentUser.currentName}</h3>
      <p>{currentUser.currentQuote}</p>
      <h4>{currentUser.currentRank}</h4>
    </nav>
  )
}

export default UserProfile;