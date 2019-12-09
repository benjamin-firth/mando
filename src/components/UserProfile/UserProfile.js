import React from 'react';
import { NavLink } from 'react-router-dom';

const UserProfile = ({ currentUser, changePage, handleImgClick }) => {
  return (
    <section className='profile-box'>
      <h3>Name: {currentUser.name}</h3>
      <p>"{currentUser.quote}"</p>
      <h4>Experience Level: {currentUser.rank}</h4>
      <NavLink id='welcome-form' onClick={() => changePage('WelcomeForm', {}, 'hide')} exact to={'/'}>Log Out</NavLink>
      <NavLink id='nav-link2' exact to={'/movie-page'} onClick={() => handleImgClick()}>Home</NavLink>
    </section>
  )
}

export default UserProfile;
