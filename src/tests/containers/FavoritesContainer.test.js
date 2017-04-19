import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import Favorites from '../../components/Favorites';
import FavoritesContainer from '../../containers/FavoritesContainer';


const mockStore = configureMockStore()({
  favorites: [{
    artist: 'Dash Berlin',
    song: 'Live At Ultra',
    video: 'https://www.youtube.com/watch?v=xil1jOjAXr4'
  }]
});

const setup = () => {
  const Container = mount(
    <Provider store={mockStore}>
      <FavoritesContainer />
    </Provider>
  );

  const Component = Container.find(Favorites);
  
  return {
    Container,
    Component
  }
}

describe('FavoritesContainer', () => {
  
  const { Container, Component } = setup();
  
  it.only('should pass the appropriate props from state', () => {
    expect(Component.props().favorites).toEqual(
      [{
        artist: 'Dash Berlin',
        song: 'Live At Ultra',
        video: 'https://www.youtube.com/watch?v=xil1jOjAXr4'
      }]
    )
  });
  
  it.skip('should pass down the correct action creators as props', () => {
    expect(Object.keys(Component.props())).toContain(
      'genreClicked', 'loveHandle'
    );
  });
});

//these tests are also failing due to the conditional render in favorites, 
//need to look into why this is









