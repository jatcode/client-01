export function getTodosList(app){
  const todos = app.service('todos');
  return todos.find({})
    .then((data, err)=>{
      // console.log('from TODO_API',data);
      return data.data
    });
}