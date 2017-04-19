import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, mount, render } from 'enzyme';
import { Link } from 'react-router';

import About from '../../components/About';

describe('About component', () => {
  
  it('should render a nav bar and some basic HTML components', () => {
    const AboutComponent = shallow(
      <About />
    );
    const paragraph = AboutComponent.find('p');
    const header = AboutComponent.find('h1');
    
    expect(paragraph.length).toEqual(4);
    expect(header.length).toEqual(1);
  });
  // 
  // it('should render a nav-bar', () => {
  //   const AboutComponent = mount(
  //     <About />
  //   );
  //   
  //   const NavBar = AboutComponent.find('.navigation');
  //   expect(NavBar.length).toEqual(1);
  // });
});