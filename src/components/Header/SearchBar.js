import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { searchTodoTask } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const searchTaskHandler = e => {
    console.log(e.target.value);
    dispatch(searchTodoTask(e.target.value));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={e => searchTaskHandler(e)}
      />
      <i className="fas fa-search" />
    </div>
  );
};

export default SearchBar;
