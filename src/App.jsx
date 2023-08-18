import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ProductUpdate from "./components/product_manage/ProductUpdate";
import ProductCreate from "./components/product_manage/ProuctCreate";
import Leftsidebar from "./components/productlist/Leftsidebar";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Dashboard} />
        <Route path='/login' Component={Login} />
        <Route path='/signup' Component={Signup} />
        <Route path='/productlist' Component={Leftsidebar} />
        <Route path='/productcreate' Component={ProductCreate} />
        <Route path='/productupdate' Component={ProductUpdate} />
      </Routes>
    </Router>
  );
};

export default App;
