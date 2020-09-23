import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home/Home';
import NotMatch from './notMatch/NotMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/:menuName">
          <Home/>
        </Route>
        <Route path="/:menuName">
          <Home/>
        </Route>
        <Route path="/:menuName">
          <Home/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <NotMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
