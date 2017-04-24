const loveHandle = (state=[], action) => {
  switch (action.type) {
    case 'LOVE_HANDLE':
      return [...state, {
        id: action.id,
        song: action.song.title,
        artist: action.song.artist,
        video: action.song.video
      }];
    default:
      return state;
  }
}

export default loveHandle;