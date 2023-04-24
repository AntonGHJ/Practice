/*eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import NavProfile from "./navProfile";
import { getIsLoggedIn } from "../../store/users";
import { useSelector } from "react-redux";

const NavBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn());
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Navbar.Brand>Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">
            Main
          </Link>
          <Link className="nav-link" to="/cars">
            Our cars for sale
          </Link>
          <div
            style={{ marginLeft: "100px", alignContent: "center" }}
            className="navbar-text"
          >
            {" "}
            bestdealer@mail.com <span>/</span> +31077708881
          </div>

          <Link
            className="nav-link"
            style={{ color: "greenyellow", marginLeft: "40px" }}
            to="/contact"
          >
            Contact Us!
          </Link>

          {isLoggedIn && (
            <div className="d-flex navbar-logged-in">
              <Link className="nav-link" to="/messages">
                Messages
              </Link>
              <Link className="nav-link" to={`/cars/createCar`}>
                Add Car
              </Link>
              <NavProfile />
            </div>
          )}

          {!isLoggedIn && (
            <Link
              className="nav-link"
              aria-current="page"
              style={{ color: "green", position: "absolute", right: "10px" }}
              to="/loginForm"
            >
              Admin access
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
