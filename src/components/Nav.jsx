import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

function Nav() {
  return (
    <div>
      <Menu>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
      </Menu>
    </div>
  );
}

export default Nav;
