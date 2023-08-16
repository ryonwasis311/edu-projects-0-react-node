import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";


import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Landing />
    </Router>
  );
};

export default App;
