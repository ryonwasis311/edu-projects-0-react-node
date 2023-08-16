import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const guestLinks = (
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/signup">Sign up</Link>
      </li>
      <li>
        <Link to="/login">Log in</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas" /> PRODUCT MANAGEMENT
        </Link>
      </h1>
      <Fragment>{ guestLinks }</Fragment>
    </nav>
  );
};

export default Navbar;
