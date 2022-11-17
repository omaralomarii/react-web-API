import { Button, Form, FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";

function NavBar({ handelSearch, handelSubmit }) {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "black" }}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} style={{ width: "50px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav  " />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link " to="/" style={{ color: "white" }}>
              Home
            </NavLink>
            <NavLink
              className="nav-link "
              to="/contact"
              style={{ color: "white" }}
            >
              Contact
            </NavLink>

            <NavLink
              className="nav-link "
              to="/about"
              style={{ color: "white" }}
            >
              About
            </NavLink>
            <NavLink
              className="nav-link "
              to="/Login"
              style={{ color: "white" }}
            >
              Login
            </NavLink>
            <NavLink
              className="nav-link "
              to="/Register"
              style={{ color: "white" }}
            >
              Register
            </NavLink>
          </Nav>
          <Nav>
            <Form className="d-flex" autoComplete="off" onSubmit={handelSubmit}>
              <FormControl
                type="search"
                placeholder="Movie Search"
                className="me-2"
                aria-label="search"
                name="query"
                onChange={(e) => {
                  handelSearch(e.target.value);
                }}
              ></FormControl>
              <Button variant="secondary" type="submit">
                Search
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
