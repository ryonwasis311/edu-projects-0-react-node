import { Fragment } from "react";
import { Link } from "react-router-dom";

const Userprofile = ({ stored, startEditCallback }) => {
  console.log("userprofile");
  console.log(stored);
  return (
    <>
      <Fragment>
        <div className="log_container">
          <h1 className="large text-primary">User Profile</h1>
          <p className="lead">
            <i className="fas fa-user"></i>Rewrite your information
          </p>
          <div>
          <h2>Name:</h2> {stored.name}
          <h2>Password:</h2> {stored.password}
          <h2>Email:</h2> {stored.email}
          </div>
          <button  className="btn btn-primary"  onClick={startEditCallback}>Edit</button>
          <Link to="/productlist" variant="contained">
            Cancel
          </Link>
        </div>
      </Fragment>
    </>
  );
};
export default Userprofile;
