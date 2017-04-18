import { combineReducers } from 'redux';

import loveHandle from './love-handle';
import targetGenre from './target-genre';

const rootReducer = combineReducers({
  targetGenre,
  loveHandle
});

export default rootReducer;