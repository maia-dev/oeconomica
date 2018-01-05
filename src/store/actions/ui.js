import * as actionTypes from './actionTypes';

export const toggleSideDrawer = () => {
  return {
    type: actionTypes.TOGGLE_SIDEDRAWER,
  };
};

export const toggleLoginDialog = () => {
  return {
    type: actionTypes.TOGGLE_LOGIN_DIALOG,
  };
};

export const toggleNewPurchaseDialog = () => {
  return {
    type: actionTypes.TOGGLE_NEW_PURCHASE_DIALOG,
  };
};

export const toggleAuthLoading = () => {
  return {
    type: actionTypes.TOGGLE_AUTH_LOADING,
  };
};

export const errorLogin = errorData => {
  return {
    type: actionTypes.ERROR_LOGIN,
    description: errorData,
  };
};

export const clearLoginError = () => {
  return {
    type: actionTypes.CLEAR_LOGIN_ERROR,
  };
};

export const toggleAuthState = () => {
  return {
    type: actionTypes.TOGGLE_AUTH_STATE,
  };
};
