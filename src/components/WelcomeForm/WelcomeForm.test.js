import React from 'react';
import { shallow } from 'enzyme';
import WelcomeForm from './WelcomeForm.js'

describe('Welcome Form', () => {
  let wrapper;
  let mockChangePage;
  let mockErrorCheck;
  
  beforeEach(() => {
    mockChangePage = jest.fn();
    mockErrorCheck = jest.fn();
    wrapper = shallow(<WelcomeForm changePage={mockChangePage}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when handleChange is called', () => {
    const mockState = {
      currentName: '',
      currentQuote: '',
      currentRank: 'padawan',
      errorMsg: 'invisibleError'
    };
    const expected = {
      currentName: '',
      currentQuote: '',
      currentRank: 'Sith Lord',
      errorMsg: 'invisibleError'
    }
    wrapper.setState(mockState);
    wrapper.instance().handleChange('currentRank', 'Sith Lord');

    expect(wrapper.state()).toEqual(expected);
  })

  it('should call the errorCheck function when the button is clicked', () => {

    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().mockErrorCheck = jest.fn();

    wrapper.find('button').simulate('click', mockEvent);
    expect(wrapper.instance().mockErrorCheck).toHaveBeenCalled();
  })


})