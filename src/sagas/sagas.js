import { takeEvery} from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import {createPost } from '../actions/index';
import { getTodosList } from '../services/TodosAPI';
import {GET_TODO_LIST, GET_TODO_LIST_SUCCEEDED, GET_TODO_LIST_FAILED } from '../actions/actions';

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

function* callFecthTodos(feathersApp){
  const result = yield call (getTodosList,feathersApp);
  if(result){
    console.log(result);
    // yield put({type:GET_TODO_LIST_SUCCEEDED,payload: result});
    // yield call(resolve);
  // }else{
  //   yield call (reject, {type:GET_TODO_LIST_FAILED,result})
 }
}

function* getTodosSaga(feathersApp){
  console.log(feathersApp);
  yield* takeEvery(GET_TODO_LIST,callFecthTodos,feathersApp);
}

export default function*  root(feathersApp){
  yield[ 
    // fork(createNewPostSaga), 
    fork(getTodosSaga,feathersApp), 
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