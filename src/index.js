import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router  } from 'react-router';
import store, { history } from './store';
import routes from './routes';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(
    <Provider store={store}>
      <Router history={history} routes={routes}/>
          
    </Provider>
  , document.getElementById('root') 
);
