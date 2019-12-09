import React, { Component } from 'react';
import Character from '../Character/Character.js';
import FilmScript from '../FilmScript/FilmScript.js';

class CharactersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: props.currentMovie.characters,
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

  checkFave = (character) => {
    if (this.props.faves.find(fave => fave.name === character.name)) {
      return true;
    } else {
      return false;
    }
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
    let characters = this.state.characters.map(character => {
      return <Character {...character} isFave={this.checkFave(character)} updateFave={this.props.updateFave}
      key={character.name} />
    })

    return (
      <section className="characters-container">
        <FilmScript 
          crawl={this.props.currentMovie.opening_crawl}
          filmTitle={this.props.currentMovie.title}/>
        <section className="characters">
          {characters}
        </section>  
      </section>
    )
  }
}

export default CharactersPage;
