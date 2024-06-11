import "../src/assets/scss/App.scss";
import HomePage from "./pages/HomePage";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div id="app">
      <NavBar />
      <Container>
        <h1>MaxFilmDB</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
