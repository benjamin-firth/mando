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
