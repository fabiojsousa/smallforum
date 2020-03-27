import React from "react";
import { Router } from "react-router-dom";

import Routes from "./routes";
import history from "./services/history";

import GlobalStyle, { Wrapper } from "./styles/global";

function App() {
  return (
    <Router history={history}>
      <Wrapper>
        <Routes />
        <GlobalStyle />
      </Wrapper>
    </Router>
  );
}

export default App;
