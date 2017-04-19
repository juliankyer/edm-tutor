import React from 'react';
import { Link } from 'react-router';
import { shallow } from 'enzyme';

import Home from '../../components/Home';

describe('Home component', () => {
  it('should render a link to enter the main site', () => {
    const wrapper = shallow(<Home />);
    
    expect(wrapper.find('Link').length).toEqual(1);
  });
  
  it('should display a background video', () => {
    const wrapper = shallow(<Home />);
    
    expect(wrapper.find('.splash-video').length).toEqual(1);
  });
});