import "./App.css";
import Home from "./pages/Home";
import Level from "./pages/Level";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Level />
        </Route>
        {/* <Route path='/users'>
          <Users />
        </Route> */}
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
