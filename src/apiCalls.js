export const getFilmData = (film) => {
  return fetch(film)
    .then(res => {
      if (!res.ok) {
        throw Error('OH NO. THERE IS BLOOD EVERYWHERE');
      }
      return res.json()
    })
}

export const getCharacterHomeworld = (homeworld) => {
  return fetch(homeworld)
    .then(res => {
      if (!res.ok) {
        throw Error('WE ARE TOO POWERFUL');
      }
      return res.json()
    })
}

export const getCharacterSpecies = (species) => {
  return fetch(species)
    .then(res => {
      if (!res.ok) {
        throw Error('WE ARE TOO POWERFUL');
      }
      return res.json()
    })
}

export const fetchIndividualData = (character) => {
  return fetch(character)
    .then(res => {
      if (!res.ok) {
        throw Error('BEN GET YOUR NIMBUS 2000');
      }
      return res.json()
    })
}

export const getFilms = () => {
  return fetch('https://swapi.co/api/films/')
  .then(response => {
    if (!response.ok) {
      throw Error('BEN THERE IS AN ERROR');
    }
    return response.json()
  })
}
