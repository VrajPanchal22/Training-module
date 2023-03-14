export function addTodo(data) {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(), //for random numbers
      data: data,
      isCompleted: false,
    },
  };
}
export function delTodo(id) {
  return {
    type: "DEL_TODO",
    id,
  };
}
export function delAllTodo() {
  return {
    type: "DELALL_TODO",
  };
}
export function strike(id, checked) {
  return {
    type: "STRIKE_ELEM",
    payload: {
      id: id,
      checked: checked,
    },
  };
}
export function showAll() {
  return {
    type: "SHOW_ALL",
  };
}
