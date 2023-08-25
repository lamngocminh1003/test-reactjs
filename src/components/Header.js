import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/logo192.png";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = (props) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
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
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
                <NavLink to="/users" className="nav-link">
                  Manage Users
                </NavLink>
              </Nav>
              <Nav>
                <NavDropdown title="Setting" id="basic-nav-dropdown">
                  <NavLink to="/login" className="dropdown-item">
                    Login
                  </NavLink>
                  <NavDropdown.Item onClick={() => handleLogOut()}>
                    Logout
                  </NavDropdown.Item>{" "}
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
