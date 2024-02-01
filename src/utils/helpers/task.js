/************************
 * ALL CUSTOM FUNCTIONS *
 ************************/

export const deleteTask = (todos, task) => {
  return todos.filter((todo) => todo.id !== task.id);
};

export const updateTodoStatus = (todos, task) => {
  return todos.map((single) => {
    return single.id === task.id
      ? { id: single.id, content: single.content, done: !single.done }
      : single;
  });
};

export const filterTodos = (params, todos) => {
  if (params === "all") {
    return todos.filter((single) => single);
  }
  if (params === "done") {
    return todos.filter((single) => single.done === true);
  }
  if (params === "todo") {
    return todos.filter((single) => single.done === false);
  }
};
