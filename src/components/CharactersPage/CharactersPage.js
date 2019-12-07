import React, { Component } from 'react';

class CharactersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: props.currentMovie.characters
    }
  }

  findCharacters = () => {
    let firstTen = []
    let i = 0;
    while (i < 10) {
      firstTen.push(this.state.characters[i]);
      i++;
    }
    return firstTen;
  }

  getFilmData = (films) => {
    let filmPromises = films.map(film => {
      return fetch(film)
        .then(res => res.json())
    })
    return Promise.all(filmPromises)
  }

  getIndividualData = (character) => {
    let homeworld = fetch(character.homeworld)
                      .then(res => res.json())

    let species = fetch(character.species[0])
                      .then(res => res.json())

    let films = this.getFilmData(character.films);

    return Promise.all([homeworld, species, films])
      .then(fetches => {
        let filmNames = fetches[2].map(movie => movie.title);
        let fullCharacterObject = {
          name: character.name,
          homeworld: fetches[0].name,
          population: fetches[0].population,
          species: fetches[1].name,
          films: filmNames
        }
        return fullCharacterObject;
      })
  }

  componentDidMount() {
    let characters = this.findCharacters();
    let promises = characters.map(character => {
      return fetch(character)
        .then(res => res.json())
        .then(data => this.getIndividualData(data))
    })
    Promise.all(promises)
      .then(data => {
        this.setState({ characters: data })
      })
  }

  render() {

    return (
      <h1>Hell yeah brutherrrrrr....</h1>
    )
  }
}

export default CharactersPage;
