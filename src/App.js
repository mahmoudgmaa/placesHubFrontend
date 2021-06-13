import React, { useState, useCallback } from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./users/pages/Users";
import NewPlaces from "./places/pages/NewPlace";
import NavBar from "./shared/components/nav";
import Sidebar from "./shared/components/Sidebar";
import MyPlaces from "./places/pages/UserPlaces";
import EditPlace from "./places/pages/editPlace";
import Auth from "./users/pages/auth";
import { AuthContext } from "./context/auth-context";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logIn = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routs;
  if (isLoggedIn) {
    routs = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userid/places" exact>
          <MyPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlaces />
        </Route>
        <Route path="/places/:placeid" exact>
          <EditPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routs = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userid/places" exact>
          <MyPlaces />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, logIn: logIn, logOut: logOut }}
    >
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <NavBar isOpen={isOpen} toggle={toggle} />
        <main>{routs}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
