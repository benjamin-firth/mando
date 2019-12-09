import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from './UserProfile.js'

describe('UserProfile', () => {
  let wrapper;
  let mockProps;
  let mockChangePage;
  let mockHandleImgClick;

  beforeEach(() => {
    mockProps = {
      name: 'John Adams',
      quote: 'You send them to me!',
      rank: 'Master'
    }
    mockChangePage = jest.fn();
    mockHandleImgClick = jest.fn();
    wrapper = shallow(<UserProfile currentUser={mockProps} changePage={mockChangePage} handleImgClick={mockHandleImgClick}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should fire changePage when navLink is clicked', () => {
    wrapper.find('#welcome-form').simulate('click');

    expect(mockChangePage).toHaveBeenCalledWith('WelcomeForm', {}, 'hide');
  });

  it('should fire handleImgClick when other navLink is clicked', () => {
    wrapper.find('#nav-link2').simulate('click');

    expect(mockHandleImgClick).toHaveBeenCalled();
  })
})
