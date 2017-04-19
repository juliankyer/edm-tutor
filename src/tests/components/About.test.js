import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, mount, render } from 'enzyme';
import { Link } from 'react-router';

import About from '../../components/About';
import Navigation from '../../components/Navigation';

describe('About component', () => {
  
  it('should render some basic HTML components', () => {
    const AboutComponent = shallow(
      <About />
    );
    const paragraph = AboutComponent.find('p');
    const header = AboutComponent.find('h1');
    
    expect(paragraph.length).toEqual(4);
    expect(header.length).toEqual(1);
  });

  it('should render a nav bar', () => {
    const AboutComponent = shallow(<About />);
    
    expect(AboutComponent.find('.navigation').length).toEqual(1);
  });
});