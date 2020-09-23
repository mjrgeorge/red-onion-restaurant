import React, { createContext, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/Home';
import NotMatch from './components/notMatch/NotMatch';
import FakeData from './fakeData/FakeData';
import MenuDetails from './components/menuDetails/MenuDetails';
import Login from './components/login/Login';

export const MenuContext = createContext();

function App() {

  const [menuItems, setMenuItems] = useState(FakeData);
  const [productCount, setProductCount] = useState(1);

  return (
    <MenuContext.Provider value={[menuItems, setMenuItems, productCount, setProductCount]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/time/:menuCategory">
            <Home/>
          </Route>
          <Route path="/time/:menuCategory">
            <Home/>
          </Route>
          <Route path="/time/:menuCategory">
            <Home/>
          </Route>
          <Route path="/menu/:menuId">
            <MenuDetails/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NotMatch/>
          </Route>
        </Switch>
      </Router>
    </MenuContext.Provider>
  );
}

export default App;
