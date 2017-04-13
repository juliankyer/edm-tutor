import genres from '../data/genres';

const genreReducer = (state=[], action) => {
  switch (action.type) {
    case 'GENRE_CLICKED':
      return {
        ...state,
        genres,
      };
    default:
      return state;
  }
} 

export default genreReducer;