export const newTodo = (task, dueDate) => {
  return {
    type: "ADD_TODO",
    task,
    dueDate
  };
};

export const toggleCompleteTask = id => {
  return {
    type: "TOGGLE_COMPLETE_TASK",
    id
  };
};

export const removeTodoTask = id => {
  return {
    type: "REMOVE_TODO",
    id
  };
};
