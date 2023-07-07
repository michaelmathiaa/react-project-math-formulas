import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import PhilosopherList from './PhilosopherList';
import AddPhilosopher from './AddPhilosopher';
import "../styles/App.css"

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/philosophers">Philosophers</Link>
          </li>
          <li>
            <Link to="/add">Add Philosopher</Link>
          </li>
        </ul>
      </nav>
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
    </Router>
  );
}

export default App;
