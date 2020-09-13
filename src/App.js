import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
