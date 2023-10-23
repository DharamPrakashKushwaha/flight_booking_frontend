export const addToDo = (todo)=> dispatch => {
    dispatch({
    type: "ADD_NEW_TODO",
    payload: todo,
  })
  }
  
  export const removeTodo = (id)=> dispatch => {
    dispatch({
    type: "REMOVE_TODO",
    payload:id
  })
  }
  