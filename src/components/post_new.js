import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {  Message} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router';

import {  createPost } from '../actions/index';

class PostNew extends Component {
   
   myInput ({input, meta:{ touched, error }, ...custom}) {
     const hasError = touched && error ;
    return(
      <div>
        <label >{input.name}</label>
        <div>
          <input {...input} />
          { hasError && <Message error header='Error' content={error}/> }          
        </div>
      </div>
    );
  }
   myTextarea ({input, meta:{ touched, error }, ...custom}) {
     const hasError = touched && error ;
    return(      
        <div>
          <label >{input.name}</label>
          <div>
            <textarea {...input} placeholder='contente'/>
            {hasError && <span>{error}</span>}
          </div>
        </div>
    );
  }
  static contexTypes = {
    router : PropTypes.object
  };
  submit(values, dispatch ){
    console.log("under submit: ",values);
    return new Promise((resolve, reject) =>{
      dispatch({
        type: 'CREATE_POST',
        values,
        resolve,
        reject
      });
    })
    .then(()=>{
      console.log(this.props);
      console.log(this);
      this.props.router.push('/');
    })
    .catch((error) =>{
      if(error.validationErrors) {
        throw new SubmissionError(error.validationErrors)
      } else {
        console.log(error);
        // what you do about other communication errors is up to you
      }
    });
    // <form onSubmit={handleSubmit(this.submit.bind(this))}>
  }
  render() {
    // const { handleSubmit } = this.props;    
    const { handleSubmit, pristine, reset, submitting }= this.props;
    return (      
      <div>
        <div className='text-xs-right'>
          <Link to='/' className='btn btn-primary'>
            home
          </Link>
        </div>
        <div >
          <h3>Create a new Post</h3>
        </div>
        <form onSubmit={handleSubmit(this.submit.bind(this))}>
          <Field name='title' component={this.myInput} />
          <Field name='categories' component={this.myInput} />
          <Field name='content' component={this.myTextarea} />              
            
          <br/>
          <button type='submit' disabled={submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </form>
      </div>
    );
  }
}

const validate = values=>{
  const {title, categories, content} = values;
  const errors ={};
  if(!title || title.trim() ===''){errors.title= 'tittle is required'};
  if(!categories || categories.trim() ===''){errors.categories= 'categories is required'};
  if(!content || content.trim() ===''){errors.content= 'content is required'};
  return errors
}

PostNew = reduxForm({
  form: 'postnew-form',
  validate
})(PostNew); //conecting it to reduxform
PostNew = withRouter(connect(null, {createPost})(PostNew)); //connecting it to the main store
export default PostNew;

