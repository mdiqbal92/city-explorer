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
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import SearchResult from "./Components/SearchResult/SearchResult";


export const UserContext = createContext();
export const SearchContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [search, setSearch] = useState({});
  return (
    <UserContext.Provider value= {[loggedInUser, setLoggedInUser]}>
      <SearchContext.Provider value = {[search, setSearch]}>
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
        <PrivateRoute path="/destination/:id">
        <Destination></Destination>
        </PrivateRoute>
        <Route path="/search-result/:id">
          <SearchResult></SearchResult>
        </Route>
        
        <Route path = "*">
        <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </SearchContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
