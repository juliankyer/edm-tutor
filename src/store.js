import { createStore } from 'redux';
import rootReducer from './reducers/index';

const configureStore = (intitialState) => {
  const store = createStore(
    rootReducer,
    intitialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}

export default configureStore;