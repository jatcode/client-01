import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga'
// import reduxUnhandledAction from "redux-unhandled-action";
import superagent from 'superagent';
import feathers from 'feathers-client';
import  rest from 'feathers-rest/client';

import rootReducer from './reducers/index';
import mySaga from './sagas/sagas'

// import promise from 'redux-promise';
// import createLogger from 'redux-logger';
// const callback = (action) => console.error(`${action} didn't lead to creation of a new state object`);
// const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(
  sagaMiddleware,
  //promise,
  // logger,
  // reduxUnhandledAction(callback),
)(createStore);
const defaultStore = {};
const store = createStoreWithMiddleware(
  rootReducer,
  defaultStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

        //Feathers configuration
const feathersHost = 'http://10.190.8.190:3030';
// const feathersHost = 'http://localhost:3030';
export const app = feathers()
  .configure(rest(feathersHost).superagent(superagent))
  .configure(feathers.hooks());  
  
sagaMiddleware.run(mySaga,app);

export const history = syncHistoryWithStore(browserHistory,store);
export default store;
