import React from "react";
import styled from "styled-components";

import ModalAddTodo from "../Main/ModalAddTodo";
import SearchBar from "./SearchBar";

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
`;
const Nav = () => {
  return (
    <NavStyled>
      <h1>
        <i className="fas fa-clipboard-check" />
        Todo App
      </h1>
      <ModalAddTodo />
      <SearchBar />
    </NavStyled>
  );
};

export default Nav;
