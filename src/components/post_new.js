import React, { Component } from 'react';

import { reduxForm } from 'redux-form';

class PostNew extends Component {
  
  render() {
    return (
      <div>
        HE LLO FROM POSTNEW
      </div>
    );
  }
}


export default reduxForm({
  form: 'PostNewForm',
  fields:[ 'title', 'categories', 'content' ]
  
})(PostNew);