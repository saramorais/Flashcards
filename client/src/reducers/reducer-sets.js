import { FETCH_CARDS, FETCH_SETS, ADD_SET, ADD_CARD, DELETE_SET, DELETE_CARD } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_SETS:
      return action.payload['data'];
    case FETCH_CARDS:
      return action.payload['data'];
    case ADD_SET:
      return action.payload['data'];
    case ADD_CARD:
      return action.payload['data'];
    case DELETE_CARD:
      return state;
    case DELETE_SET:
      return state;
    default:
      return state;
  }
}
