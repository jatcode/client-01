import React , { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Link, withRouter } from 'react-router';

import { connect } from 'react-redux';
import { Message, Header, Icon } from 'semantic-ui-react';

import { MyInput, MyTextarea } from './MyComponents';

import TodoAdd from './TodoAdd';

class TodoEdit extends Component {
	constructor(props){
		super(props)
		const {id} =this.props.params;
		// console.log('this is the id on TodoEdit ',this.props.params.id)
		console.log('this is the id on TodoEdit ',id)
	}
	render(){
		return(
			<div>HEY
				<TodoAdd props={this.props} />
			</div>
		);
	}
}

export default TodoEdit;