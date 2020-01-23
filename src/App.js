import React from "react";
import List from "./components/List";
import SearchBar from "./components/SearchBar";
import Comments from "./components/Comments";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <Router>
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
