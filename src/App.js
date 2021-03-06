import "./App.css";
import Home from "./pages/Home";
import Level from "./pages/Level";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Level />
        </Route>
        {/* <Route path='/login'>
          <Login />
        </Route> */}
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
