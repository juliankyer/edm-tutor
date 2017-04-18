import { combineReducers } from 'redux';

import targetGenre from './target-genre';
import loveHandle from './love-handle';

const rootReducer = combineReducers({
  targetGenre,
  loveHandle
});

export default rootReducer;