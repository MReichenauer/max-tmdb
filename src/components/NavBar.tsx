import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ThemeContext } from "./ThemeProvider";
import "../assets/scss/ThemeButton.scss";
import { NavLink } from "react-router-dom";
import useAllGenres from "../hooks/useAllGenres";

const NavBar = () => {
  const {
    data: allGenres,
    isError: isErrorGenres,
    error: errorGenres,
    isSuccess: isSuccessGenres,
  } = useAllGenres();

  const theme = useContext(ThemeContext);
  const darkOrLight = theme.theme === "dark" ? "dark" : "light";

  if (isErrorGenres)
    return <p>Ett fel uppstod vid hämtning av genres: {errorGenres.message}</p>;

  return (
    <>
      {isSuccessGenres && (
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
                  {allGenres.map((genre) => (
                    <NavDropdown.Item
                      as={NavLink}
                      key={genre.id}
                      to={`/genres/${genre.id}`}
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
