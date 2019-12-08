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
    mockFaves = [];
    mockCurrentMovie = {
      name: 'Johnny Tsunami',
      episode: 10,
      release: '1999-07-24',
      characters: ['Johnny', 'Tsunami'],
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
})
