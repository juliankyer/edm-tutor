export const genreClicked = (genre) => {
  return {
    type: 'CLICK_GENRE',
    genre
  }
}

export const loveHandle = (title, artist, video) => {
  return {
    type: 'LOVE_HANDLE',
    title,
    artist,
    video
  }
}

