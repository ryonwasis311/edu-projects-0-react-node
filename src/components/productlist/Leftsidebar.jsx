import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
const Leftsidebar = () => {
  return (
    <Sidebar>
      <Menu>
        <MenuItem> Dashboard </MenuItem>
        <MenuItem> Create </MenuItem>
        <MenuItem> About </MenuItem>
        <MenuItem> Contact </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default Leftsidebar;
