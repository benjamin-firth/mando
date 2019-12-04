import React from 'react';
import { shallow } from 'enzyme';
import WelcomeForm from './WelcomeForm.js'

describe('Welcome Form', () => {
  let wrapper;
  let mockChangePage;
  
  beforeEach(() => {
    mockChangePage = jest.fn();
    wrapper = shallow(<WelcomeForm changePage={mockChangePage}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})