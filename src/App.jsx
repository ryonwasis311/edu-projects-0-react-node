import React from "react";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";

import "./App.css";

const App = () => {
  return (
        <Router>
          <Routes>
              <Route exact path="/" element={<Dashboard/>} />
              <Route path="/Login" element={<Login/>} />
              <Route path="/Signup" element={<Signup/>} />
          </Routes>
        </Router>
  );
};

export default App;
