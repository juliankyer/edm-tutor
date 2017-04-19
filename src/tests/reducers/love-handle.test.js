import loveHandle from '../../reducers/love-handle';

const initialState = [];

describe('target-genre reducer', () => {
  
  it('should return initial state by default', () => {
    expect(loveHandle(undefined, [])).toEqual(initialState)
  });
  
  it('should return a song array is LOVE_HANDLE', () => {
    const loved = [{
      song: 'DeepHaus',
      artist: 'Hanzel',
      video: 'www.deephaus.com'
    }];
    
    expect(loveHandle(undefined, {
      type: 'LOVE_HANDLE',
      title: 'DeepHaus',
      artist: 'Hanzel',
      video: 'www.deephaus.com'
    })).toEqual(loved);
  });
});