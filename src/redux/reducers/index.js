import todos from "./todos";
import searchBar from "./search";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  todos,
  searchBar
});

export default allReducers;
