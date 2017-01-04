import { takeEvery} from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import axios from 'axios';
// import {createPost } from '../actions/index'
// import { request  } from 'superagent';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=jatas123';
function createPost(props) {
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


function* callCreateNewPost({values, resolve, reject, ...rest}){  
  const result = yield  call(createPost,values);
  //ONCE I HAVE THE RESULT  its time to update the state
  if(result.status === 201){
    yield put({type:'CREATE_POST_DONE', result});
    yield call(resolve);
  }else{
    yield call(reject,{values:'something happenend'});
  }
}
function* createNewPostSaga(){
  yield*  takeEvery('CREATE_POST',callCreateNewPost);
}
// //worker SAGA
// function* executingSaga () {
//   // body...
// }
// //watcher saga
// function* mySaga() {
//   console.log('redux-saga entrando fuerte.... como');
//   yield takeEvery('CREATE_ACTION', executingSaga)
// }
export default function*  root(){
  yield[ 
    fork(createNewPostSaga), 
    // mySaga(),
    
  ] 
}

