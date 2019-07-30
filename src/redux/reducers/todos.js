import todosDB from "../../DB/todos";
import moment from "moment";

const todos = (state = todosDB, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = [
        {
          completed: false,
          task: action.task,
          created: moment().format("MMMM Do YYYY"),
          dueDate: moment(action.dueDate).format("MMMM Do YYYY"),
          id: Math.floor(Math.random() * 10000000000000)
        },
        ...state
      ];

      localStorage.setItem("todosDB", JSON.stringify(newTodo));
      const data = JSON.parse(localStorage.getItem("todosDB"));
      console.log(data);
      return (state = [...data]);
    case "TOGGLE_COMPLETE_TASK":
      const todoIndex = state.findIndex(todo => todo.id === action.id);
      state[todoIndex].completed = !state[todoIndex].completed;

      localStorage.setItem("todosDB", JSON.stringify(state));
      console.log(todoIndex, state);
      return (state = [...state]);
    case "REMOVE_TODO":
      const updateTodo = state.filter(todo => todo.id !== action.id);
      localStorage.setItem("todosDB", JSON.stringify(updateTodo));
      return (state = updateTodo);
    case "SEARCH_WORD":
      const dataTodo = JSON.parse(localStorage.getItem("todosDB"));

      const filteredTodos = dataTodo.filter(todo =>
        todo.task.toLowerCase().includes(action.searchValue.toLowerCase())
      );

      return (state = [...filteredTodos]);
    default:
      return state;
  }
};

export default todos;
