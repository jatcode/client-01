import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_DONE = 'CREATE_POST_DONE';
export const FETCH_ONE_POST = 'FETCH_ONE_POST';
export const DELETE_THIS_POST = 'DELETE_THIS_POST';
//TODOS RELATED
export const FETCH_TODOS = 'FETCH_TODOS';
export const DELETE_TODO = 'DELETE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=jatas123';
const TODOS_URL = 'http://10.190.8.190:3030/todos';

export function fetchPost () {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return ({
    type : FETCH_POSTS,
    payload: request
  });
}

export function createPost(props) {
  return  axios
      .post(`${ROOT_URL}/posts/${API_KEY}`, props)
      .then((data)=>{
        return {
          status: data.status,
          message:data.statusText,
          object: data.data
        };
      })
      .catch((error)=>console.log(error));  
}

export function fetchOnePost (id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return ({
    type : FETCH_ONE_POST,
    payload: request
  });
}

//your not going to need a modification of the state
export function deleteThisPost (id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return ({
    type : DELETE_THIS_POST,
    payload: request
  });
}

/*************TODOS RELATED*********************/
export function getAlltodos(){
  const request = axios.get(`${TODOS_URL}`);
  return( { payload: request});
}
/*************TODOS RELATED*********************/