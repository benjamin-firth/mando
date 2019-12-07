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

  getFilmData(films) {
    let filmPromises = films.map(film => {
      return fetch(film)
        .then(res => res.json())
        // .then(data => data.map(movie => movie.title))
    })

    return Promise.all(filmPromises)
  }

  getIndividualData(character) {
    console.log(character);
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
    //{name: "Obi-Wan Kenobi", height: "182", mass: "77", hair_color: "auburn, white", skin_color: "fair", …}
// birth_year: "57BBY"
// created: "2014-12-10T16:16:29.192000Z"
// edited: "2014-12-20T21:17:50.325000Z"
// eye_color: "blue-gray"
// films: (6) ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/5/", "https://swapi.co/api/films/4/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/"]
// gender: "male"
// hair_color: "auburn, white"
// height: "182"
// homeworld: "https://swapi.co/api/planets/20/"
// mass: "77"
// name: "Obi-Wan Kenobi"
// skin_color: "fair"
// species: ["https://swapi.co/api/species/1/"]
// starships: (5) ["https://swapi.co/api/starships/48/", "https://swapi.co/api/starships/59/", "https://swapi.co/api/starships/64/", "https://swapi.co/api/starships/65/", "https://swapi.co/api/starships/74/"]
// url: "https://swapi.co/api/people/10/"
// vehicles: ["https://swapi.co/api/vehicles/38/
  }

  componentDidMount() {
    //at some point make the character into an object... but not sure when.
    let characters = this.findCharacters();
    console.log(characters);
    let promises = characters.map(character => {
      return fetch(character)
        .then(res => res.json())
        .then(data => this.getIndividualData(data))
        // .then(fullCharacter => {
        //   //fullCharacter is array of promises that are complete for character... return the new promise object with the right key/value pairs that we want...
        // })
    })
    Promise.all(promises)
      .then(data => {
        console.log(data);
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
