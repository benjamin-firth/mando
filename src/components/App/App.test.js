import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { getFilms } from '../../apiCalls';
jest.mock('../../apiCalls');

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    getFilms.mockImplementation(() => {
      return Promise.resolve({ results: ['WE DID IT'] })
    })
    wrapper = shallow(<App />);
  })

  it('should run getFilms when component is mounted', () => {
    shallow(<App />);
    expect(getFilms).toHaveBeenCalled();
  })

  it('should update state when component mounts', () => {
    //here's the OG state.
    expect(wrapper.state('filmData')).toEqual(['WE DID IT']);

    //MOUNT IT

    //CHECKNEWSTATE AND THAT GETFILMS FIRED
  })

  it('should update state when changePage is called', () => {
    let defaultState = {
      currentPage: '',
      currentUser: ''
    }
    let updatedState = {
      currentPage: 'update',
      currentUser: 'newUser',
    }

    wrapper.instance().setState(defaultState);
    wrapper.instance().changePage('update', 'newUser');

    expect(wrapper.state('currentPage')).toEqual(updatedState.currentPage);
    expect(wrapper.state('currentUser')).toEqual(updatedState.currentUser);
  })

  it('should find the correct movie based on id with filterMovie', () => {
    let mockFilmData = [
      {
        episode_id: 1,
        name: 'Mock1'
      },
      {
        episode_id: 2,
        name: 'Mock2'
      }
    ];
    let defaultState = {
      filmData: mockFilmData
    }

    wrapper.instance().setState(defaultState);
    wrapper.instance().filterMovie('2');

    expect(wrapper.state('currentMovie')).toEqual({ episode_id: 2, name: 'Mock2' });
    expect(wrapper.state('currentPage')).toEqual('CharactersPage');
  })

  it('should change the boolean for showUserProfile handleImgClick runs', () => {
    let defaultState = { showUserProfile: true };

    wrapper.instance().setState(defaultState);
    wrapper.instance().handleImgClick();

    expect(wrapper.state('showUserProfile')).toEqual(false);

    wrapper.instance().handleImgClick();

    expect(wrapper.state('showUserProfile')).toEqual(true);
  })

  it('should run handleImgClick when the image is clicked', () => {
    let defaultState = { currentPage: 'notWelcomeForm' };
    wrapper.instance().handleImgClick = jest.fn();

    wrapper.instance().setState(defaultState);

    wrapper.find('.helmet').simulate('click');

    expect(wrapper.instance().handleImgClick).toHaveBeenCalled();
  })

  it('should update favorites by removing a character when updateFaves is run', () => {
    let mockCharacterData = [
      {
        name: 'John',
        isFave: true
      },
      {
        name: 'Ben',
        isFave: true
      }
    ];
    let defaultState = { faveChaos: mockCharacterData };
    let expected = [
      {
        name: 'Ben',
        isFave: true
      }
    ];

    wrapper.instance().setState(defaultState);

    wrapper.instance().updateFaves({ name: 'John', isFave: true });

    expect(wrapper.state('faveChaos')).toEqual(expected);
  })

  it('should be able to update favorites by adding a character when updateFaves is run', () => {
    let mockCharacterData = [
      {
        name: 'John',
        isFave: true
      }
    ];
    let defaultState = { faveChaos: mockCharacterData };
    let expected = [
      {
        name: 'John',
        isFave: true
      },
      {
        name: 'Ben',
        isFave: true
      }
    ];

    wrapper.instance().setState(defaultState);

    wrapper.instance().updateFaves({ name: 'Ben', isFave: true });

    expect(wrapper.state('faveChaos')).toEqual(expected);

  })
})
