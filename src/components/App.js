import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import PhilosopherList from './PhilosopherList';
import Gallery from './Gallery';
import "../styles/App.css"

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/philosophers">
          <PhilosopherList />
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
