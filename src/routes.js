import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import PostList from './components/post_index';
import Home from './components/Home';
import PostNew from './components/post_new';
import PostShow from './components/post_show';
import TodoList from './components/TodoList';



export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/post/new" component={PostNew}/>
    <Route path="/post/:id" component={PostShow}/>
    <Route path="/todos/list" component={TodoList}/>
  </Route>
);
  
