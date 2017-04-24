export const genreClicked = (genre) => {
  return {
    type: 'CLICK_GENRE',
    genre
  }
}


export const loveHandle = (song) => {
  console.log('actions: ', song);
  return {
    type: 'LOVE_HANDLE',
    song
  }
}

export const removeFav = (song) => {
  console.log('actions remove fav', song);
  return {
    type: 'REMOVE_FAV',
    song
  }
}

