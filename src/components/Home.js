import React, { Component } from 'react';
import TodoList  from './TodoList';


class Home extends Component {
  
  render(){
    return(
      <div>
        <h3>HOME</h3>
        <TodoList/>
      </div>
    );
  }
}

export default Home;