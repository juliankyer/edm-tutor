export const genreClicked = (genre) => {
  return {
    type: 'CLICK_GENRE',
    genre
  }
}

export const nextVideo = (videoIndex) => {
  return {
    type: 'NEXT_VIDEO',
    videoIndex
  }
}

export const previousVideo = (videoIndex) => {
  return {
    type: 'PREVIOUS_VIDEO',
    videoIndex
  }
}