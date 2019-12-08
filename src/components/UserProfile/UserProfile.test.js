import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from './UserProfile.js'

describe('UserProfile', () => {
  let wrapper;
  let mockProps;


  beforeEach(() => {
    mockProps = {
      name: 'John Adams',
      quote: 'You send them to me!',
      rank: 'Master'
    }
    wrapper = shallow(<UserProfile currentUser={mockProps}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})