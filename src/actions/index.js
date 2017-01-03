import axios from 'axios';
// import { request as req } from 'superagent';

export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_DONE = 'CREATE_POST_DONE';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=jatas123';

export function fetchPost () {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  console.log('desde fetchPost: ',request);
  return ({
    type : FETCH_POST,
    payload: request.data
  });
}

export default function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, props);
  return {
    type: 'CREATE_POST',
    payload: request
  };
}

export  function createNewPostDone(props){
  return {
    type: 'CREATE_POST_DONE',
    payload:props
  };
}