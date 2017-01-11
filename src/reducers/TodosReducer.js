import { GET_TODO_LIST_SUCCEEDED, GET_TODO_LIST_FAILED } from '../actions/index'

const INITIAL_STATE= {todosList:[],todoItem:null};

export default function (state = INITIAL_STATE,action){
  switch (action.type){
    case GET_TODO_LIST_SUCCEEDED:
      return {...state, todos:action.payload.data};
    case GET_TODO_LIST_FAILED:
      return state;  
    default:
    return state;
  }
}
