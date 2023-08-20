import { useState, Fragment } from "react";
import { Link } from "react-router-dom";

const Editprofile = ({ stored, editCompleteCallback }) => {
  console.log("Edit User Profile");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveClicked = () => {
    console.log("Saved");
    editCompleteCallback({ name, email, password });
  };

  return (
    <Fragment>
      <div className="log_container">
        <h1 className="large text-primary">Edit Profile</h1>
        <p className="lead">
          <i className="fas fa-user"></i>Rewrite your information
        </p>

        <form className="form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Please, Rewrite your Name"
              value={name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="email"
              placeholder="Please, Rewrite email "
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="password"
              placeholder="Please, Rewrite your password"
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>
        </form>
        
        <button  className="btn btn-primary" onClick={handleSaveClicked}>Save</button>
        <Link to="/productlist" variant="contained">
          Cancel
        </Link>
      </div>
    </Fragment>
  );
};

export default Editprofile;
