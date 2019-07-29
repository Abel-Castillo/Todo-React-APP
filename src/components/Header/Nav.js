import React from "react";
import styled from "styled-components";

import ModalAddTodo from "../Main/ModalAddTodo";

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
      <div>
        <input /> <i className="fas fa-search" />
      </div>
    </NavStyled>
  );
};

export default Nav;
