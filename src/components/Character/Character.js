import React from 'react';
import Loading from '../Loading/Loading.js';

const Character = ({ homeworld, name, population, species, films, updateFave, isFave }) => {
  if (!name) {
    return <Loading />
  }
  let filmList = films.map(film => <li>{film}</li>)
  return (
    <article className="character-card">
      <div>
        <h2>{name}</h2>
        <p>Homeworld: {homeworld}</p>
        <p>Homeworld Population: {population}</p>
        <p>Species: {species}</p>
        <ul>Films: {filmList}</ul>
      </div>
      <button onClick={() => updateFave({homeworld, name, population, species, films})}>{isFave ? "UnFavorite Dis" : "Fave Dis"}</button>
    </article>
  )
}

export default Character;
