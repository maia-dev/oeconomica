import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { grey, indigo, red } from 'material-ui/colors';
import 'typeface-roboto';
import './index.css';

import App from './App';
import uiReducer from './store/reducers/ui';
import authReducer from './store/reducers/auth';
import { watchAuth } from './store/sagas';

const muiTheme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: grey,
    error: red,
    type: 'light',
  },
});

const composeEnhacers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhacers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(watchAuth);

const app = (
  <MuiThemeProvider theme={muiTheme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
