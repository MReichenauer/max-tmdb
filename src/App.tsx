import "../src/assets/scss/App.scss";
import HomePage from "./pages/HomePage";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import MoviesByGenrePage from "./pages/MoviesByGenrePage";

function App() {
  return (
    <div id="app">
      <NavBar />
      <Container>
        <h1>MaxFilmDB</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/genres/:id" element={<MoviesByGenrePage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
