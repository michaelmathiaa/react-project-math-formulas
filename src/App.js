import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Algebra from "./components/Algebra";
import Geometry from "./components/Geometry";
import Physics from "./components/Physics";

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
