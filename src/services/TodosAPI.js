export function getTodosList(app){
  const todos = app.service('todos');
  return todos.find({})
    .then((data, err)=>{
      // console.log('from TODO_API',data);
      return data.data
    });
}
export function createTodo(app, newTodo){
  const todos = app.service('todos');
  return todos.find({})
    .then((data, err)=>{
      // console.log('from TODO_API',data);
      return data.data
    });
}
export function UpdateTodo(app, updatedTodo){
  const todos = app.service('todos');
  return todos.find({})
    .then((data, err)=>{
      // console.log('from TODO_API',data);
      return data.data
    });
}
export function deleteTodo(app, idTodo){
  const todos = app.service('todos');
  return todos.find({})
    .then((data, err)=>{
      // console.log('from TODO_API',data);
      return data.data
    });
}