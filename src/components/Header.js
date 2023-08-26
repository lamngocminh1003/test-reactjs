import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/logo192.png";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
const Header = (props) => {
  const navigate = useNavigate();
  const { logout, user } = useContext(UserContext);

  const handleLogOut = () => {
    logout();
    navigate("/");
    toast.success("Logout successfully");
  };
  return (
    <div>
      {" "}
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="bg-body-tertiary"
          bg="info"
          data-bs-theme="dark"
          fixed="top"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                style={{ width: "32px", height: "32px" }}
                className="d-inline-block align-top me-1"
              />
              ReactJS Test
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {(user && user.email && user.auth === false) ||
                  (window.location.pathname === "/" && (
                    <>
                      <NavLink to="/" className="nav-link">
                        Home
                      </NavLink>
                    </>
                  ))}
                {user && user.email && user.auth === true && (
                  <NavLink to="/users" className="nav-link">
                    Manage Users
                  </NavLink>
                )}
              </Nav>
              <Nav>
                {user && user.email && user.auth === true && (
                  <Navbar.Text className="me-3">
                    Welcome {user.email}
                  </Navbar.Text>
                )}
                <NavDropdown title="Setting" id="basic-nav-dropdown">
                  {user && user.auth === true ? (
                    <NavDropdown.Item onClick={() => handleLogOut()}>
                      Logout
                    </NavDropdown.Item>
                  ) : (
                    <NavLink to="/login" className="dropdown-item">
                      Login
                    </NavLink>
                  )}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};
export default Header;
