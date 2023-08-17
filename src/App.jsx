import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Productlist from "./components/productlist";
import ProductRegister from "./components/product_manage/ProductRegister";
import ProductCreate from "./components/product_manage/ProuctCreate";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Dashboard} />
        <Route path='/login' Component={Login} />
        <Route path='/signup' Component={Signup} />
        <Route path='/productlist' Component={Productlist} />
        <Route path='/productcreate' Component={ProductCreate} />
        <Route path='/productregister' Component={ProductRegister} />
      </Routes>
    </Router>
  );
};

export default App;
