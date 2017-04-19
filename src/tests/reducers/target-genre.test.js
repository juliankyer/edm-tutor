import targetGenre from '../../reducers/target-genre';

const initialState = '';

describe('target-genre reducer', () => {
  
  it('should return initial state by default', () => {
    expect(targetGenre(undefined, {})).toEqual(initialState)
  });
  
  it('should return a genre when action is CLICK_GENRE', () => {
    const genre = 'deep house';
    
    expect(targetGenre(undefined, {
      type: 'CLICK_GENRE',
      genre
    })).toEqual(genre);
  });
    
});