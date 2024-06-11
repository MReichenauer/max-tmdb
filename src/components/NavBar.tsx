import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ThemeContext } from "./ThemeProvider";
import "../assets/scss/ThemeButton.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const theme = useContext(ThemeContext);
  const darkOrLight = theme.theme === "dark" ? "dark" : "light";
  return (
    <Navbar
      expand="lg"
      data-bs-theme={theme.theme === "dark" ? "dark" : "light"}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          MaxFilmDB
        </Navbar.Brand>
        <div className="d-flex order-lg-2">
          <button
            className={`themeButton ${darkOrLight}`}
            onClick={theme.toggleTheme}
          />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Hem
            </Nav.Link>
            <NavDropdown title="Genre">
              <NavDropdown.Item>Here</NavDropdown.Item>
              <NavDropdown.Item>Will</NavDropdown.Item>
              <NavDropdown.Item>Render</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
