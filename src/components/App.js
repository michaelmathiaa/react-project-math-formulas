import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import PhilosopherList from './PhilosopherList';
import AddPhilosopher from './AddPhilosopher';
import "../styles/App.css"

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/philosophers">
          <PhilosopherList />
        </Route>
        <Route exact path="/add">
          <AddPhilosopher />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
