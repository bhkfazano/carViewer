import axios from 'axios';
import _ from 'lodash';

export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const FETCH_CARS = 'FETCH_CARS';
export const CHECK_USER = 'CHECK_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const EDIT_USER = 'EDIT_USER';
export const SIGN_USER = 'SIGN_USER';
export const EDIT_PASSWORD = 'EDIT_PASSWORD';
export const ADD_CAR = 'ADD_CAR';
export const DELETE_CAR = 'DELETE_CAR';
export const EDIT_CAR = 'EDIT_CAR';
export const SELECT_CAR = 'SELECT_CAR';
export const UNSELECT_CAR = 'UNSELECT_CAR';

export function createUser(values) {
  return {
    type: CREATE_USER,
    payload: values
  };
}

export function login(user) {
  return {
    type: LOGIN_USER,
    payload: user
  };
}

export function logout() {
  return {
    type: 'LOGOUT_USER'
  };
}

export function fetchUserCars(cars) {
  return {
    type: FETCH_CARS,
    payload: cars
  };
}

export async function editUser(user, patch) {
  return {
    type: EDIT_USER,
    payload: patch
  };
}

export async function deleteUser() {
  return {
    type: 'LOGOUT_USER'
  };
}

export function editPassword(password) {
  return {
    type: EDIT_PASSWORD,
    payload: password
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
