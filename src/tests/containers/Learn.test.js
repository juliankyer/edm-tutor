import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
// import { Provider } from 'react-redux';
// import configureMockStore from 'redux-mock-store';
import genres from '../../data/genres';
import Learn from '../../components/Learn';

describe('Learn component', () => {
  
  it('should render one card per genre', () => {
    const wrapper = shallow(
      <Learn />
    );
    
    expect(wrapper.find('.genre-card').length).toEqual(genres.length);
  });
  
  it('each card should have a genre displayed and an id', () => {
    const wrapper = shallow(
      <Learn />
    );
    
    expect(wrapper.find('h1').length).toEqual(genres.length);
    expect(wrapper.find('key').first).toEqual(genres[0].id);
  });
  
});

