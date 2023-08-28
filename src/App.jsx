import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Profile from "./components/auth/Profile";
import ProductCreate from "./components/productlist/ProuctCreate";
import Productlist from "./components/productlist";
import ProductUpdate from "./components/productlist/ProductUpdate";
// import Profile from "./components/profile";
import About from "./components/about";
import Contact from "./components/contact";
import { logout } from "./components/slices/auth";
import EventBus from "./components/common/index";


import "./App.css";

const App = () => {

  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Dashboard} />
        <Route path='/login' Component={Login} />
        <Route path='/signup' Component={Signup} />
        <Route path='/productlist' Component={Productlist} />
        <Route path='/productlist/create' Component={ProductCreate} />
        <Route path={`/update`} Component={ProductUpdate} />
        <Route path='/profile' Component={Profile} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
      </Routes>
    </Router>
  );
};

export default App;
