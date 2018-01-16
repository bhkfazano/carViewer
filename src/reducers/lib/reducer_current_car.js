import { SELECT_CAR } from '../../actions/index.js';

export default function(state = {}, action) {
  switch(action.type) {
  case SELECT_CAR:
    return action.payload;
  default:
    return state;
  }
}
