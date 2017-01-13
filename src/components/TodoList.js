import React , { Component } from 'react';
import { connect } from 'react-redux';
import { getAlltodos } from '../actions/index';

import {List, ListItem} from 'material-ui/List';

import Paper from 'material-ui/Paper';


class TodoList extends  Component {
  constructor(props) {
    super(props)    
  this._renderListItems=this._renderListItems.bind(this); 
  this._editThisItem=this._editThisItem.bind(this); 
  }

  componentDidMount(){
    this.props.getAlltodos();
    console.log('on componentdidMOunt: ',this.props);
  }
  _editThisItem(e,item){
    console.log(e.target);
    alert(item);
  }
  _renderListItems(item){
    const {_id, description, todo } = item;
    return(
      <ListItem key={_id}
          primaryText={todo} 
          secondaryText={description}
          secondaryTextLines={1} onClick={this._editThisItem(_id)} >
            
      </ListItem>
    );
  }  
  render(){
    return(
      <Paper  zDepth={5} >
        {this.props.todos.allTodos.map(this._renderListItems )}
              
      </Paper>
    );
  }
}

function mapStateToProps(state){
  return (
    {todos:state.todos}
  );
}

export default connect(mapStateToProps,{getAlltodos})(TodoList);
