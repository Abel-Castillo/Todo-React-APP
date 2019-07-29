import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
// import { directive } from "@babel/types";

// STYLES
const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

class App extends Component {
  render() {
    console.log(this.state);
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Main TodosDB={this.state} />
      </div>
    );
  }
}
export default App;
