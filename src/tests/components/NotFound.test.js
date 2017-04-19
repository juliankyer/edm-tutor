import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../../components/NotFound';

describe('NotFound component', () => {
  it('render a message indicating a bad route', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find('h1').text()).toEqual('There is no deep house party here');
  });
});