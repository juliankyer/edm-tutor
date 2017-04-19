import React from 'react';
import sinon from 'sinon';
import { render, shallow } from 'enzyme';

import Genre from '../../components/Genre';
import Video from '../../components/Video';


describe('Genre component', () => {
  it.skip('should call componentDidMount', () => {
    sinon.spy(Genre.prototype, 'componentDidMount');
    const wrapper = shallow(<Genre />);
    expect(Genre.prototype.componentDidMount.calledOnce).toEqual(true);
  });
  
  it.skip('should call componentWillMount', () => {
    sinon.spy(Genre.prototype, 'componentWillMount');
    const wrapper = shallow(<Genre />);
    expect(Genre.prototype.componentWillMount.calledOnce).toEqual(true);
  });
  
  it.skip('should call genreClicked on componentDidMount', () => {
    sinon.spy(Genre.props, 'genreClicked');
    const wrapper = shallow(<Genre />);
    expect(Genre.props.genreClicked.calledOnce).toEqual(true);
  });
  
  it.skip('should call getVideos on componentDidMount', () => {
    sinon.spy(Genre.prototype, 'componentDidMount');
    const wrapper = shallow(<Genre />);
    expect(Genre.props.getVideos.calledOnce).toEqual(true);
  });
  
  it.skip('should render one Video', () => {
    const wrapper = render(<Genre />);
    expect(wrapper.find(Video)).to.have.length(1);
  });
  
  it.skip('should display video information', () => {
    //genre header, title, artist, description
  });
  
  it.skip('should call loveHandle when heart is clicked', () => {
    
  });
});