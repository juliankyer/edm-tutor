export const genreClicked = (genre) => {
  return {
    type: 'CLICK_GENRE',
    genre
  }
}


export const loveHandle = (song) => {
  return {
    type: 'LOVE_HANDLE',
    song
  }
}

