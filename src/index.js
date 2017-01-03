import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';

import routes from './routes';
import reducers from './reducers';
/******************SAGAS******/
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware();

/******************SAGAS*****/

const createStoreWithMiddleware = applyMiddleware(
  /******************SAGAS*****/
  sagaMiddleware,
  /******************SAGAS*****/
  promise
)(createStore);
const store = createStoreWithMiddleware(reducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/******************SAGAS*****/
sagaMiddleware.run(mySaga)
/******************SAGAS*****/
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('root') 
);
