import * as actionTypes from '../actions/actionTypes';

const initialState = {
  showSideDrawer: false,
  showLoginDialog: false,
  showNewPurchaseDialog: false,
  authLoading: false,
  authErrorMessage: null,
  isAuthed: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SIDEDRAWER:
      return {
        ...state,
        showSideDrawer: !state.showSideDrawer,
      };
    case actionTypes.TOGGLE_LOGIN_DIALOG:
      return {
        ...state,
        showLoginDialog: !state.showLoginDialog,
        authErrorMessage: null,
      };
    case actionTypes.TOGGLE_NEW_PURCHASE_DIALOG:
      return {
        ...state,
        showNewPurchaseDialog: !state.showNewPurchaseDialog,
      };
    case actionTypes.TOGGLE_AUTH_LOADING:
      return {
        ...state,
        authLoading: !state.authLoading,
      };
    case actionTypes.ERROR_LOGIN:
      return {
        ...state,
        authErrorMessage: action.description,
      };
    case actionTypes.CLEAR_LOGIN_ERROR:
      return {
        ...state,
        authErrorMessage: null,
      };
    case actionTypes.TOGGLE_AUTH_STATE:
      return {
        ...state,
        isAuthed: !state.isAuthed,
      };
    default:
      return state;
  }
};

export default reducer;
