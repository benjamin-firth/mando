import React from 'react';
import { NavLink } from 'react-router-dom';

const Movie = ({ title, episode, release, opening, image, filterMovie }) => {
  return (
    <article className="movie">
      <div>
        <h2>{title}</h2>
        <p>Episode #{episode}</p>
        <p>Release Year: {release}</p>
        <NavLink id={episode} className='character-button' to={`/characters-page/${episode}`}>View Characters</NavLink>
      </div>
      <img src={image} className="movie-picture" alt="Movie Poster" />
    </article>
  )
}

export default Movie;
