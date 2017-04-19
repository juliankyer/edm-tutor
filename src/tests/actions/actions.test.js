import configureMockStore from 'redux-mock-store';
import { genreClicked, loveHandle } from '../../actions/actions';

const store = configureMockStore()();

const mockData = {
  genre: 'deep house',
  title: 'One Deeper',
  artist: 'DJ Hanzel',
  video: 'https://www.youtube.com'
}

describe('actions', () => {
  
  afterEach(() => {
    store.clearActions();
  });
  
  it('creates CLICK_GENRE when initiating the genreClicked action', () => {
    let expectedAction = { type: 'CLICK_GENRE', genre: mockData.genre };
    store.dispatch(genreClicked(mockData.genre));
    let createdActions = store.getActions();
    expect(createdActions.length).toEqual(1);
    expect(createdActions[0]).toEqual(expectedAction);
  });
  
  it('creates LOVE_HANDLE when initiating the loveHandle action', () => {
    let expectedAction = { type: 'LOVE_HANDLE', title: mockData.title, artist: mockData.artist, video:mockData.video };
    store.dispatch(loveHandle(mockData.title, mockData.artist, mockData.video));
    let createdActions = store.getActions();
    expect(createdActions.length).toEqual(1);
    expect(createdActions[0]).toEqual(expectedAction);
  });
});