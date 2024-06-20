import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ThemeContext } from "./ThemeProvider";
import "../assets/scss/ThemeButton.scss";
import { NavLink } from "react-router-dom";
import useAllGenres from "../hooks/useAllGenres";
import "../assets/scss/NavBar.scss";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useContext(ThemeContext);
  const darkOrLight = theme.theme === "dark" ? "dark" : "light";

  const {
    data: allGenres,
    isError: isErrorGenres,
    error: errorGenres,
    isSuccess: isSuccessGenres,
  } = useAllGenres();

  if (isErrorGenres)
    return <p>Ett fel uppstod vid hämtning av genres: {errorGenres.message}</p>;

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <>
      {isSuccessGenres && (
        <Navbar
          className="fullNav"
          expand="lg"
          data-bs-theme={theme.theme === "dark" ? "dark" : "light"}
          expanded={expanded}
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
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={handleToggle}
              />
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/" onClick={handleClose}>
                  Hem
                </Nav.Link>
                <NavDropdown className="smalbox" title="Genre">
                  {allGenres.map((genre) => (
                    <NavDropdown.Item
                      as={NavLink}
                      key={genre.id}
                      to={`/genres/${genre.id}`}
                      onClick={handleClose}
                    >
                      {genre.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default NavBar;
