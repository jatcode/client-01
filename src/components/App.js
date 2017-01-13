import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators  from '../actions/actions';
import Main  from './Main';


function mapStateToProps(state){
  return {
    todos: state.todos
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators,dispatch);
}

const App = connect(mapStateToProps,mapDispatchToProps)(Main);
export default App;
