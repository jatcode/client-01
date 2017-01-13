import React , { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Link, withRouter } from 'react-router';

import { connect } from 'react-redux';
import { Message, Header, Icon } from 'semantic-ui-react';

import { MyInput, MyTextarea } from './MyComponents';

class TodoEdit extends Component {
	constructor(props){
		super(props)
		console.log('this is the id ',this.props.params.id)
		console.log('this is PROPS ',this.props)
	}
	render(){
		return(
			<div>HEY</div>
		);
	}
}

export default TodoEdit;