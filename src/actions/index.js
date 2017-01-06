import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_DONE = 'CREATE_POST_DONE';
export const FETCH_ONE_POST = 'FETCH_ONE_POST';
export const DELETE_THIS_POST = 'DELETE_THIS_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=jatas123';

export function fetchPost () {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return ({
    type : FETCH_POSTS,
    payload: request
  });
}

// export function createPost(props) {
//   const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, props);
//   return {
//     type: 'CREATE_POST',
//     payload: request
//   };
// }

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