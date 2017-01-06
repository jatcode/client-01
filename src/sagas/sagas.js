import { takeEvery} from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import {createPost } from '../actions/index'


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

export default function*  root(){
  yield[ 
    fork(createNewPostSaga), 
    // mySaga(),
    
  ] 
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