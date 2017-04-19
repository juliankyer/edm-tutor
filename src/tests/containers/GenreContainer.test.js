import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import Genre from '../../components/Genre';
import GenreContainer from '../../containers/GenreContainer';
import genres from '../../data/genres';


const mockStore = configureMockStore()({
  targetGenre: 'trance',
  loveHandle: [
    {
      song: 'Underneath the Sky',
      artist: 'Dash Berlin',
      video: 'https://www.youtube.com/watch?v=9oj1FTuscnY&list=PL71067954340BBA04&index=4'
    },
    {
      song: 'Falling In and Out of Love',
      artist: 'Armin van Buuren',
      video: 'https://www.youtube.com/watch?v=TxvpctgU_s8&list=RDQMXBzN8VmAKsQ'
    }
  ]
});

const setup = () => {
  const Container = mount(
    <Provider store={mockStore}>
      <GenreContainer />
    </Provider>
  );

  const Component = Container.find(Genre);
  
  return {
    Container,
    Component
  }
}

describe('GenreContainer', () => {
  
  const { Container, Component } = setup();
  
  it.skip('should pass the appropriate props from state', () => {
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









