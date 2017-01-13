import { takeEvery} from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import { getTodosList, createTodo, UpdateTodo, deleteTodo } from '../services/TodosAPI';
import { 
	GET_TODO_LIST, GET_TODO_LIST_SUCCEEDED, GET_TODO_LIST_FAILED ,
	GET_ONE_TODO, GET_ONE_TODO_SUCCEEDED, GET_ONE_TODO_FAILED,
	ADD_TODO, ADD_TODO_SUCCEEDED, ADD_TODO_FAILED, 
	DELETE_TODO, DELETE_TODO_SUCCEEDED,DELETE_TODO_FAILED,
	UPDATE_TODO, UPDATE_TODO_SUCCEEDED, UPDATE_TODO_FAILED
} from '../actions/actions';

function* callFecthTodos(feathersApp){
  const result = yield call (getTodosList,feathersApp);
  if(result){
    yield put({type:GET_TODO_LIST_SUCCEEDED,payload: result});
    // yield call(resolve);
  }else{
    console.log('on saga: ',GET_TODO_LIST_FAILED +result);
     yield put ({type:GET_TODO_LIST_FAILED,result})
    //  yield call (reject, {type:GET_TODO_LIST_FAILED,result})
 }
}
function* getTodosSaga(feathersApp){
  yield* takeEvery(GET_TODO_LIST,callFecthTodos,feathersApp);
}

function* callCreateTodo(feathersApp,newTodo){
  const result = yield call (createTodo,feathersApp,newTodo);
  if(result){
    yield put({type:ADD_TODO_SUCCEEDED,payload: result});
    // yield call(resolve);
  }else{
    console.log('on saga: ',ADD_TODO_FAILED +result);
     yield put ({type:GET_TODO_LIST_FAILED,result})
    //  yield call (reject, {type:GET_TODO_LIST_FAILED,result})
 }
}
function* createTodoSaga(feathersApp){
  yield* takeEvery(ADD_TODO,callCreateTodo,feathersApp);
}
function* callUpdateTodo(feathersApp, updatedTodo){
  const result = yield call (UpdateTodo,feathersApp, updatedTodo);
  if(result){
    yield put({type:UPDATE_TODO_SUCCEEDED,payload: result});
    // yield call(resolve);
  }else{
    console.log('on saga: ',UPDATE_TODO_FAILED +result);
     yield put ({type:UPDATE_TODO_FAILED,result})
    //  yield call (reject, {type:GET_TODO_LIST_FAILED,result})
 }
}
function* updateTodoSaga(feathersApp, updatedTodo){
  yield* takeEvery(UPDATE_TODO,callUpdateTodo,feathersApp,updatedTodo);
}

function* callDeleteTodo(feathersApp, idTodo){
  const result = yield call (deleteTodo,feathersApp, idTodo);
  if(result){
    yield put({type:DELETE_TODO_SUCCEEDED,payload: result});
    // yield call(resolve);
  }else{
    console.log('on saga: ',DELETE_TODO_FAILED +result);
     yield put ({type:DELETE_TODO_FAILED,result})
    //  yield call (reject, {type:GET_TODO_LIST_FAILED,result})
 }
}
function* deleteTodoSaga(feathersApp, id){
  yield* takeEvery(DELETE_TODO,callDeleteTodo,feathersApp,id);
}

export default function*  root(feathersApp){
  yield[ 
    // fork(createNewPostSaga), 
    fork(getTodosSaga,feathersApp), 
		fork(createTodoSaga,feathersApp), 
    fork(updateTodoSaga,feathersApp), 
    fork(deleteTodoSaga,feathersApp), 
    // mySaga(),
    
  ] 
}

