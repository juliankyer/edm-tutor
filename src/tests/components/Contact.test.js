import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../../components/Contact';

describe('Contact component', () => {
  
  it('should render some basic HTML components', () => {
    const ContactComponent = shallow(
      <Contact />
    );
    const header = ContactComponent.find('h1');
    const paragraph = ContactComponent.find('p');
    const link = ContactComponent.find('a');
    
    expect(paragraph.length).toEqual(3);
    expect(header.length).toEqual(1);
    expect(link.length).toEqual(1);
  });
});