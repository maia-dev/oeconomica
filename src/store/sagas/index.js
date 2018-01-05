import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
  authUserSaga,
  logoutUserSaga,
  checkAuthStateSaga,
  authTimeoutSaga,
} from './auth';

export function* watchAuth() {
  yield takeEvery(actionTypes.LOGIN_START, authUserSaga);
  yield takeEvery(actionTypes.LOGOUT_START, logoutUserSaga);
  yield takeEvery(actionTypes.CHECK_STORAGE_TOKEN, checkAuthStateSaga);
  yield takeEvery(actionTypes.START_TOKEN_TIMEOUT, authTimeoutSaga);
}
