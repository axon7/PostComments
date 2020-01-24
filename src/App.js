import React from "react";
import List from "./components/List";
import SearchBar from "./components/SearchBar";
import Comments from "./components/Comments";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      <Layout>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/comments" component={Comments} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
