import React from 'react';

const UserProfile = ({ currentUser }) => {
  return (
    <section>
      <h3>Name: {currentUser.name}</h3>
      <p>Quote: {currentUser.quote}</p>
      <h4>Experience Level: {currentUser.rank}</h4>
    </section>
  )
}

export default UserProfile;