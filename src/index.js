import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
//import rootReducer from './reducers/index';


const createStoreWithMiddleware = applyMiddleware()(createStore);

// const store = createStoreWithMiddleware(rootReducer);

//const store = createStore(reducers,0);// StoreWithMiddleware(rootReducer);
//const store = createStore(rootReducer);
//const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />  
  </Provider>,
  document.getElementById('root') 
);
