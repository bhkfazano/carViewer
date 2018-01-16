import { CREATE_USER, LOGIN_USER, LOGOUT_USER, EDIT_USER, EDIT_PASSWORD } from './types.js';

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
    type: LOGOUT_USER
  };
}

export  function editUser(patch) {
  return {
    type: EDIT_USER,
    payload: patch
  };
}

export  function deleteUser() {
  return {
    type: LOGOUT_USER
  };
}

export function editPassword(password) {
  return {
    type: EDIT_PASSWORD,
    payload: password
  };
}
