import { LOGIN_USER, CREATE_USER, UPDATE_PASS, LOGOUT_USER, EDIT_USER, EDIT_PASSWORD } from '../../actions/index.js';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
  case LOGIN_USER:
  //console.log(action.payload);
    //return {currentUser: action.payload};
    return action.payload;
  case CREATE_USER:
    return action.payload.data;
  case EDIT_USER:
    //action.payload.password = state.password;
    //return action.payload;
    console.log(action.payload);
    return {...action.payload, password: state.password, _id:state._id};
  case EDIT_PASSWORD:
    return {...state, password: action.payload};
  default:
    return state;
  }
}
