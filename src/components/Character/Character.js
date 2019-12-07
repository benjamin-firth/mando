import React from 'react';
import logo from '../../logo.svg';
import Loading from '../Loading/Loading.js';

const Character = ({ homeworld, name, population, species, films, updateFave }) => {
  if (!name) {
    return <Loading />
  }
  let filmList = films.map(film => <li>{film}</li>)
  return (
    <article className="movie">
      <div>
        <h2>{name}</h2>
        <p>Homeworld: {homeworld}</p>
        <p>Homeworld Population: {population}</p>
        <p>Species: {species}</p>
        <ul>Films: {filmList}</ul>
      </div>
      <img src={logo} className="movie-picture" alt="Movie Poster" />
      <button onClick={() => updateFave({homeworld, name, population, species, films})}>Fave Dis</button>
    </article>
  )
}

export default Character;
