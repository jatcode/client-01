import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import PostList from './components/post_index';
import PostNew from './components/post_new';



export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostList}/>
    <Route path="/post/new" component={PostNew}/>
  </Route>
);
  
