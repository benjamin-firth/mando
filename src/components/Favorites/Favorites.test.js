import React from 'react';
import { shallow } from 'enzyme';
import Favorites from './Favorites.js';

describe('Favorites', () => {
  it('should match the snapshot when there are no favorites', () => {
    let wrapper = shallow(<Favorites faves={[]}/>);

    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot when there are favorites', () => {
    let wrapper = shallow(<Favorites faves={['favorite1, favorite2, favorite3']} />);

    expect(wrapper).toMatchSnapshot();
  })
})
