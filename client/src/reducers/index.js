import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';

import setsReducer from './reducer-sets';

export default combineReducers({
  sets: setsReducer
});