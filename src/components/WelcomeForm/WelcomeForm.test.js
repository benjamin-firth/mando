import React from 'react';
import { shallow } from 'enzyme';
import WelcomeForm from './WelcomeForm.js'

describe('Welcome Form', () => {
  let wrapper;
  let mockChangePage;

  beforeEach(() => {
    mockChangePage = jest.fn();
    wrapper = shallow(<WelcomeForm changePage={mockChangePage} history={{ push: () => true}}/>)
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

  describe('errorCheck method', () => {
    it('should set an error if the inputs are empty', () => {
      const mockEvent = { preventDefault: jest.fn() };
      expect(wrapper.state('errorMsg')).toBe('invisibleError');
      wrapper.find('button').simulate('click', mockEvent);
      expect(wrapper.state('errorMsg')).toBe('visibleError');
    });
    it('should not set an error if the inputs are filled', () => {
      const mockEvent = { preventDefault: jest.fn() };
      expect(wrapper.state('errorMsg')).toBe('invisibleError');
      wrapper.instance().handleChange('currentName', 'Ben');
      wrapper
        .instance()
        .handleChange('currentQuote', 'Lifes a box of chocolates');
      wrapper.find('button').simulate('click', mockEvent);
      expect(wrapper.state('errorMsg')).toBe('invisibleError');
    });
  });

  it('should run handleChange when the input is changed', () => {
    wrapper.instance().handleChange = jest.fn();
    const mockEvent = {
      preventDefault: jest.fn(),
      target: {
        name: 'name',
        value: 'John Adams'
      }
    };

    wrapper.find('input').at(0).simulate('change', mockEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalled();

  })

  it('should run handleChange when the second input is changed', () => {
    wrapper.instance().handleChange = jest.fn();
    const mockEvent = {
      preventDefault: jest.fn(),
      target: {
        name: 'quote',
        value: 'John Adams'
      }
    };

    wrapper.find('input').at(1).simulate('change', mockEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalled();

  })

  it('should run handleChange when the select is changed', () => {
    wrapper.instance().handleChange = jest.fn();
    const mockEvent = {
      preventDefault: jest.fn(),
      target: {
        name: 'currentRank',
        value: 'Ultimate Jedi'
      }
    };

    wrapper.find('select').simulate('change', mockEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalled();
  })


})
