import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading.js';

describe('Loading', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<Loading />);

    expect(wrapper).toMatchSnapshot();
  })
})
