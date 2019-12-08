import React from 'react';
import { FilmScript } from './FilmScript';
import { shallow } from 'enzyme';

describe('FilmScript', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FilmScript />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})