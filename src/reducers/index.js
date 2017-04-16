import { combineReducers } from 'redux';
import  videoIndex  from './video-reducer';

import targetGenre from './target-genre';

const rootReducer = combineReducers({
  targetGenre, videoIndex
});

export default rootReducer;