import { combineReducers } from 'redux';
import UserReducer from './lib/reducer_current.js';
import CarsReducer from './lib/reducer_cars.js';
import CurrentCarReducer from './lib/reducer_current_car.js';
import { LOGOUT_USER, UNSELECT_CAR } from '../actions/index.js';

import { reducer as formReducer } from 'redux-form';

const appReducer = combineReducers({
  currentUser: UserReducer,
  form: formReducer,
  currentUserCars: CarsReducer,
  currentCar: CurrentCarReducer
})

const rootReducer = (state, action) => {
  if (action.type == LOGOUT_USER) {
    state = undefined;
  }
  if (action.type == UNSELECT_CAR) {
    state.currentCar = undefined;
  }
  return appReducer(state, action);
}

export default rootReducer;
