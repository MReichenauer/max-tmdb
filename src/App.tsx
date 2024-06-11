import { useContext } from "react";
import "../src/assets/scss/App.scss";
import HomePage from "./pages/HomePage";
import { Button, Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { ThemeContext } from "./components/ThemeProvider";

function App() {
  const theme = useContext(ThemeContext);
  return (
    <div id="app">
      <Container>
        <h1>MaxFilmDB</h1>
        <Button onClick={theme.toggleTheme}>Tema</Button>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
