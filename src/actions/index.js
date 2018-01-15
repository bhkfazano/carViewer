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

export async function createUser(values) {
  const request = await axios.post('http://localhost:3000/users', values)


  return {
    type: CREATE_USER,
    payload: request
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

export async function fetchUserCars(user) {
  const userid = user._id;

  const request = await axios.get(`http://localhost:3000/users/${userid}/cars`);
  const payload = _.indexBy(request.data, '_id');
  return {
    type: FETCH_CARS,
    payload: payload
  };
}

export async function userCheck(values) {
  const email = values.email;
  const password = values.password;
  const request = await axios.post(`http://localhost:3000/users/usercheck`, {email: email, password: password});
  return {
    type: CHECK_USER,
    payload: request
  };
}

export async function checkForSign(values) {
  const email = values.email;
  const request = await axios.post(`http://localhost:3000/users/signup`, {email: email});
  return {
    type: SIGN_USER,
    payload: request
  };
}

export async function editUser(user, patch) {
  const userid = user._id;
  const request = await axios.put(`http://localhost:4000/users/${userid}`, patch);
  return {
    type: EDIT_USER,
    payload: patch
  };
}

export async function deleteUser(user) {
  const userid = user._id;
  const request = await axios.delete(`http://localhost:4000/users/${userid}`);
  return {
    type: 'LOGOUT_USER'
  };
}

export async function editPassword(user, password) {
  const userid = user._id;
  const request = await axios.put(`http://localhost:4000/users/${userid}`, {password: password});
  return {
    type: EDIT_PASSWORD,
    payload: password
  };
}

export async function addCar(user, values) {
  const userid = user._id;
  const car = {...values, user_id: userid};
  const request = await axios.post(`http://localhost:4000/users/${userid}/cars`, car);


  return {
    type: ADD_CAR,
    payload: request
  };
}

export async function deleteCar(car) {
  const carid = car._id;
  const request = await axios.delete(`http://localhost:4000/cars/${carid}`);
  return {
    type: DELETE_CAR,
    payload: car
  };
}

export async function editCar(car, patch) {
  const carid = car._id;
  patch._id = car._id;
  patch.user_id = car.user_id;
  const request = await axios.put(`http://localhost:4000/cars/${carid}`, patch);
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
