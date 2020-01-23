import React from "react";
import List from "./components/List";
import SearchBar from "./components/SearchBar";
import Comments from "./components/Comments";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
  }

  body {
  background-color: lightblue;
  }
`;

const App = () => {
  return (
    <Router>
      <GlobalStyles />

      <Switch>
        <Route exact path="/">
          <SearchBar />
          <List />
        </Route>
        <Route path="/comments" component={Comments} />
      </Switch>
    </Router>
  );
};

export default App;
