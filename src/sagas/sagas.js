import { takeEvery} from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import {createPost, getAlltodos } from '../actions/index'


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

function* callFecthTodos({resolve, reject}){
  const result = yield call (getAlltodos );
  if(result){
    console.log(result);
    yield put({type:'FETCH_TODOS_READY',payload: result});
    yield call(resolve);
  }else{
    yield call (reject, {type:'FETCH_TODOS_FAIL',result})
  }
}

function* getTodosSaga(){
  yield* takeEvery('FETCH_TODOS',callFecthTodos);
}

export default function*  root(){
  yield[ 
    fork(createNewPostSaga), 
    fork(getTodosSaga), 
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