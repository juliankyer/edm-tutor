const loveHandle = (state=[], action) => {
  switch (action.type) {
    case 'LOVE_HANDLE':
      return [...state, {
        song: action.title,
        artist: action.artist,
        video: action.video
      }];
    default:
      return state;
  }
}

export default loveHandle;