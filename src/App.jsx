import React from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

import "./App.css";

const App = () => {
  return (
    <div>
      <section className="container">
        <Router>
          {/* <Navbar />
            <Landing />
            <Footer /> */}
          <Login />
        </Router>
      </section>
    </div>
  );
};

export default App;
