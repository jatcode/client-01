import React , {Component } from 'react';
import { connect } from 'react-redux';
import {Link,withRouter } from 'react-router';
import { Confirm , Dimmer, Loader, Image, Segment} from 'semantic-ui-react'
import {fetchOnePost, deleteThisPost } from '../actions/index'
const MyLoader = () => (
  <Segment>
    <Dimmer active>
      <Loader />
    </Dimmer>

    <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
  </Segment>
)


class PostShow  extends Component{
  
  componentWillMount(){
    this.props.fetchOnePost(this.props.params.id);
  }
  state = { open: false}
  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })
  contenido = {};

  onDeletePostClick(){
    this.props.deleteThisPost(this.props.params.id)
      .then((value) => {
          // console.log('valor borrardo',value.payload.data);
          // this.contenido=value.payload.data;
          this.show();          
          this.props.router.push('/');
      })
      .catch((err) => {console.log('error on DeleteThisPost',err);})
    ;
  }
  
  render(){
    const post = this.props.post;
    if(!post) {
      return <div><MyLoader /></div>
    }    
    return (
      <div>
        <Confirm
          open={this.state.open}                    
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
        <div  className='ui compact menu'>
          <Link to='/' className='item'>
            home
          </Link>
        </div>
        <button 
          className='ui negative button right floated'
          onClick={this.onDeletePostClick.bind(this)}
          >
          Delete post
        </button>
        <div>
          <h3>{post.title}</h3>
          <h6>Categories: {post.categories}</h6>
          <p>{post.content}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {post: state.posts.post};
}


PostShow = withRouter(connect(
            mapStateToProps,
            {fetchOnePost, deleteThisPost}
          )(PostShow));
export default PostShow;