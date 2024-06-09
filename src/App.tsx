import "../src/assets/scss/App.scss";
import HomePage from "./pages/HomePage";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container>
      <h1>MaxFilmDB</h1>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Container>
  );
}

export default App;
