import React from 'react';
import { shallow } from 'enzyme';
import CharactersPage from './CharactersPage.js';
import { getFilmData, getCharacterHomeworld, getCharacterSpecies, fetchIndividualData } from '../../apiCalls';

describe('Characters Page', () => {
  let wrapper;
  let mockUpdateFave;
  let mockFaves;
  let mockCurrentMovie;

  beforeEach(() => {
    mockUpdateFave = jest.fn();
    mockFaves = [{ name: 'Johnny' }];
    mockCurrentMovie = {
      name: 'Johnny Tsunami',
      episode: 10,
      release: '1999-07-24',
      characters: ['Johnny', 'Tsunami', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      opening: 'In a world, torn apart by the impending death of all humanity from Y2K, one surfer boy hopes to shed light on the important things in life'
    }
    wrapper = shallow(<CharactersPage
      faves={mockFaves}
      currentMovie={mockCurrentMovie}
      updateFave={mockUpdateFave}
    />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should grab the first ten characters with findCharacters function', () => {
    let expected = ['Johnny', 'Tsunami', '1', '2', '3', '4', '5', '6', '7', '8']
    expect(wrapper.instance().findCharacters()).toEqual(expected);
  })

  it('should return true if the character is favorited with checkFave function', () => {
    let mockCharacter = { name: 'Johnny' };
    expect(wrapper.instance().checkFave(mockCharacter)).toEqual(true);
  })

  it('should return false if character is not favorited with checkFave function', () => {
    let mockCharacter = { name: 'Not Johnny' };
    expect(wrapper.instance().checkFave(mockCharacter)).toEqual(false);
  })

  describe('Promise all character data', () => {
    let mockreturnObject;
    let mockCharacter;

    beforeEach(() => {
      // getCharacterHomeworld = jest.fn().mockImplementation(() => {
      //   return Promise.resolve({name: 'fake-name', population: 'fake-pop'})
      // });
      // getCharacterSpecies = jest.fn().mockImplementation(() => {
      //   return Promise.resolve({ name: 'fake-speciesname' })
      // });
      // wrapper.instance().getFilms = jest.fn().mockImplementation(() => {
      //   return Promise.resolve([{title: 'test-one'}, {title: 'test-two'}])
      // })

      mockCharacter = { name: 'Ben Kenobi', species: ['Human'], films: ['Billy Madison'], homeworld: 'Earth' }
      mockreturnObject = [
        { name: 'fake-name', population: 'fake-pop'},
        { name: 'fake-speciesname' },
        [{title: 'test-one'}, {title: 'test-two'}]
      ];

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(...mockreturnObject)
        })
      })
    })

    it('Should return a full character object', async () => {
      const expected = {
        name: 'Ben Kenobi',
        homeworld: 'fake-name',
        population: 'fake-pop',
        species: 'fake-speciesname',
        films: ['test-one', 'test-two']
      }

      const result = await wrapper.instance().getIndividualData(mockCharacter);
      expect(result).toEqual(expected);
    })
  })
})
