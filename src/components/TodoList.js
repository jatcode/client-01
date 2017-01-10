import React , { Component } from 'react';
import { connect } from 'react-redux';
import { getAlltodos } from '../actions/index';


class TodoList extends  Component {
  constructor(props) {
    super(props)    
  this._fetchTodos.bind(this); 
  console.log(this.props);
  }

_fetchTodos(){  
  console.log(this);
  console.log(this);
}
  
  
  
  render(){
    return(
      <div>
        <button onClick={this._fetchTodos}>Get Todos</button>
      </div>
    )
  }
}


function mapStateToProps(state){
  return (
    {todos:state.todos}
  );
}


export default connect(mapStateToProps,{getAlltodos})(TodoList);

