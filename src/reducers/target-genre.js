import genres from '../data/genres';

const targetGenre = (state='', action) => {
  switch (action.type) {
    case 'CLICK_GENRE':
      return action.genre;
    default:
      return state;
  }
} 

export default targetGenre;