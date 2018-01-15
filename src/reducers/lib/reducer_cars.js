import { FETCH_CARS, ADD_CAR, DELETE_CAR, EDIT_CAR } from '../actions/index.js';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
  case FETCH_CARS:
    return action.payload;
  case ADD_CAR:
    return {...state, [action.payload.data._id]: action.payload.data};
  case DELETE_CAR:
    return _.omit(state, action.payload._id);
  case EDIT_CAR:
    _.omit(state, action.payload._id);
    return {...state, [action.payload._id]: action.payload};
  default:
    return state;
  }
}
