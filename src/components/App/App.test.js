import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
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

    wrapper.find('img').simulate('click');

    expect(wrapper.instance().handleImgClick).toHaveBeenCalled();
  })

  it('should update favorites by removing a character when updateFaves is run', () => {

  })

  it('should be able to update favorites by adding a character when updateFaves is run', () => {
    
  })
})
