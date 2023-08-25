import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import MoreIcon from "@mui/icons-material/More";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { logout } from "../slices/auth";
import { useDispatch } from "react-redux";

const Leftsidebar = () => {

  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  return (
    <>=
      <Sidebar className="app">
        <Menu>
          <MenuItem
            component={<Link to="/productlist" className="link" />}
            icon={<MenuIcon />}
            className="menu1"
          >
            <h2>QUICKPAY</h2>
          </MenuItem>
          <MenuItem
            component={<Link to="/" className="link" />}
            icon={<GridViewRoundedIcon />}
          >
            {" "}
            Dashboard{" "}
          </MenuItem>
          <MenuItem
            component={<Link to="/productlist/create" className="link" />}
            icon={<AddIcon />}
          >
            {" "}
            Create{" "}
          </MenuItem>
          <MenuItem component={<Link to="/about" className="link" />}
          icon={<InfoIcon />}> About </MenuItem>
          <MenuItem component={<Link to="/contact" className="link" />} icon={<PhoneCallbackIcon />}> Contact </MenuItem>
          <MenuItem component={<Link to="/profile" className="link" />} 
          icon={<MoreIcon />}> User Profie </MenuItem>
          <MenuItem
            component={<Link to="/login" className="link" />}
            icon={<LogoutIcon />}
            onClick={logOut}
          >
            {" "}
            Log Out{" "}
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default Leftsidebar;
