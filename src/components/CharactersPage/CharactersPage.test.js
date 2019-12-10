import React from 'react';
import { shallow } from 'enzyme';
import CharactersPage from './CharactersPage.js';

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

})
