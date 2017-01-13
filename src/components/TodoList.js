import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { getAlltodos } from '../actions/index';


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
    console.log(item);
  }
  _renderListItems(item){
    const {_id, description, todo } = item;
    return(
      <Card key={_id}
          header={todo} 
          meta={description}
          onClick={this._editThisItem(_id)} 
					description={description.substring(0,100)+ '...'}
					raised={true}
					href={'/todos/edit/'+_id}
			/>
    );
  }  
  render(){
    return(
      <Card.Group itemsPerRow={5} >
        {this.props.todos.allTodos.map(this._renderListItems )}
      </Card.Group>
    );
  }
}

function mapStateToProps(state){
  return (
    {todos:state.todos}
  );
}

export default connect(mapStateToProps,{getAlltodos})(TodoList);
