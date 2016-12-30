import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
class PostNew extends Component {
  
  render() {
    //destructuring from props 
    const { fields:{ title, categories, content }, handleSubmit } = this.props;    
    // const { handleSubmit } = this.props.handleSubmit; is the same thing
    // console.log(this.props.fields.title);
    return (
      <form onSubmit={handleSubmit(this.props.createPost)} >
        <h3> Create new Post</h3>
        <div className='form-group'>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
        </div>
        <div className='form-group'>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
        </div>
        <div className='form-group'>
          <label>Content</label>
          <textarea  className="form-control" {...content} />
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
    );
  }
}
// connect frist argument is mapStatetoProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStatetoProps, 3rd is  mapDispatchToProps
export default reduxForm({
  form: 'formulario_PostNew',
  fields:[ 'title', 'categories', 'content' ]
},null, { createPost })(PostNew);