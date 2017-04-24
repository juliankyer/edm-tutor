const loveHandle = (state=[], action) => {
  switch (action.type) {
    case 'LOVE_HANDLE':
      return [...state, {
        id: action.song.id,
        song: action.song.title,
        artist: action.song.artist,
        video: action.song.video
      }];
    case 'REMOVE_FAV':
      return state.filter(track => track.id !== action.song.id);
    default:
      return state;
  }
}

export default loveHandle;