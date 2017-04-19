import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Favorites from '../../components/Favorites';

const mockData = {
  genre: 'deep house',
  title: 'One Deeper',
  artist: 'DJ Hanzel',
  video: 'https://www.youtube.com'
}

describe('Favorites component', () => {
  
  it.only('should render an error message if no favorites available', () => {
    const wrapper = shallow(<Favorites />);
    expect(checkForFavorites()).toHaveBeenCalled();
    //something is blowing up on line 7, it doesn't like the condition check 
    //not sure why it will render on the dom with no error, but throws error in test
  });
  
  it.skip('should render favorited songs', () => {
    const wrapper = shallow(<Favorites />);
    //pass in some liked songs
    
  });
});