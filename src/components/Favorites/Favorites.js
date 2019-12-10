import React from 'react';
import Character from '../Character/Character.js';
import PropTypes from 'prop-types';

const Favorites = ({ faves, updateFave }) => {
    if (faves.length === 0) {
      return <h1>Sorry, No Faves</h1>
    }
    let characters = faves.map(character => {
      return <Character {...character} isFave={true} updateFave={updateFave}/>
    });

    return (
      <section className="favorite">
        <h1>Your Faves:</h1>
          {characters}
      </section>
    )
}

Favorites.propTypes = {
  faves: PropTypes.array,
  updateFave: PropTypes.func
}

export default Favorites;
