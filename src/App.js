import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
