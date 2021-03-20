import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import LogIn from "./Components/LogIn/LogIn";
import Destination from "./Components/Destination/Destination";



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value= {[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path = "/">
        <Home></Home>
        </Route>
        
        <Route path = "/home">
        <Home></Home>
        </Route>
        <Route path="/login">
        <LogIn></LogIn>
        </Route>
        <Route path="/destination">
        <Destination></Destination>
        </Route>
        
        <Route path = "*">
        <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
