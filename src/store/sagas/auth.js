import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import * as actions from '../actions';
import axios from '../../axios/axios-oeconomica';

export function* authTimeoutSaga(action) {
  //TODO: this is login a user out after exp time, consider adding some ui
  //      to register this
  yield delay(action.exp);
  yield put(actions.logoutStart());
}

export function* authUserSaga(action) {
  yield put(actions.toggleAuthLoading());
  const authData = {
    name: action.name,
    password: action.password,
  };
  try {
    const response = yield axios.post('/login', authData);
    yield localStorage.setItem('token', response.data.token);
    yield localStorage.setItem('tokenExp', new Date(response.data.exp));
    yield localStorage.setItem('name', authData.name);
    yield put(
      actions.loginSuccess(
        response.data.token,
        authData.name,
        new Date(response.data.exp)
      )
    );
    yield put(actions.clearLoginError());
    yield put(actions.toggleLoginDialog());
    yield put(actions.toggleAuthState());
    yield put(actions.toggleAuthLoading());
    yield put(
      actions.startTokenTimeout(new Date(response.data.exp) - new Date())
    );
  } catch (err) {
    yield put(actions.errorLogin(err.response.data));
    yield put(actions.toggleAuthLoading());
  }
}

export function* logoutUserSaga(action) {
  yield call([localStorage, 'removeItem'], 'token');
  yield call([localStorage, 'removeItem'], 'name');
  yield call([localStorage, 'removeItem'], 'tokenExp');
  yield put(actions.clearLoginError());
  yield put(actions.logoutUser());
  yield put(actions.toggleAuthState());
}

export function* checkAuthStateSaga(action) {
  const token = yield localStorage.getItem('token');
  if (!token) {
    yield put(actions.logoutUser());
  } else {
    const expDate = yield new Date(localStorage.getItem('tokenExp'));
    if (expDate <= new Date()) {
      yield put(actions.logoutUser());
    } else {
      const name = yield localStorage.getItem('name');
      yield put(actions.startTokenTimeout(new Date(expDate) - new Date()));
      yield put(actions.loginSuccess(token, name, expDate));
      yield put(actions.toggleAuthState());
    }
  }
}
