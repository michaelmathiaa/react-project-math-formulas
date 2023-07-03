import React from "react";
import { Route, Switch } from "react-router-dom";
import './styles/App.css';
import Home from './Home';
import NavBar from './NavBar';
import Algebra from "./Algebra";
import Geometry from "./Geometry";
import Physics from "./Physics";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/algebra">
          <Algebra />
        </Route>
        <Route exact path="/geometry">
          <Geometry />
        </Route>
        <Route exact path="/physics">
          <Physics />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
