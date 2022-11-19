import axios from "axios";
import { useEffect, useState } from "react";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";
import { Button, Form, FormControl, Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar({ handelSearch, handelSubmit }) {
  const isAuth = useIsAuthenticated();
  const signOut = useSignOut();
  const [show, setShow] = useState(false);
  const [favMovie, setFavMovie] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let arr = Array();
  const fetchFavMovies = (fav) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${fav}?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`
      )
      .then((res) => {
        arr.push(res.data);
        setFavMovie(arr);

        console.log(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "black" }}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} style={{ width: "50px" }} />
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ backgroundColor: "white" }}
          aria-controls="responsive-navbar-nav  "
        />
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
            {!isAuth() ? (
              <>
                <NavDropdown
                  title={<span className="text-light my-auto">Account </span>}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item style={{ backgroundColor: "black" }}>
                    <NavLink
                      className="nav-link "
                      to="/Login"
                      style={{ color: "white" }}
                    >
                      LogIn
                    </NavLink>
                    <NavLink
                      className="nav-link "
                      to="/Register"
                      style={{ color: "white" }}
                    >
                      SignUp
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <NavLink
                className="nav-link "
                // to="/Login"
                style={{ color: "white" }}
                onClick={(e) => {
                  signOut();
                  console.log(signOut());
                }}
              >
                Logout
              </NavLink>
            )}
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>fav movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {favMovie.map((m) => (
            <h6>{m.title}</h6>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default NavBar;
