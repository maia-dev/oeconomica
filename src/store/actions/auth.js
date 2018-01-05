import * as actionTypes from './actionTypes';

export const loginStart = (name, password) => {
  return {
    type: actionTypes.LOGIN_START,
    name: name,
    password: password,
  };
};

export const loginSuccess = (token, name, exp) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    token: token,
    name: name,
    exp: exp,
  };
};

export const logoutStart = () => {
  return {
    type: actionTypes.LOGOUT_START,
  };
};

export const logoutUser = () => {
  return {
    type: actionTypes.LOGOUT_USER,
  };
};

export const checkStorageToken = () => {
  return {
    type: actionTypes.CHECK_STORAGE_TOKEN,
  };
};

export const startTokenTimeout = exp => {
  return {
    type: actionTypes.START_TOKEN_TIMEOUT,
    exp: exp,
  };
};
