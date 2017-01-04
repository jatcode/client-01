import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import createSagaMiddleware from 'redux-saga'
// import createLogger from 'redux-logger';
import reduxUnhandledAction from "redux-unhandled-action";


import routes from './routes';
import rootReducer from './reducers/index';
import mySaga from './sagas/sagas'

const callback = (action) => console.error(`${action} didn't lead to creation of a new state object`);
// const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(
  sagaMiddleware,
  promise,
  reduxUnhandledAction(callback),
  // logger,
)(createStore);
const store = createStoreWithMiddleware(rootReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/******************SAGAS*****/
sagaMiddleware.run(mySaga)
/******************SAGAS*****/

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('root') 
);
