import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { MyInput, MyTextarea, SubmitButtons, MyForm } from './MyComponents'

const TodoAdd = (props) => {
  const { handleSubmit, pristine, reset, submitting,id } = props
  return (
    <MyForm id={id} {...props}/>
  );
}

const validate = values=>{
  const {todo, description} = values;
  const errors ={};
  if(!todo || todo.trim() ===''){errors.todo= 'tittle is required'};
  if(!description || description.trim() ===''){errors.description= 'description is required'};
  return errors
}

export default reduxForm({
  form: 'todoAdd',  // a unique identifier for this form
  validate
})(TodoAdd)