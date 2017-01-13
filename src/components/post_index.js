import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import { List  } from 'semantic-ui-react'
import { fetchPost } from '../actions/index';
import { MyLink } from './MyComponents';

class PostsIndex extends Component { 
  //react lifecycle  when component is about to mount  
  componentWillMount(){
    this.props.fetchPost(); 
  }
  
  renderPosts(){  
    return this.props.posts.map((post)=>{
      return (
        <li key={post.id} className='item'>        
          <Link to={'/post/'+ post.id}>
            <span className='header'>{post.title}</span>
          <span className='content'>{post.categories}</span>
          </Link>
        </li>

      );
    });
  }
  
  render(){
    return(
      <div>
        <MyLink /*coment*/ toValue='/post/new' label='Add new Post'/>
        <MyLink toValue='/todos/list' label='Todos List'/>
        <h3 className>Posts</h3> 
        <div>
          <div className='ui divided middle aligned selection list'>
            {this.renderPosts()}
          </div>
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
 

