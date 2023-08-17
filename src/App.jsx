import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

import "./App.css";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Dashboard} />
        <Route path='/login' Component={Login} />
        <Route path='/signup' Component={Signup} />
      </Routes>
    </Router>
  );
};

export default App;
