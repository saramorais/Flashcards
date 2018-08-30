import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import rootReducer from './reducers';

const middleware = [promise];

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);

export default store;