import todosDB from "../../DB/todos";
import moment from "moment";

const todos = (state = todosDB, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        {
          completed: false,
          task: action.task,
          created: moment().format("MMMM Do YYYY"),
          dueDate: moment(action.dueDate).format("MMMM Do YYYY"),
          id: Math.floor(Math.random() * 10000000000000)
        },
        ...state
      ];
    case "TOGGLE_COMPLETE_TASK":
      const todos = [...state];
      console.log(todos);
      const todoIndex = todos.findIndex(todo => todo.id === action.id);
      console.log(todoIndex);
      todos[todoIndex].completed = !state[todoIndex].completed;
      return [...todos];
    case "REMOVE_TODO":
      const todo = [...state];
      const updateTodo = todo.filter(todo => todo.id !== action.id);
      return [...updateTodo];

    default:
      return state;
  }
};

export default todos;
