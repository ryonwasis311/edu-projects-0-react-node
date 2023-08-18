import { Sidebar, Menu, SubMenu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import SettingsIcon from "@mui/icons-material/Settings";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/More";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import Productlist from "./index";
import { TableRow,Stack} from '@mui/material';

const Leftsidebar = () => {
  return (
    <>
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
            component={<Link to="/productcreate" className="link" />}
            icon={<AddIcon />}
          >
            {" "}
            Create{" "}
          </MenuItem>
          <MenuItem icon={<InfoIcon />}> About </MenuItem>
          <MenuItem icon={<PhoneCallbackIcon />}> Contact </MenuItem>
          <SubMenu icon={<SettingsIcon />} label="Settings">
            <MenuItem icon={<AccountBoxIcon />}> Account </MenuItem>
            <MenuItem icon={<PrivacyTipIcon />}> Privacy </MenuItem>
            <MenuItem icon={<NotificationsIcon />}> Notifications </MenuItem>
          </SubMenu>
          <MenuItem icon={<MoreIcon />}> Learn More </MenuItem>
          <MenuItem
            component={<Link to="/login" className="link" />}
            icon={<LogoutIcon />}
          >
            {" "}
            Log Out{" "}
          </MenuItem>
        </Menu>
      </Sidebar>
      <Productlist />
    </>
  );
};

export default Leftsidebar;
