import React from 'react';

const Movie = ({ title, episode, release, opening, image }) => {
  return (
    <article className="movie">
      <div>
        <h2>{title}</h2>
        <p>Episode #{episode}</p>
        <p>Release Year: {release}</p>
        <button type="button">View Characters</button>
      </div>
      <img src={image} className="movie-picture" alt="Movie Poster" />
    </article>
  )
}

export default Movie;
