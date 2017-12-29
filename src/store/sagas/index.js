import { takeEvery } from 'redux-saga/effects';

import { authUserSaga } from './auth';
import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
  yield takeEvery(actionTypes.LOGIN_START, authUserSaga);
}
