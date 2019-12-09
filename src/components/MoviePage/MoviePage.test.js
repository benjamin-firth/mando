import React from 'react';
import { shallow } from 'enzyme';
import MoviePage from './MoviePage.js';

describe('MoviePage', () => {
  let wrapper;
  let mockMovie1;
  let mockMovie2;
  let mockMovie3;

  beforeEach(() => {
    mockMovie1 = { episode_id: 1 };
    mockMovie2 = { episode_id: 2 };
    mockMovie3 = { episode_id: 3 };
    wrapper = shallow(<
      MoviePage
      filmData={[mockMovie3, mockMovie2, mockMovie1]}
    />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should order the filmData based on episode id', () => {
    let expected = [mockMovie1, mockMovie2, mockMovie3];

    let orderedWrapper = shallow(<
      MoviePage
      filmData={expected}
    />);

    expect(wrapper).toEqual(orderedWrapper);
  })
})
