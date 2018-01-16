import { FETCH_CARS, ADD_CAR, DELETE_CAR, EDIT_CAR, SELECT_CAR, UNSELECT_CAR } from './types.js';

export function fetchUserCars(cars) {
  return {
    type: FETCH_CARS,
    payload: cars
  };
}

export function addCar(car) {
  return {
    type: ADD_CAR,
    payload: car
  };
}

export function deleteCar(car) {
  return {
    type: DELETE_CAR,
    payload: car
  };
}

export function editCar(patch) {
  return {
    type: EDIT_CAR,
    payload: patch
  };
}

export function selectCar(car) {
  return {
    type: SELECT_CAR,
    payload: car
  };
}

export function unselectCar() {
  return {
    type: UNSELECT_CAR
  };
}
