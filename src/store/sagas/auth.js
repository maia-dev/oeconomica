import { put } from 'redux-saga/effects';

import * as actions from '../actions';
import axios from '../../axios/axios-oeconomica';

export function* authUserSaga(action) {
  yield put(actions.toggleAuthLoading());

  const authData = {
    name: 'test1',
    password: '1234',
  };

  try {
    const response = yield axios.post('/login', authData);
    console.log(response);
    //STORE THE DATA IN LOCALSTORE
    yield put(actions.loginSuccess(response));
    yield put(actions.clearLoginError());
  } catch (err) {
    console.log(err);
    yield put(actions.errorLogin(err));
  }

  yield put(actions.toggleAuthLoading());
}
