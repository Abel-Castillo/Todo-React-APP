import React from "react";
import styled from "styled-components";

import Table from "./Table";

const MainStyled = styled.main`
  h2 {
    display: inline-block;
  }
  button {
    border: none;
    display: inline-block;

    .fa-plus-circle {
      color: #5499c7;
      transition: all 0.5s;
      &:hover {
        color: #2980b9;
        cursor: pointer;
        transform: scale(1.1);
      }
    }
    .fa-times-circle {
      color: #c0392b;
      transition: all 0.5s;
      &:hover {
        color: #a93226;
        cursor: pointer;
        transform: scale(1.1);
      }
    }
    &:focus {
      outline: none;
    }
  }
  .add {
    background: #5499c7;
    transition: all 0.5s;
    &:hover {
      background: #2980b9;
      cursor: pointer;
      transform: scale(1.1);
    }
  }
  .complete {
    text-decoration: line-through;
  }
`;

const Main = props => {
  return (
    <MainStyled>
      <Table />
    </MainStyled>
  );
};

export default Main;
