import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import genreReducer from './Genre';

const rootReducer = combineReducers({
  genres: genreReducer
});

export default rootReducer;