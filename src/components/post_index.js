import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPost } from '../actions/index';


class PostsIndex extends Component { 
  //react lifecycle  when component is about to mount  
  componentWillMount(){
    this.props.fetchPost(); 
  }
  
  renderPosts(){  
    return this.props.posts.map((post)=>{
      return (
        <li key={post.id}>
          <span>titulo</span>
          <span>{post.categories}</span>
        </li>
      );
    });
  }
  
  render(){
    return(
      <div>
        <div className='text-xs-right'>
          <Link to='/post/new' className='btn btn-primary'>
            Add new Post
          </Link>
        </div>
        <div>
          <h3>Posts</h3> 
          <ul>            
            {this.renderPosts()}
          </ul>
        </div>
      </div>  
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
function mapStateToProps(state) { 
  return { posts: state.posts.all }
};
//export default connect(null, mapDispatchToProps)(PostsIndex);
//AND EVEN MORE SINCE FETCHPOST KEY AND VALUE ARE WRITEN THE SAME WE
// CAN replace the {fetchPost: fetchPost} for this {fetchPost}
//export default connect(null, {fetchPost: fetchPost})(PostsIndex);  //first form

// export default connect(null, { fetchPost })(PostsIndex);  // second form 

export default connect(mapStateToProps, { fetchPost })(PostsIndex);  // second form 
 

