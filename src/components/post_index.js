import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../actions/index';



class PostsIndex extends Component {
  //react lifecycle  when component is about to mount
  componentWillMount(){
    this.props.fetchPost();
  }
  
  render(){
    return(
      <div>
        <div>
          link
        </div>
        
        <h1> list of Post</h1> </div>  
        
      
    );
  }
}

/* 
WE ARE REPLACING THE 2 STEPS BELOW FORT THE MORE CONVENIENT SINGLE OBJECT AT
THE BOTTON
 */
 
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPost},dispatch);
// }
// export default connect(null, mapDispatchToProps)(PostsIndex);

//AND EVEN MORE SINCE FETCHPOST KEY AND VALUE ARE WRITEN THE SAME WE
// CAN replace the {fetchPost: fetchPost} for this {fetchPost}
//export default connect(null, {fetchPost: fetchPost})(PostsIndex);

export default connect(null, { fetchPost })(PostsIndex);