import { Nav, NavLink, NavMenu, Bars } from "./navElments";
import img from "../../assests/place.png";
import { AuthContext } from "../../context/auth-context";
import { useContext } from "react";

const Navbar = ({ toggle }) => {
  const auth = useContext(AuthContext);
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={img} alt="logo" style={{ width: "3rem", height: "3rem" }} />
        </NavLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <li>
            <NavLink to="/" exact activeStyle>
              ALL USERS
            </NavLink>
          </li>
          {auth.isLoggedIn && (
            <li>
              <NavLink to="/u1/places" activeStyle>
                MY PLACES
              </NavLink>
            </li>
          )}
          {auth.isLoggedIn && (
            <li>
              <NavLink to="/places/new" activeStyle>
                ADD PLACE
              </NavLink>
            </li>
          )}
          {!auth.isLoggedIn && (
            <li>
              <NavLink to="/auth" activeStyle>
                AUTHENTICATE
              </NavLink>
            </li>
          )}
          {auth.isLoggedIn && (
            <li>
              <button onClick={auth.logOut}>LOG OUT</button>
            </li>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
