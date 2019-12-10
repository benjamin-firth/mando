import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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

Movie.propTypes = {
  title: PropTypes.string,
  episode: PropTypes.number,
  release: PropTypes.string,
  opening: PropTypes.string,
  image: PropTypes.string,
  filterMovie: PropTypes.func
}

export default Movie;
